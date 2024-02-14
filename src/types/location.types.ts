import { AQIStates } from '../utils';

export type Coordinates = {
  longitude: number;
  latitude: number;
};

export type City = {
  geo: number[];
  location: string;
  name: string;
  url: string;
};

export type ValueItem = {
  avg: number;
  day: string;
  max: number;
  min: number;
};

export type MeasureResults = {
  aqi: number;
  city: City;
  forecast: {
    daily: {
      o3: ValueItem[];
      pm10: ValueItem[];
      pm25: ValueItem[];
    };
  };
  status: AQIStates;
};


export type ResultsByName = {
    aqi: number;
    station: {
        name:string;
    };
    uid: number;
  };
