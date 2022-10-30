import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroTypeComponent } from './components/hero-type/hero-type.component';
import { MessagesComponent } from './components/messages/messages.component';
import { LabelComponent } from './components/label/label.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    LabelComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroTypeComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientModule,

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
