import dbConnect from "../../../db/connect";
import Destination from "../../../db/models/Destination";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const destinations = await Destination.find();
      return response.status(200).json(destinations);
    } catch (error) {
      console.error(error);
      return response
        .status(405)
        .json({ message: "Method not allowed", error: error.message });
    }
  }
}
