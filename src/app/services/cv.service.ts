import { Injectable } from '@angular/core';
import {Cv} from "../Model/Cv";
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  cvs : Cv[] = [{
    id:"1",
    name:"stou",
    firstname:"rr3d",
    age:"23",
    cin:"12345678",
    job:"goat",
    image:""
  },
    {
      id:"2",
      name:"speed",
      firstname:"ishow",
      age:"17",
      cin:"12345678",
      job:"streamer",
      image:this.getImage("speed.jpg")
    }];
  getImage(image : string):string{
    return `assets/images/${image}`;
  }
  getCvs():Cv[]{
    return this.cvs
  }
  getCvById(id : string): any{
    return this.cvs.find(cv => cv.id === id);
  }
  addCv(cv : Cv){
    cv.id = uuid().toString()
    cv.image = this.getImage(cv.image)
    console.log(this.cvs)
    this.cvs.push(cv)
  }
  constructor() { }
}
