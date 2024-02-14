import { Coordinates, MeasureResults } from "../types/location.types";
import { mapAqiState } from "../utils";
import { apiClient } from "./config";

interface GetMeasurementsQueryParams extends Coordinates {}
export const fetchMeasurements = async (
  params: GetMeasurementsQueryParams
): Promise<MeasureResults> => {
  const { data: response } = await apiClient.get(
    `/feed/geo:${params.latitude};${params.longitude}/?token=${process.env.REACT_APP_AQI_TOKEN}`
  );

  return { ...response.data, status: mapAqiState(response?.data?.aqi) };
}
