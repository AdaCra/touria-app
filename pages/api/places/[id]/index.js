import dbConnect from "../../../../db/connect";
import Place from "../../../../db/models/Place";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;
  console.log(id);
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
  }
}
