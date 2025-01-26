import { HttpResponse } from "../models/http-response-model"
import { isPlayerModel, PlayerModel } from "../models/player-model"
import * as PlayerRepository from "../repositories/players-repository"
import * as httpResponse from "../utils/http-helper"

export const getPlayerService = async (): Promise<HttpResponse> => {
  const data: PlayerModel[] | undefined = await PlayerRepository.findAllPlayers()
  let response = null

  if (data) {
    response = await httpResponse.ok(data)
  } else {
    response = await httpResponse.noContent()
  }

  return response
}

export const getPlayerByIdService = async (id: number): Promise<HttpResponse> => {
  const data: PlayerModel | undefined = await PlayerRepository.findPlayerById(id)
  let response = null

  if (data) {
    response = await httpResponse.ok(data)
  } else {
    response = await httpResponse.noContent()
  }
  return response
}

export const createPlayerService = async (player: PlayerModel) => {
  // verify if body matches a player model
  const hasProperties = isPlayerModel(player)

  if (hasProperties) {
    await PlayerRepository.insertPlayer(player)
    return httpResponse.created(player)
  } else {
    return httpResponse.badRequest()
  }
}