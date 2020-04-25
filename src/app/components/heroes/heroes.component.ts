import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero'; 
import { HEROES } from '../../mockDB/mock-heroes';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];     //hero se definira en la funcion getHeroes(): Hero[], del servicio      
  selectedHero: Hero;

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(data => this.heroes = data);     //.subscribe permite recibir observables,data es el observable de arays definido e el servicio
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
    console.log(this.heroes[1])
  }

}
