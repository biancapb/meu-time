interface IFixturesResult {
  home: number;
  away: number;
  total: number;
}

export class FixturesModel {
  played: IFixturesResult;
  wins: IFixturesResult;
  draws: IFixturesResult;
  loses: IFixturesResult;
  constructor(
    played: IFixturesResult,
    wins: IFixturesResult,
    draws: IFixturesResult,
    loses: IFixturesResult
  ) {
    this.played = played;
    this.wins = wins;
    this.draws = draws;
    this.loses = loses;
  }
}
