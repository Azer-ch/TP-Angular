import {Component, Input, OnInit} from '@angular/core';
import {DISHES} from "../shared/dishes";
import {Dish} from "../shared/dish";

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.scss']
})
export class DishDetailsComponent implements OnInit {
  @Input("dish")
  selectedDish : Dish | undefined;
  constructor() {
  }

  ngOnInit(): void {
  }
}
