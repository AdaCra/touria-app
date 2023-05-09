import dbConnect from "../../../db/connect";
import Place from "../../../db/models/Place";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const places = await Place.find();
      return response.status(200).json(places);
    } catch (error) {
      console.error(error);
      return response
        .status(405)
        .json({ message: "Method not allowed", error: error.message });
    }
  } else if (request.method === "POST") {
    try {
      const placeData = request.body;
      const place = new Place(placeData);
      console.log(place);
      await place.save();
      return response.status(201).json({ status: "Place saved." });
    } catch (error) {
      console.error(error);
      return response
        .status(400)
        .json({ message: "Bad Request", error: error.message });
    }
  }
}
