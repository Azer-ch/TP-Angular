import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component implements OnInit {
  @Output()
  colorChange = new EventEmitter();
  @Input()
  parentColor: string | undefined;
  favouriteColor: string | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

  onColorChange(): void {
    this.colorChange.emit(this.favouriteColor);
  }
}
