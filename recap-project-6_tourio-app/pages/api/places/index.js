import dbConnect from "../../../models/connect";
import Place from "../../../models/Place";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const places = await Place.find();
      return response.status(200).json(places);
    } catch (error) {
      return response.status(500).json({ error: "Failed to fetch places" });
    }
  }

  if (request.method === "POST") {
    if (!request.body.name) {
      return response.status(400).json({ error: "Name is required" });
    }

    try {
      const newPlace = new Place(request.body);
      await newPlace.save();
      return response.status(201).json(newPlace);
    } catch (error) {
      console.error("Error occurred while adding place:", error);
      return response.status(500).json({ error: "Failed to add place" });
    }
  }

  return response.status(405).json({ error: "Method Not Allowed" });
}
