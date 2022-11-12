import { Component, OnInit } from '@angular/core';
import {Cv} from "../Model/Cv";
import {CvService} from "../services/cv.service";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
  providers:[CvService]
})
export class CvComponent implements OnInit {
  selectedCv : Cv | undefined;
  cvs : Cv []=[];
  cvsEmbauche : Cv[] =[];
  constructor(private cvService : CvService) { }

  ngOnInit(): void {
    this.cvs = this.cvService.getCvs()
  }

  selectCv(cv : Cv) {
    this.selectedCv = cv;
  }
}
