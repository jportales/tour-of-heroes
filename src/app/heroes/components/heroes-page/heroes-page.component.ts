import { Component, OnInit, ViewChild } from '@angular/core';

import { HeroService } from 'src/app/shared/services/hero.service';
import { heroTypeNames } from '../../constant/hero.constants';
import { Hero } from '../../../models/hero.model';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes-page.component.html',
  styleUrls: ['./heroes-page.component.scss']
})
export class HeroesComponent implements OnInit {

  @ViewChild('createHeroForm') createHeroForm: NgForm;

  display: boolean = false;

  heroes: Hero[] = [];
  heroTypeNames = heroTypeNames;
 
  //opcion A
  newHeroName: string;
  //opcion B ES LA MÁS CORRECTA, ya que así, se puede usar dando igual el modelo, con la A, tendrías que crear una variable para cada uno
  newHero = new Hero();
  

constructor(private heroeService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
   }

  getHeroes():void {
    this.heroeService.getHeroes().subscribe(data => this.heroes = data);
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

  onSubmitAddHero(): void {
    this.add(this.newHero.name); 
    this.createHeroForm.resetForm();
    this.display = false
  }

  cancelModal(): void{
    this.display = false;
  }

  showDialog() {
    this.display = true;
    this.createHeroForm.resetForm();
}


  // onModelChange(name: string): void {
  //   // this.hero.name = name
  // }

///////////////////////////////////////////////////////////
// practica que hicimos con sergio sobre modelos y servicios

//  users: User[]; //variable de la practica modelos y servicios de sergio

//  constructor(private userService: UserService) { } //Este contructor es el que usamos para llamar al servicio de la practica que hicimos con sergio sobre modelos y servicios

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
