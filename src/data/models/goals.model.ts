interface IFor {
  minute: Array<any>;
}

export class GoalsModel {
  for: IFor;

  constructor(forParam: IFor) {
    this.for = forParam;
  }
}
