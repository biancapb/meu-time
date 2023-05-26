import axios from "axios";

export const validateAuthenticationKey = (key: string) => {
  const config = {
    headers: {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": key,
    },
  };
  const url = "https://v3.football.api-sports.io/status";
  return axios.get(url, config);
};
