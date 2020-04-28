import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { HEROES } from '../mockDB/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');     //una vez hecho el fetch muestra el mensaje 
    return of(HEROES);      //return of devuelve un observable cuyo valor es el array definido en mockDB
  }

}
