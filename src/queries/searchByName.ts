import { ResultsByName } from "../types/location.types";
import { apiClient } from "./config";

export const searchByName = async (
  name: string
): Promise<ResultsByName[]> => {
  const { data: response } = await apiClient.get(`/search/?token=${process.env.REACT_APP_AQI_TOKEN}&keyword=${name}`);
  return response.data;
};

