import { Component, OnInit, Input } from '@angular/core';     //se importa Input para poder añadir el decorador que permite hacebinding entre componentes
import { Hero } from '../../interfaces/hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  
  constructor(private route: ActivatedRoute, private location: Location, private heroService: HeroService) { }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id) 
    .subscribe(data => this.hero = data); 
  }
  
  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getHero();
  }

}
