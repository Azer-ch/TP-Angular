import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnInit {
  color: string = 'transparent';
  constructor() { }
  ngOnInit(): void {
  }

  resetColor() {
    this.color = 'transparent';
  }

  changeColor(color: string) {
    this.color = color;
  }
}
