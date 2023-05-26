export class BirthModel {
  date: Date;
  place: string;
  country: string;

  constructor(date: Date, place: string, country: string) {
    this.date = date;
    this.place = place;
    this.country = country;
  }
}
