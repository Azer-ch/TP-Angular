import {Component, Input, OnInit} from '@angular/core';
import {Cv} from "../Model/Cv";

@Component({
  selector: 'app-cv-detail',
  templateUrl: './cv-detail.component.html',
  styleUrls: ['./cv-detail.component.scss']
})
export class CvDetailComponent implements OnInit {
  @Input()
  cv : Cv | undefined;
  constructor() { }
  ngOnInit(): void {
  }

}
