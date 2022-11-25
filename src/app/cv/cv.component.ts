import { Component, OnInit } from '@angular/core';
import {Cv} from "../Model/Cv";
import {CvService} from "../services/cv.service";
import {EmbaucheService} from "../services/embauche.service";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
})
export class CvComponent implements OnInit {
  selectedCv : Cv | undefined;
  cvs : Cv []=[];
  constructor(private cvService : CvService) { }

  ngOnInit(): void {
    this.cvs = this.cvService.getCvs()
  }

  selectCv(cv : Cv) {
    this.selectedCv = cv;
  }
}
