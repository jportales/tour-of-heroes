import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../models/hero.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    const heroes = [
      { id: 12, name: 'Dr. Nice', typeId: 1 },
      { id: 13, name: 'Bombasto', typeId: 3 },
      { id: 14, name: 'Celeritas', typeId: 2 },
      { id: 15, name: 'Magneta', typeId: 1 },
      { id: 16, name: 'RubberMan', typeId: 3 },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr. IQ', typeId: 2 },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    return {heroes};
  }

genId(heroes: Hero[]): number{
  return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
}

  constructor() { }
}
