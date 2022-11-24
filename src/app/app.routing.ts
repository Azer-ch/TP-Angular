import { Routes } from '@angular/router';
import { CarteVisiteComponent } from './carte-visite/carte-visite.component';
import { CvComponent } from './cv/cv.component';
import { EmbaucheComponentComponent } from './embauche-component/embauche-component.component';
import { UserDetailsComponent } from './user-details/user-details.component';

export const APP_ROUTES: Routes = [
  {path: 'cv', component: CvComponent},
  {path: 'carteVisite', component: CarteVisiteComponent},
  {path: 'cvEmbauche', component: EmbaucheComponentComponent},
  {path: 'cv/:id', component: UserDetailsComponent}];