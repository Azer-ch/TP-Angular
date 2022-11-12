import { Component, OnInit } from '@angular/core';
import {Cv} from "../Model/Cv";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {
  cvs : Cv[] = [{
    id:"1",
    name:"stou",
    firstname:"rr3d",
    age:"23",
    cin:"12345678",
    job:"goat",
    image:this.getImage("stou.jpg")
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
  selectedCv : Cv | undefined ;
  constructor() { }

  ngOnInit(): void {
  }
  getImage(image : string):string{
    return `assets/images/${image}`;
  }

  selectCv(cv : Cv) {
    this.selectedCv = cv;
  }
}
