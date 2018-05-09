import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../header/component/header.component';
import { TestComponent } from '../test/component/test.component';
import { InfoAlertComponent } from '../commons/alerts/commons.alerts.info.component';
import { InfoWarningComponent } from '../commons/alerts/commons.alerts.warning.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero.service';
import { MessagesComponent } from './messages/messages.component';
import { WidgetComponent } from './widget/widget.component';
import { MessageService } from './message.service';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailRouteComponent } from './hero-detail-route/hero-detail-route.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, TestComponent, InfoAlertComponent, HeroesComponent, InfoWarningComponent, HeroDetailComponent, MessagesComponent, WidgetComponent, DashboardComponent, HeroDetailRouteComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, ModalModule.forRoot(), AppRoutingModule, HttpClientModule
  ],
  providers: [HeroService, MessageService, BsModalService],
  bootstrap: [AppComponent],
  entryComponents: [WidgetComponent]
})
export class AppModule { }
