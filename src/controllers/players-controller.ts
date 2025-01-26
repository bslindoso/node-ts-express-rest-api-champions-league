import { Request, Response } from "express"
import * as PlayersService from "../services/player-services"

export const getPlayer = async (req: Request, res: Response) => {
  const httpResponse = await PlayersService.getPlayerService()

  res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const getPlayerById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)

  const httpResponse = await PlayersService.getPlayerByIdService(id)

  res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const postPlayer = async (req: Request, res: Response) => {
  const bodyValue = req.body

  const httpResponse = await PlayersService.createPlayerService(bodyValue)

  res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const deletePlayer = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)

  const httpResponse = await PlayersService.deletePlayerByIdService(id)

  res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const updatePlayer = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const bodyValue = req.body

  const httpResponse = await PlayersService.updatePlayerByIdService(id, bodyValue)

  res.status(httpResponse.statusCode).json(httpResponse.body)
}