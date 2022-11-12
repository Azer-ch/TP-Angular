import { Component, OnInit } from '@angular/core';
import { Cv } from '../Model/Cv';
import { EmbaucheServiceService } from './embauche-service.service';

@Component({
  selector: 'app-cv-embauche',
  templateUrl: './cv-embauche.component.html',
  styleUrls: ['./cv-embauche.component.scss']
})
export class CvEmbaucheComponent implements OnInit{
  constructor(public embaucheService: EmbaucheServiceService) { 
  }

  ngOnInit(): void {
  }


  getCvs(): Array<Cv>{
    return this.embaucheService.getCvList();
  }
}
