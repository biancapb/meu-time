export class LeagueModel {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;

  constructor(
    id: number,
    name: string,
    country: string,
    logo: string,
    flag: string,
    season: number
  ) {
    this.id = id;
    this.name = name;
    this.country = country;
    this.logo = logo;
    this.flag = flag;
    this.season = season;
  }
}
