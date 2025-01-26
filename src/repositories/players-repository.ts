import fs from 'fs'
import path from 'path'
import { PlayerModel } from "../models/player-model"

const dataFile = path.join(__dirname, '..', 'data', 'players.json')
const language = 'utf-8'


const databaseRawData = fs.readFileSync(dataFile, language)
let database: PlayerModel[]

try { database = JSON.parse(databaseRawData) }
catch (error) { database = [] }


export const findAllPlayers = async (): Promise<PlayerModel[] | undefined> => {
  return database
}

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
  if (database) return database.find((player) => player.id === id)
  else return undefined
}

export const insertPlayer = async (player: PlayerModel): Promise<number> => {

  const nextIndex = (database && database.length > 0)
    ? Math.max(...database.map(data => data.id)) + 1
    : 1

  const { id, ...playerNoId } = player;

  database.push({
    id: nextIndex,
    ...playerNoId
  })

  saveOnDataFile(database)

  return nextIndex
}

export const deletePlayerById = (id: number) => {
  const index = database.findIndex(player => player.id === id)
  if (index !== -1) {
    const deletedData = database[index]
    database.splice(index, 1)
    saveOnDataFile(database)

    return deletedData
  }
  return false
}

export const updatePlayer = () => {
  saveOnDataFile(database)

}

// AUX FUNCTIONS
const saveOnDataFile = (database: PlayerModel[]) => {
  fs.writeFileSync(dataFile, JSON.stringify(database), language)
}