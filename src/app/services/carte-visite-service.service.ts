import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Profile } from '../Model/Profile';

@Injectable({
  providedIn: 'root'
})
export class CarteVisiteServiceService {
  updateProfile = new Subject<Profile>();
  constructor() { }

  updateProfileObs(profile: Profile){
    this.updateProfile.next(profile);
  }
}
