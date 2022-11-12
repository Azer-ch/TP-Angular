import {Component, Input, OnInit} from '@angular/core';
import {ICv} from "../../models/Cv";

@Component({
  selector: 'app-detail-component',
  templateUrl: './detail-component.component.html',
  styleUrls: ['./detail-component.component.scss']
})
export class DetailComponentComponent implements OnInit {
  @Input()
  cv : ICv | undefined;
  constructor() { }

  ngOnInit(): void {
  }
  getPath() : string {
    return `assets/images/${this.cv?.path}`;
  }

}
