export interface PlayerModel {
  id: number;
  name: string;
  club: string;
  nationality: string;
  position: string;
  statistics: {
    Overall: number;
    Pace: number;
    Shooting: number;
    Passing: number;
    Dribbling: number;
    Defending: number;
    Physical: number;
  }
}

export const isPlayerModel = (obj: any): obj is PlayerModel => {
  return !!obj.name && typeof obj.name === 'string'
    && !!obj.club && typeof obj.club === 'string'
    && !!obj.nationality && typeof obj.nationality === 'string'
    && !!obj.position && typeof obj.position === 'string'
    && !!obj.statistics
    && !!obj.statistics.Overall && typeof obj.statistics.Overall === 'number'
    && !!obj.statistics.Pace && typeof obj.statistics.Pace === 'number'
    && !!obj.statistics.Shooting && typeof obj.statistics.Shooting === 'number'
    && !!obj.statistics.Passing && typeof obj.statistics.Passing === 'number'
    && !!obj.statistics.Dribbling && typeof obj.statistics.Dribbling === 'number'
    && !!obj.statistics.Defending && typeof obj.statistics.Defending === 'number'
    && !!obj.statistics.Physical && typeof obj.statistics.Physical === 'number'
}