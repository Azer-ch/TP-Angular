import { Injectable } from '@angular/core';
import { Cv } from '../Model/Cv';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheServiceService {
  public cvs: Array<Cv> = [];

  constructor() { }

  getPath(path : string) {
    return `assets/images/${path}`;
  }

  getCvList(): Array<Cv>{
    return this.cvs;
  }

  addItem(cv: Cv){
      this.cvs.push(cv);
      console.log(this.cvs);
  }
}
