import { Component } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

powers=['Really Smart', 'Super Flexible',
'Super Hot', 'Weather Changer'];

sampleModel=new Hero(19,"Dr. Igor",this.powers[0],"Chunck Oversteet");

submited=false;


onSublit=this.submited=true;
myHero: any;

skyDog(){
  const myHero = new Hero (42,"sky dog",'fetch any obgect an any distance','leslice Rollover');

  console.log(`my hero called  ${myHero}`)
}


}
