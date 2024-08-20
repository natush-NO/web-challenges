import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";
import mongoose from "mongoose";

export default async function handler(request, response) {
  await dbConnect();

  const { id } = request.query;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return response.status(400).json({ status: "Invalid ID format" });
  }

  try {
    if (request.method === "GET") {
      const product = await Product.findById(id).populate("reviews");

      if (!product) {
        return response.status(404).json({ status: "Not Found" });
      }

      response.status(200).json(product);
    } else if (request.method === "PUT") {
      const updatedProduct = await Product.findByIdAndUpdate(id, request.body, {
        new: true,
        runValidators: true,
      });

      if (!updatedProduct) {
        return response.status(404).json({ status: "Not Found" });
      }

      response.status(200).json(updatedProduct);
    } else if (request.method === "DELETE") {
      const result = await Product.findByIdAndDelete(id);

      if (!result) {
        return response.status(404).json({ status: "Not Found" });
      }

      response.status(200).json({ status: "Product Deleted" });
    } else {
      response.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      response.status(405).json({ status: "Method Not Allowed" });
    }
  } catch (error) {
    console.error("Error handling request:", error);
    response.status(500).json({ status: "Internal Server Error" });
  }
}
