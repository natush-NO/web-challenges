import dbConnect from "../../../../models/connect";
import Place from "../../../../models/Place";

export default async function handler(request, response) {
  await dbConnect();

  const { id } = request.query;

  if (!id) {
    return response
      .status(400)
      .json({ status: "Bad Request", message: "ID is required" });
  }

  if (request.method === "GET") {
    try {
      const place = await Place.findById(id);
      if (!place) {
        return response
          .status(404)
          .json({ status: "Not Found", message: "Place not found" });
      }
      return response.status(200).json(place);
    } catch (error) {
      return response.status(500).json({
        status: "Internal Server Error",
        message: "Error retrieving place",
      });
    }
  }

  if (request.method === "PATCH") {
    try {
      const updatedPlace = await Place.findByIdAndUpdate(id, request.body, {
        new: true,
      });
      if (!updatedPlace) {
        return response
          .status(404)
          .json({ status: "Not Found", message: "Place not found" });
      }
      return response.status(200).json(updatedPlace);
    } catch (error) {
      return response.status(500).json({
        status: "Internal Server Error",
        message: "Error updating place",
      });
    }
  }

  if (request.method === "DELETE") {
    try {
      const deletedPlace = await Place.findByIdAndDelete(id);
      if (!deletedPlace) {
        return response
          .status(404)
          .json({ status: "Not Found", message: "Place not found" });
      }
      return response.status(204).end();
    } catch (error) {
      return response.status(500).json({
        status: "Internal Server Error",
        message: "Error deleting place",
      });
    }
  }

  return response.status(405).json({ status: "Method Not Allowed" });
}
