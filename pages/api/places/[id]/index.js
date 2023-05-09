import dbConnect from "../../../../db/connect";
import Place from "../../../../db/models/Place";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;
  // console.log(id);
  if (request.method === "GET") {
    try {
      const place = await Place.findById(id);

      if (!place) {
        return response.status(404).json({ status: "Not Found" });
      }

      response.status(200).json(place);
    } catch (error) {
      return response.status(405).json({ status: "Method not allowed" });
    }
  } else if (request.method === "POST") {
    try {
      const placeData = request.body;
      const place = new Place(placeData);
      await place.save();
      return response.status(201).json({ status: "Place saved." });
    } catch (error) {
      console.error(error);
      return response
        .status(400)
        .json({ message: "Bad Request", error: error.message });
    }
  } else if (request.method === "PATCH") {
    try {
      const placeToUpdate = await Place.findByIdAndUpdate(id, {
        $set: request.body,
      });
      response.status(200).json(placeToUpdate);
    } catch (error) {
      return response
        .status(400)
        .json({ message: "Bad Request", error: error.message });
    }
  } else if (request.method === "DELETE") {
    try {
      const placeToDelete = await Place.findByIdAndDelete(id);
      response.status(200).json(placeToDelete);
    } catch (error) {
      return response
        .status(400)
        .json({ message: "Bad Request", error: error.message });
    }
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
