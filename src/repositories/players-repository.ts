import fs from 'fs'
import path from 'path'
import { PlayerModel } from "../models/player-model"

const dataFile = path.join(__dirname, '..', 'data', 'players.json')
const language = 'utf-8'


const database: PlayerModel[] = JSON.parse(fs.readFileSync(dataFile, language))

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  return database
}

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
  return database.find((player) => player.id === id)
}