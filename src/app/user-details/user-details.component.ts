import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cv } from '../Model/Cv';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  myCv: Cv = this.cvService.getCvs()[0];
  cvId: string = '1';
  constructor(
    private route: ActivatedRoute,
    private cvService: CvService,
    private router: Router
  ) {
    route.params.subscribe((params) => {
      this.cvId = params['id'];
      this.myCv = this.cvService.getCvById(this.cvId);
    });
  }

  ngOnInit(): void {}

  removeCv() {
    this.cvService.removeCv(this.cvId);
    this.router.navigate(['/cv']);
  }
}
