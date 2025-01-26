import { isStatisticsModel, StatisticsModel } from "./statistics-model";

export interface PlayerModel {
  [key: string]: any;
  id: number;
  name: string;
  club: string;
  nationality: string;
  position: string;
  statistics: StatisticsModel
}

export const isPlayerModel = (obj: any): obj is PlayerModel => {
  return !!obj.name && typeof obj.name === 'string'
    && !!obj.club && typeof obj.club === 'string'
    && !!obj.nationality && typeof obj.nationality === 'string'
    && !!obj.position && typeof obj.position === 'string'
    && !!obj.statistics
    && isStatisticsModel(obj.statistics)
  // && !!obj.statistics
  // && !!obj.statistics.Overall && typeof obj.statistics.Overall === 'number'
  // && !!obj.statistics.Pace && typeof obj.statistics.Pace === 'number'
  // && !!obj.statistics.Shooting && typeof obj.statistics.Shooting === 'number'
  // && !!obj.statistics.Passing && typeof obj.statistics.Passing === 'number'
  // && !!obj.statistics.Dribbling && typeof obj.statistics.Dribbling === 'number'
  // && !!obj.statistics.Defending && typeof obj.statistics.Defending === 'number'
  // && !!obj.statistics.Physical && typeof obj.statistics.Physical === 'number'
}

export const getPlayerModelKeys = () => {
  return ['id', 'name', 'club', 'nationality', 'position', 'statistics']
}

export const getPlayerModelStatisticsKeys = () => {
  return ['Overall', 'Pace', 'Shooting', 'Passing', 'Dribbling', 'Defending', 'Physical'];
}