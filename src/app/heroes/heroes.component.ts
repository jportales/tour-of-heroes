import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;
  selectedHero: Hero;
  users: User[];

  // hero: Hero = {
  //   id: 1,
  //   name: 'Winstorm'
  // };

  

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

   getUsers(): void {
     this.userService.getUsers().subscribe( data =>{
       this.users = data;
     })
   }
  
  //  getUsersPromise(): void{
  //     this.userService.getUsersPromise().then( data => {
  //       this.users = data;
  //    });
  //  }

  //ES IGUAL QUE EL DE arriba, lo único, que cambia su estructura para hacerlo más limpio
     async getUsersPromise(): Promise<void>{     
       this.users = await this.userService.getUsersPromise();
     }

   onSelect(hero: Hero):void{
     this.selectedHero = hero;
   }




  // onModelChange(name: string): void {
  //   // this.hero.name = name
  // }


}
