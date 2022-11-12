import { Component, OnInit } from '@angular/core';
import { ICv} from "../../models/Cv";

@Component({
  selector: 'app-cv-component',
  templateUrl: './cv-component.component.html',
  styleUrls: ['./cv-component.component.scss']
})
export class CvComponentComponent implements OnInit {
  cvs: Array<ICv>;
  selectedCvId : string | undefined;
  onItemSelected(id : string){
   this.selectedCvId = id;
  }
  constructor() {
    this.cvs = [
      {
        id: "1",
        name: "stou",
        firstname: "rr3ad",
        age: "22",
        cin: "072234234",
        job: "engineer",
        path: this.getPath("stou.jpg")
      },
      {
        id: "2",
        name: "mehdi",
        firstname: "machfer",
        age: "22",
        cin: "072234234",
        job: "engineer",
        path: this.getPath("tim_logo.png")
      }
    ]
  }
  getPath(path  : string) {
    return `assets/images/${path}`
  }

  ngOnInit(): void {
  }

  getSelectedCv() {
    let cv = this.cvs?.filter(cv => cv.id === this.selectedCvId);
    return cv[0];
  }
}
