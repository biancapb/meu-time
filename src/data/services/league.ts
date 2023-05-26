import axios from "axios";
import { LeagueModel } from "../models/league.model";

export async function GetLeagues(
  keyAuth: string,
  country: string
): Promise<Array<LeagueModel>> {
  const config = {
    headers: {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": keyAuth,
    },
    params: {
      country,
    },
  };
  const url = "https://v3.football.api-sports.io/leagues";
  return axios.get(url, config);
}
