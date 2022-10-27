import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

import { FormsModule } from '@angular/forms';
import { LabelComponent } from './label/label.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroTypeComponent } from './hero-type/hero-type.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    LabelComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroTypeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
