import {Component, Input, OnInit} from '@angular/core';
import {Cv} from "../Model/Cv";
import {EmbaucheService} from "../services/embauche.service";

@Component({
  selector: 'app-cv-detail',
  templateUrl: './cv-detail.component.html',
  styleUrls: ['./cv-detail.component.scss'],
  providers:[]
})
export class CvDetailComponent implements OnInit {
  @Input()
  cv : Cv | undefined;
  constructor(private embaucheService : EmbaucheService) { }
  ngOnInit(): void {
  }

  addCvEmbauche(cv: Cv) {
    this.embaucheService.addCvEmbauche(cv)
  }
}
