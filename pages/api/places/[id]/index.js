import dbConnect from "../../../../db/connect";
import Destination from "../../../../db/models/Destination";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;
  if (request.method === "GET") {
    try {
      const destination = await Destination.findById(id).populate("reviews");

      if (!destination) {
        return response.status(404).json({ status: "Not Found" });
      }

      response.status(200).json(destination);
    } catch (error) {
      return response.status(405).json({ status: "Method not allowed" });
    }
    //   if (request.method === "GET") {
    //     const destination = await Destination.findById(id);

    //     if (!destination) {
    //       return response.status(404).json({ status: "Not found" });
    //     }

    //     response.status(200).json(destination);
    //   }
  }
}
