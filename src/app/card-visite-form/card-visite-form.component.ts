import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-visite-form',
  templateUrl: './card-visite-form.component.html',
  styleUrls: ['./card-visite-form.component.scss']
})
export class CardVisiteFormComponent implements OnInit {
  name : string;
  firstName : string;
  path : string;
  job : string;
  favouriteCitation:string;
  jobDescription:string;
  keyWords:string;
  constructor() {
    this.name ='';
    this.firstName ='';
    this.path ='';
    this.job ='';
    this.favouriteCitation='';
    this.jobDescription='';
    this.keyWords='';
  }

  ngOnInit(): void {
  }

}
