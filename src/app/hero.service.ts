import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';

@Injectable()
export class HeroService implements OnInit {
  private heroesUrl = 'http://localhost:8081/ServletDummyService/DummyServlet';
  
  //constructor(private messageService: MessageService) { }
  constructor(private _http: Http, private messageService: MessageService) { }
  /*getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }*/
  /*getHeroes(): Hero[] {
    
     return HEROES;
  }*/
  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
    /*const url = `${this.heroesUrl}/${id}`;
    return this._http.get(url).map((response:Response)=><Hero>response.json());*/
  }
  getRemoteHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes    
    let response = this._http.get(this.heroesUrl).map((response:Response)=><Hero[]>response.json());
    this.messageService.add('HeroService: fetched heroes from remote'+response[0]);
    
    return response;
  }
  ngOnInit() {
    //this._http.get<Hero>("").map(e=>)
  }

}
