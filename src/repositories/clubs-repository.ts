import path from "path";
import fs from "fs";
import { ClubModel } from "../models/club-model";

const dataFile = path.join(__dirname, '..', 'data', 'clubs.json')
const language = 'utf-8'


const databaseRawData = fs.readFileSync(dataFile, language)
let database: ClubModel[]

try { database = JSON.parse(databaseRawData) }
catch (error) { database = [] }

export const findAllClubs = async (): Promise<ClubModel[]> => {
  return database
}