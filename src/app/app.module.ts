import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import {FormsModule} from "@angular/forms";
import { Component2Component } from './component2/component2.component';
import { CarteVisiteComponent } from './carte-visite/carte-visite.component';
import { CarteVisiteFormComponent } from './carte-visite-form/carte-visite-form.component';
import { CarteVisiteCardComponent } from './carte-visite-card/carte-visite-card.component';
import { CvComponent } from './cv/cv.component';
import { CvDetailComponent } from './cv-detail/cv-detail.component';
import { CvListComponent } from './cv-list/cv-list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { EmbaucheComponentComponent } from './embauche-component/embauche-component.component';
import {EmbaucheService} from "./services/embauche.service";
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routing';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterSimulatorComponent } from './router-simulator/router-simulator.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { NonStopImageComponent } from './non-stop-image/non-stop-image.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    CarteVisiteComponent,
    CarteVisiteFormComponent,
    CarteVisiteCardComponent,
    CvComponent,
    CvDetailComponent,
    CvListComponent,
    ListItemComponent,
    DefaultImagePipe,
    EmbaucheComponentComponent,
    NavBarComponent,
    RouterSimulatorComponent,
    UserDetailsComponent,
    NonStopImageComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        RouterModule.forRoot(APP_ROUTES)
    ],
  providers:[EmbaucheService],
  bootstrap: [AppComponent]
})
export class AppModule { }
