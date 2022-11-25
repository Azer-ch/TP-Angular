import { Component, OnInit } from '@angular/core';
import {Cv} from "../Model/Cv";
import {NgForm} from "@angular/forms";
import {CvService} from "../services/cv.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.scss']
})
export class AddCvComponent implements OnInit {
  cv  = new Cv()
  constructor(private  cvService : CvService , private  router :Router) { }

  ngOnInit(): void {
  }

  onSubmit(addCvForm: NgForm) {
    this.cv = {
      ...addCvForm.value
    }
    this.cvService.addCv(this.cv)
    this.router.navigate(["/cv"])
  }
}
