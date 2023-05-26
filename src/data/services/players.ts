import axios from "axios";
import { PlayerModel } from "../models/player.model";

export async function GetPlayers(
  keyAuth: string,
  season: number,
  team: number,
  league: number
): Promise<Array<PlayerModel>> {
  const config = {
    headers: {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": keyAuth,
    },
    params: {
      season,
      team,
      league,
    },
  };
  const url = "https://v3.football.api-sports.io/players";
  return axios.get(url, config);
}
