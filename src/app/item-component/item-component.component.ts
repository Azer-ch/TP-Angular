import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICv} from "../../models/Cv";

@Component({
  selector: 'app-item-component',
  templateUrl: './item-component.component.html',
  styleUrls: ['./item-component.component.scss']
})
export class ItemComponentComponent implements OnInit {
  @Output() itemClick = new EventEmitter();
  @Input()
  isActive: boolean = false;
  @Input()
  cv: ICv | undefined;
  constructor() { }
  ngOnInit(): void {
  }
  onItemClick(){
    this.itemClick.emit(this.cv?.id);
  }
}
