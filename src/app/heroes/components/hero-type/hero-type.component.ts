import { Component, OnInit, Input } from '@angular/core';

import { heroTypeNames, heroTypes } from '../../constant/hero.constants';
import { Hero } from '../../../models/hero.model';



@Component({
  selector: 'app-hero-type',
  templateUrl: './hero-type.component.html',
  styleUrls: ['./hero-type.component.scss']
})
export class HeroTypeComponent implements OnInit {

  @Input() typeId: number | undefined;
  // @Input() typeId?: number;  ESTE ES COMO EL DE ARRIBA
  // @Input() typeId: number;   ESTE VA CON <app-hero-type [typeId]="hero.typeId?"> </app-hero-type> 


  heroes: Hero[] = [];
  heroTypes = heroTypes;
  heroTypeNames = heroTypeNames;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectType(): void {

  }

}
