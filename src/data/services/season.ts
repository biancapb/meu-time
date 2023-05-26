import axios from "axios";
export async function GetSeasons(keyAuth: string): Promise<Array<number>> {
  const config = {
    headers: {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": keyAuth,
    },
  };
  const url = "https://v3.football.api-sports.io/players/seasons";
  return axios.get(url, config);
}
