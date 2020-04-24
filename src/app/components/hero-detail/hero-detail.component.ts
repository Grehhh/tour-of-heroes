import { Component, OnInit, Input } from '@angular/core';     //se importa Input para poder añadir el decorador que permite hacebinding entre componentes
import { Hero } from '../../interfaces/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  
  constructor() { }

  ngOnInit() {
  }

}
