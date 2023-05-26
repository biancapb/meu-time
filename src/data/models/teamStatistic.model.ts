import { FixturesModel } from "./fixtures.model";
import { GoalsModel } from "./goals.model";
import { LeagueModel } from "./league.model";
import { TeamModel } from "./team.model";

interface ILineup {
  formation: string;
  played: number;
}
export class TeamStatisticModel {
  league: LeagueModel;
  team: TeamModel;
  fixtures: FixturesModel;
  goals: GoalsModel;
  lineups: Array<ILineup>;

  constructor(
    league: LeagueModel,
    team: TeamModel,
    fixtures: FixturesModel,
    goals: GoalsModel,
    lineups: Array<ILineup>
  ) {
    this.league = league;
    this.team = team;
    this.fixtures = fixtures;
    this.goals = goals;
    this.lineups = lineups;
  }
}
