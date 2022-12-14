import { Routes } from '@angular/router';
import { CarteVisiteComponent } from './carte-visite/carte-visite.component';
import { CvComponent } from './cv/cv.component';
import { EmbaucheComponentComponent } from './embauche-component/embauche-component.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import {AuthentificationFormComponent} from "./authentification-form/authentification-form.component";
import {AddCvComponent} from "./add-cv/add-cv.component";

export const APP_ROUTES: Routes = [
  {path: 'cv', component: CvComponent},
  {path: 'addCv', component: AddCvComponent},
  {path: 'cvEmbauche', component: EmbaucheComponentComponent},
  {path: 'carteVisite', component: CarteVisiteComponent},
  {path: 'cv/:id', component: UserDetailsComponent},
  {path:'login' , component : AuthentificationFormComponent}];
