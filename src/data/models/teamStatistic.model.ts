import { LeagueModel } from "./league.model";
import { TeamModel } from "./team.model";

export class TeamStatisticModel {
  league: LeagueModel;
  team: TeamModel;

  constructor(league: LeagueModel, team: TeamModel) {
    this.league = league;
    this.team = team;
  }
}
