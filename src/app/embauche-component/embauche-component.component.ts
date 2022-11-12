import { Component, OnInit } from '@angular/core';
import {Cv} from "../Model/Cv";
import {EmbaucheService} from "../services/embauche.service";

@Component({
  selector: 'app-embauche-component',
  templateUrl: './embauche-component.component.html',
  styleUrls: ['./embauche-component.component.scss'],
})
export class EmbaucheComponentComponent implements OnInit {
  constructor(private embaucheService : EmbaucheService) { }

  ngOnInit(): void {
  }
  getEmbauchedService() : Cv[]{
    return this.embaucheService.getCvsEmbauche()
  }
}
