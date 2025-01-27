import * as httpResponse from "../utils/http-helper"
import * as ClubsRepository from "../repositories/clubs-repository"

export const getClubsService = async () => {

  const data = await ClubsRepository.findAllClubs()

  if (data.length > 0) return httpResponse.ok(data)
  else return httpResponse.noContent()
}