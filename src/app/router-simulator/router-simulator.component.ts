import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-router-simulator',
  templateUrl: './router-simulator.component.html',
  styleUrls: ['./router-simulator.component.scss']
})
export class RouterSimulatorComponent implements OnInit {
  private selected : any;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
}
