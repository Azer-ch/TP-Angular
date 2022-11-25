import {Component, Input, OnInit} from '@angular/core';
import {Profile} from "../Model/Profile";
import { CarteVisiteServiceService } from '../services/carte-visite-service.service';

@Component({
  selector: 'app-carte-visite-card',
  templateUrl: './carte-visite-card.component.html',
  styleUrls: ['./carte-visite-card.component.scss']
})
export class CarteVisiteCardComponent implements OnInit {
  @Input()
  profile : Profile | undefined;
  constructor(private carteVisiteService: CarteVisiteServiceService) { }

  ngOnInit(): void {
    this.carteVisiteService.updateProfile.subscribe((profile) => {
      this.profile = profile;
    })
  }
  getImage():string{
    return `assets/images/${this.profile?.image}`;
  }
}
