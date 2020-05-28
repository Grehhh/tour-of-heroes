import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero'; 
import { HeroService } from '../../services/hero.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];     //hero se definira en la funcion getHeroes(): Hero[], del servicio      

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(data => this.heroes = data);     //.subscribe permite recibir observables,data es el observable de arays definido en el servicio
  }

  ngOnInit() {
    this.getHeroes();
    // console.log(this.heroes[1])
  }

}
