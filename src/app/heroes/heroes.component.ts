import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { HeroService } from '../services/hero.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  selectedHero: Hero;
  users: User[];

  // hero: Hero = {
  //   id: 1,
  //   name: 'Winstorm'
  // };

constructor(private heroeService: HeroService, private messageService: MessageService) { }

   ngOnInit(): void {
    this.getHeroes();
   }

   onSelect(hero: Hero):void{
     this.selectedHero = hero;
     this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
   }

   getHeroes():void {
    this.heroeService.getHeroes().subscribe(heroes => this.heroes = heroes);
   }


  // onModelChange(name: string): void {
  //   // this.hero.name = name
  // }

///////////////////////////////////////////////////////////
// practica que hicimos con sergio sobre modelos y servicios

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
