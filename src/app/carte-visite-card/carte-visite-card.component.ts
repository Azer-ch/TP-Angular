import {Component, Input, OnInit} from '@angular/core';
import {Profile} from "../Model/Profile";

@Component({
  selector: 'app-carte-visite-card',
  templateUrl: './carte-visite-card.component.html',
  styleUrls: ['./carte-visite-card.component.scss']
})
export class CarteVisiteCardComponent implements OnInit {
  @Input()
  profile : Profile | undefined;
  constructor() { }

  ngOnInit(): void {
  }
  getImage():string{
    return `assets/images/${this.profile?.image}`;
  }
}
