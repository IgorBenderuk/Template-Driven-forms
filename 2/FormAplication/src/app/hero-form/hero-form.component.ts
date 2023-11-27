import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent  implements OnInit{
 

  heroes:Hero[]=[];
  powers:string[] = [];


  selectedHero!:Hero|undefined;
  selectedHeroId!:number;



  constructor(private heroService:HeroService ){

  }
  ngOnInit(): void {
    this.heroService.getHeroes().subscribe((hero) => this.heroes = hero)
    this.heroService.getPowers().subscribe((pow) =>this.powers = pow)
    this.selectedHero={id:0,name:"",power:"",alterEgo:""}
  }


  onSelect(selectedHeroId:number){
    if(Number(selectedHeroId)!=0){
      this.selectedHero=this.heroes.find(hero=>hero.id==selectedHeroId)
    }else{
      this.selectedHero={id:0,name:"",power:"",alterEgo:""}
    }

      
  }

  }


 
