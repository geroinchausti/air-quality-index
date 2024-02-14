export enum AQIStates {
  Good = "good",
  Moderate = "moderate",
  UnhealthyForSensitiveGroups = "unhealthy for sensitive groups",
  Unhealthy = "unhealthy",
  VeryUnhealthy = "very unhealthy",
  Hazardous = "Hazardous",
}

export const mapAqiState = (aqi: number) => {
  switch (true) {
    case aqi >= 0 && aqi <= 50:
      return AQIStates.Good;
    case aqi >= 51 && aqi <= 100:
      return AQIStates.Moderate;
    case aqi >= 101 && aqi <= 150:
      return AQIStates.UnhealthyForSensitiveGroups;
    case aqi >= 151 && aqi <= 200:
      return AQIStates.Unhealthy;
    case aqi >= 201 && aqi <= 300:
      return AQIStates.VeryUnhealthy;
    case aqi > 300:
      return AQIStates.Hazardous;
    default:
      return "Unknow";
  }
};

export const getStorageValueParsedToNumber = (key:string) => {
    return localStorage.getItem(key)?  Number(localStorage.getItem(key)) : 0;
}
