import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  private next: number = 5;
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, this.next));
  }
  getNextHeroes(): void {
    if(this.next<HEROES.length) {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(this.next, this.next+4));
    this.next+=4;
    }
  }
}