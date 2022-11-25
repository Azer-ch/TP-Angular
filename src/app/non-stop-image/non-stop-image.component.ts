import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-non-stop-image',
  templateUrl: './non-stop-image.component.html',
  styleUrls: ['./non-stop-image.component.scss']
})
export class NonStopImageComponent implements OnInit {
  shouldStop: Boolean = false;
  imageList: string[] = [
    this.getImage("speed.jpg"),
    this.getImage("stou.jpg"),
    this.getImage("alberto.png"),
]
  observable = new Observable(
    (observer) => {
    let i = 2;
    observer.next(this.imageList[0]);
    setInterval(() => {
    if( i < 0)
      {
        i=2;
      }
    if (this.shouldStop) {
    observer.complete();
    }
    observer.next(this.imageList[i--]);
    }, 1000);
    });

  
  constructor() { }

  ngOnInit(): void {
  }
  
  getImage(image : string):string{
    return `assets/images/${image}`;
  }
  stopObservable(){
    this.shouldStop = true;
  }
}
