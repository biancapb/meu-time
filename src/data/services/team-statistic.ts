import axios from "axios";
import { TeamStatisticModel } from "../models/teamStatistic.model";

export async function GetTeamStatistic(
  team: string,
  season: string,
  league: string,
  keyAuth: string
): Promise<TeamStatisticModel> {
  const config = {
    headers: {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": keyAuth,
    },
    params: {
      team,
      season,
      league,
    },
  };
  const url = "https://v3.football.api-sports.io/teams/statistics";
  return axios.get(url, config);
}
