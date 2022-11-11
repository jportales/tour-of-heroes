import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

import { Hero } from 'src/app/models/hero.model';
import { HeroService } from 'src/app/shared/services/hero.service';


@Component({
  selector: 'app-hero-table',
  templateUrl: './hero-table.component.html',
  styleUrls: ['./hero-table.component.scss'],
  providers: [MessageService],
  styles: [`
  :host ::ng-deep .p-datatable .p-datatable-thead > tr > th {
      position: -webkit-sticky;
      position: sticky;
      top: 0px;
  }
`]
})
export class HeroTableComponent implements OnInit {

  heroes: Hero[];
  cols: any[];
  selectedProduct1: Hero;
  first = 0;
  rows = 5;

  constructor(private heroeService: HeroService, private messageService: MessageService) { }


  ngOnInit(): void {
    this.getHeroes();

    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'name', header: 'Name' },
      { field: 'typeId', header: 'TypeId' }
    ];

  }

  getHeroes(): void {
    this.heroeService.getHeroes().subscribe(data => this.heroes = data);
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.heroes ? this.first === (this.heroes.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.heroes ? this.first === 0 : true;
  }

  selectHero(hero: Hero) {
    this.messageService.add({ severity: 'info', summary: 'Hero Selected', detail: hero.name });
  }
}