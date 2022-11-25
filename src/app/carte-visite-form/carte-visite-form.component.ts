import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Subject } from 'rxjs';
import {Profile} from "../Model/Profile";
import { CarteVisiteServiceService } from '../services/carte-visite-service.service';


@Component({
  selector: 'app-carte-visite-form',
  templateUrl: './carte-visite-form.component.html',
  styleUrls: ['./carte-visite-form.component.scss']
})
export class CarteVisiteFormComponent implements OnInit {
  profile : Profile;
  constructor(private carteVisiteService: CarteVisiteServiceService) {
    this.profile = new Profile();
  }

  ngOnInit(): void {
  }

  onClickUpdate() {
    this.carteVisiteService.updateProfileObs(this.profile);
  }
}
