import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Http } from '@angular/http';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
import 'rxjs/add/operator/map';

@Injectable()
export class HeroService implements OnInit {

  //constructor(private messageService: MessageService) { }
  constructor(private _http:Http, private messageService: MessageService) { }
  /*getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }*/
  /*getHeroes(): Hero[] {
    
     return HEROES;
  }*/
  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: Msg added to hero service');
    return of(HEROES);
  }
  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
  ngOnInit() {
    //this._http.get<Hero>("").map(e=>)
  }

}
