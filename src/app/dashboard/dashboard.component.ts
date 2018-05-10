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
  private backflag: boolean = true;
  constructor( private heroService: HeroService ) { }

  ngOnInit() {
    this.getHeroes();
  }
  getHeroes(): void {
    if(this.heroService.currentPosFlag) {
      if(this.heroService.getCurrentPosition() < HEROES.length) {
        this.heroService.getHeroes()
          .subscribe(heroes => {
          heroes.forEach(function(v,k){
            console.log(v.id+'----'+v.name);
          }),
          this.heroes = heroes.slice(this.heroService.getCurrentPosition()-4, this.heroService.getCurrentPosition())});
        }
        this.heroService.currentPosFlag = false;
    }else {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(0, this.heroService.getCurrentPosition()+4));
    this.heroService.setCurrentPosition(this.heroService.getCurrentPosition()+4);
    }
  }
  getNextHeroes(): void {
    if(this.heroService.getCurrentPosition() < HEROES.length) {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(this.heroService.getCurrentPosition(), this.heroService.getCurrentPosition()+4));
      this.heroService.setCurrentPosition(4 + this.heroService.getCurrentPosition());
    }
    else {
      this.backflag = false;
    }
  }
}