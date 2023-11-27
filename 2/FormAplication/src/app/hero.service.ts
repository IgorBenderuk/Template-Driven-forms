  import { Injectable } from '@angular/core';
  import { Hero } from './hero';
  import { Observable, of } from 'rxjs';

  @Injectable({
    providedIn: 'root'
  })
  export class HeroService {
    private powers = ['Really Smart','Super Flexible','Super Hot','Weather Changer'];
    
    private heroes :Hero[]=[
      {
        id: 1,
        name: 'Dr. Igor',
        power: this.powers[0], 
        alterEgo: 'Chunck Owercheet'
      },
      {
        id: 2,
        name: 'SuperCoder',
        power: this.powers[1],
        alterEgo: 'Mild-Mannered Developer'
      },
      {
        id: 3,
        name: 'Thunderstorm',
        power: this.powers[2],
        alterEgo: 'Meteoro'
      }
    ]
    
    
  getHeroes():Observable <Hero[]>{
    return  of(this.heroes);
  }

  createHero(hero:Hero): Observable<Hero> {
  let newhero:Hero={
    id:hero.id,
    name:hero.name,
    power:hero.power,
    alterEgo:hero.alterEgo
  } 
  this.heroes.push(newhero);
  return of(newhero);
  }

  getPowers() : Observable<string[]> {
    return  of(this.powers)

  }
  upDateHero(){}

  }




