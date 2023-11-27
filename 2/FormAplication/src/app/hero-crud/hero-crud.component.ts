import { Component, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-crud',
  templateUrl: './hero-crud.component.html',
  styleUrls: ['./hero-crud.component.css']
})
export class HeroCRUDComponent {

  @Input() selectedHero!:Hero;
}
