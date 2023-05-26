import axios from "axios";
import { CountryModel } from "../models/country.model";

export async function GetCountries(
  keyAuth: string
): Promise<Array<CountryModel>> {
  const config = {
    headers: {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": keyAuth,
    },
  };
  const url = "https://v3.football.api-sports.io/countries";
  return axios.get(url, config);
}
