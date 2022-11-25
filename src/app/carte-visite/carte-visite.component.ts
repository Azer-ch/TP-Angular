import { Component, OnInit } from '@angular/core';
import {Profile} from "../Model/Profile";

@Component({
  selector: 'app-carte-visite',
  templateUrl: './carte-visite.component.html',
  styleUrls: ['./carte-visite.component.scss']
})
export class CarteVisiteComponent implements OnInit {
  profile : Profile | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  updateProfile(profile: any) {
    this.profile = profile;
  }
}
