import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from 'src/app/heroes/model/hero.model';

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
    const users = [
      { id: 1, name: 'Holi', typeId: 1 },
      { id: 2, name: 'Provinchi', typeId: 3 },
      { id: 3, name: 'Adolfito', typeId: 2 },
      { id: 4, name: 'Paquito', typeId: 1 },
      { id: 5, name: 'Juanito', typeId: 3 },
      { id: 6, name: 'Musson' },
      { id: 7, name: 'inni', typeId: 2 },
      { id: 8, name: 'david' },
      { id: 9, name: 'Tao' }
    ];
    const toDos = [
      {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false
      },
      {
        userId: 1,
        id: 18,
        title: "dolorum est consequatur ea mollitia in culpa",
        completed: false
      },
      {
        userId: 1,
        id: 19,
        title: "molestiae ipsa aut voluptatibus pariatur dolor nihil",
        completed: true
      },
      {
        userId: 1,
        id: 20,
        title: "ullam nobis libero sapiente ad optio sint",
        completed: true
      },
      {
        userId: 2,
        id: 21,
        title: "suscipit repellat esse quibusdam voluptatem incidunt",
        completed: false
      },
      {
        userId: 2,
        id: 22,
        title: "distinctio vitae autem nihil ut molestias quo",
        completed: true
      },
      {
        userId: 2,
        id: 23,
        title: "et itaque necessitatibus maxime molestiae qui quas velit",
        completed: false
      },
      {
        userId: 3,
        id: 24,
        title: "adipisci non ad dicta qui amet quaerat doloribus ea",
        completed: false
      }
    ];
    
    return {heroes: heroes, users: users, toDos: toDos};
  }

genId(heroes: Hero[]): number{
  return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
}

  constructor() { }
}
