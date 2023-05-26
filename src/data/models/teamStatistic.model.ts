import { FixturesModel } from "./fixtures.model";
import { GoalsModel } from "./goals.model";
import { LeagueModel } from "./league.model";
import { TeamModel } from "./team.model";

export class TeamStatisticModel {
  league: LeagueModel;
  team: TeamModel;
  fixtures: FixturesModel;
  goals: GoalsModel;

  constructor(
    league: LeagueModel,
    team: TeamModel,
    fixtures: FixturesModel,
    goals: GoalsModel
  ) {
    this.league = league;
    this.team = team;
    this.fixtures = fixtures;
    this.goals = goals;
  }
}
