import axios from "axios";
import { TeamModel } from "../models/team.model";

export async function GetTeams(
  keyAuth: string,
  league: number
): Promise<Array<TeamModel>> {
  const config = {
    headers: {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": keyAuth,
    },
    params: {
      league,
    },
  };
  const url = "https://v3.football.api-sports.io/teams";
  return axios.get(url, config);
}
