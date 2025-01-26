export interface StatisticsModel {
  [key: string]: any;
  Overall: number;
  Pace: number;
  Shooting: number;
  Passing: number;
  Dribbling: number;
  Defending: number;
  Physical: number;

}

export const isStatisticsModel = (obj: any): obj is StatisticsModel => {
  return !!obj.Overall && typeof obj.Overall === 'number'
    && !!obj.Pace && typeof obj.Pace === 'number'
    && !!obj.Shooting && typeof obj.Shooting === 'number'
    && !!obj.Passing && typeof obj.Passing === 'number'
    && !!obj.Dribbling && typeof obj.Dribbling === 'number'
    && !!obj.Defending && typeof obj.Defending === 'number'
    && !!obj.Physical && typeof obj.Physical === 'number'
}