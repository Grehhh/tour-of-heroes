import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero'; 
import { HEROES } from '../../mockDB/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;      //el objeto ya esa creado en la mockdb

  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor() { }

  ngOnInit() {
  }

}
