import { Component, OnInit } from '@angular/core';
import {Login} from "../Model/Login";

@Component({
  selector: 'app-authentification-form',
  templateUrl: './authentification-form.component.html',
  styleUrls: ['./authentification-form.component.scss']
})
export class AuthentificationFormComponent implements OnInit {
  login  = new Login()
  constructor() { }
  ngOnInit(): void {
  }

}
