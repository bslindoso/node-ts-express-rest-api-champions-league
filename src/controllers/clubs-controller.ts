import { Request, Response } from "express"
import * as ClubsService from "../services/clubs-services"

export const getClubs = async (req: Request, res: Response) => {
  const httpResponse = await ClubsService.getClubsService()

  res.status(httpResponse.statusCode).json(httpResponse.body)
}