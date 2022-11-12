import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICv} from "../../models/Cv";

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.scss']
})
export class ListComponentComponent implements OnInit {
  @Input()
  cvs : ICv[] | undefined;
  @Input()
  selectedCvId: string | undefined;
  @Output() selectItem = new EventEmitter();
  onItemSelect(id : string){
    this.selectItem.emit(id);
  }
  constructor() { }
  ngOnInit(): void {
  }

}
