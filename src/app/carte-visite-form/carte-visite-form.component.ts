import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Profile} from "../Model/Profile";

@Component({
  selector: 'app-carte-visite-form',
  templateUrl: './carte-visite-form.component.html',
  styleUrls: ['./carte-visite-form.component.scss']
})
export class CarteVisiteFormComponent implements OnInit {
  @Output()
  updateProfile = new EventEmitter();
  profile : Profile;
  constructor() {
    this.profile = new Profile();
  }

  ngOnInit(): void {
  }

  onClickUpdate() {
    this.updateProfile.emit(this.profile);
  }
}
