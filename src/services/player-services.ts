import { HttpResponse } from "../models/http-response-model"
import { getPlayerModelKeys, getPlayerModelStatisticsKeys, isPlayerModel, PlayerModel } from "../models/player-model"
import * as PlayerRepository from "../repositories/players-repository"
import * as httpResponse from "../utils/http-helper"

export const getPlayerService = async (): Promise<HttpResponse> => {
  const data: PlayerModel[] | undefined = await PlayerRepository.findAllPlayers()
  let response = null

  if (data) {
    response = await httpResponse.ok(data)
  } else {
    response = await httpResponse.noContent(`Empty database`)
  }
  return response
}

export const getPlayerByIdService = async (id: number): Promise<HttpResponse> => {
  const data: PlayerModel | undefined = await PlayerRepository.findPlayerById(id)

  if (data) {
    return await httpResponse.ok(data)
  } else {
    return await httpResponse.noContent(`No player with id ${id}`)
  }

}

export const createPlayerService = async (player: PlayerModel): Promise<HttpResponse> => {
  // verify if body matches a player model
  const hasProperties = isPlayerModel(player)
  let response = null

  if (hasProperties) {
    const index = await PlayerRepository.insertPlayer(player)
    const { id, ...playerNoId } = player;

    response = await httpResponse.created({ id: index, ...playerNoId })
  } else {
    response = await httpResponse.badRequest()
  }
  return response
}

export const deletePlayerByIdService = async (id: number): Promise<HttpResponse> => {

  const deleted = PlayerRepository.deletePlayerById(id)
  const message = { message: 'Deleted successfully', data: { ...deleted } }
  let response = null

  if (deleted) {
    response = await httpResponse.ok(message)
  } else {
    response = await httpResponse.notFound(`Not found id ${id}`)
  }

  return response
}

export const updatePlayerByIdService = async (id: number, body: PlayerModel): Promise<HttpResponse> => {
  const player: PlayerModel | undefined = await PlayerRepository.findPlayerById(id)


  if (!player) return await httpResponse.notFound(`Not found id ${id}`);

  const allowedKeys = getPlayerModelKeys();
  const allowedStatsKeys = getPlayerModelStatisticsKeys();

  const extraProperties = Object.keys(body).filter(key => !allowedKeys.includes(key) || (key === 'statistics' && Object.keys(body.statistics).some(statKey => !allowedStatsKeys.includes(statKey))));


  if (extraProperties.length > 0) {
    return await httpResponse.badRequest(`Invalid property provided: ${extraProperties.join(', ')}`);
  }

  for (const key of allowedKeys) {
    if (key in body) {
      if (key === 'statistics') {
        for (const statKey of allowedStatsKeys) {
          if (statKey in body.statistics) {
            player.statistics[statKey] = body.statistics[statKey];
          }
        }
      } else {
        player[key] = body[key];
      }
    }
  }

  PlayerRepository.updatePlayer()

  return httpResponse.ok(player)
}