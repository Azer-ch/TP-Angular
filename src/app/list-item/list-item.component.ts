import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cv} from "../Model/Cv";

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Output()
  selectCv = new EventEmitter();
  @Input()
  cv : Cv | undefined;
  @Input()
  isSelected : boolean | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  onClickSelectCv() {
    this.selectCv.emit(this.cv);
  }
}
