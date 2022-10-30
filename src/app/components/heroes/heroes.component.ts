import { Component, OnInit } from '@angular/core';

import { Hero } from '../../models/hero.model';
import { HeroService } from '../../services/hero.service';
import { heroTypeNames } from '../../constants/hero.constants';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  heroTypeNames = heroTypeNames;

constructor(private heroeService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
   }

  getHeroes():void {
    this.heroeService.getHeroes().subscribe(heroes => this.heroes = heroes);
   }

  add(name: string): void {
    name = name.trim();
    if(!name) {return;}
    this.heroeService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      })
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroeService.deleteHero(hero.id).subscribe();
  }


  // onModelChange(name: string): void {
  //   // this.hero.name = name
  // }

///////////////////////////////////////////////////////////
// practica que hicimos con sergio sobre modelos y servicios

//  users: User[]; variable de la practica modelos y servicios de sergio

//  constructor(private userService: UserService) { } Este contructor es el que usamos para llamar al servicio de la practica que hicimos con sergio sobre modelos y servicios

  // ngOnInit(): void {
  //   this.getUsers();
  // }

  //  getUsers(): void {
  //    this.userService.getUsers().subscribe( data =>{
  //      this.users = data;
  //    })
  //  }
  
  //   getUsersPromise(): void{
  //      this.userService.getUsersPromise().then( data => {
  //        this.users = data;
  //     });
  //   }

  //    async getUsersPromiseAsync(): Promise<void>{     
  //      this.users = await this.userService.getUsersPromiseAsync();
  //    }
/////////////////////////////////////////////////////////////////////




}