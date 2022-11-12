import { Injectable } from '@angular/core';
import {Cv} from "../Model/Cv";

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  cvEmbauche : Cv[]=[]
  addCvEmbauche(cv : Cv){
    this.cvEmbauche.push(cv)
  }
  getCvsEmbauche():Cv[]{
    return this.cvEmbauche
  }
  constructor() { }
}
