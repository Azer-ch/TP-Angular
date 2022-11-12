import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cv} from "../Model/Cv";

@Component({
  selector: 'app-cv-list',
  templateUrl: './cv-list.component.html',
  styleUrls: ['./cv-list.component.scss']
})
export class CvListComponent implements OnInit {
  @Output()
  selectedCv = new EventEmitter();
  @Input()
  cvs : Cv[] | undefined;
  @Input()
  selectedId:string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  selectCv(cv: Cv) {
    this.selectedCv.emit(cv);
  }
}
