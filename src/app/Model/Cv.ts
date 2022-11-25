export class Cv{
  id : string;
  name : string;
  firstname : string;
  age : string;
  cin : string;
  job : string;
  image : string;
  constructor()
  constructor(id = "", name = "", firstname = "", age = "", cin = "", job = "", image= "") {
    this.id = id;
    this.name = name;
    this.firstname = firstname;
    this.age = age;
    this.cin = cin;
    this.job = job;
    this.image = image;
  }
}
