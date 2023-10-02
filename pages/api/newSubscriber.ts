import { NextApiRequest, NextApiResponse } from "next";
import { errorResponseCreator, successResponseCreator } from "../../utils/responseFormat";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  req.statusCode = 200;

  // vet method
  //get details
  // store details in db
  //send notifcation to marvel
  //send notifcation to subscriber

  if (req.method !== "POST") {
    const errorResponse = errorResponseCreator(500, "", {});
    return res.status(errorResponse.statusCode).json(errorResponse);
  }

  try {
    const { bookerId, listingId } = req.body;

    const buyerData = await getFromTable(userTable, bookerId);
    const listingData = await getFromTable(listingTable, listingId);

    const successResponse = successResponseCreator(200, "Bookings Details fetched successfully", { buyerData, listingData });
    return res.status(successResponse.statusCode).json(successResponse);
  } catch (err) {
    const errorResponse = errorResponseCreator(500, "Error fetching bookings details", err);
    return res.status(errorResponse.statusCode).json(errorResponse);
  }
}
