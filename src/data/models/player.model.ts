import { BirthModel } from "./birth.model";

export class PlayerModel {
  id: number;
  name: string;
  firstname: string;
  lastname: string;
  age: number;
  birth: BirthModel;
  nationality: string;
  height: string;
  weight: string;
  injured: boolean;
  photo: string;

  constructor(
    id: number,
    name: string,
    firstname: string,
    lastname: string,
    age: number,
    birth: BirthModel,
    nationality: string,
    height: string,
    weight: string,
    injured: boolean,
    photo: string
  ) {
    this.id = id;
    this.name = name;
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.birth = birth;
    this.nationality = nationality;
    this.height = height;
    this.weight = weight;
    this.injured = injured;
    this.photo = photo;
  }
}
