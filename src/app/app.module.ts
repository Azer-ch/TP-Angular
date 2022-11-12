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
    DefaultImagePipe
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
