import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HeroesComponent } from './components/heroes-page/heroes-page.component';
import { LabelComponent } from './components/label/label.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { MessagesComponent } from '../shared/component/messages/messages.component';
import { HeroTypeComponent } from './components/hero-type/hero-type.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { HeroTableComponent } from './components/hero-table/hero-table.component';

@NgModule({
  declarations: [
    HeroesComponent,
    LabelComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroTypeComponent,
    HeroSearchComponent,
    HeroTableComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    SharedModule
  ],
  exports:[
    HeroSearchComponent
  ]
})
export class HeroesModule { }
