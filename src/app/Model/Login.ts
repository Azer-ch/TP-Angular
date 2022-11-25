export class Login {
  email: string;
  password: string;

  constructor()
  constructor(email = "", password = "") {
    this.email = email;
    this.password = password;
  }

}
