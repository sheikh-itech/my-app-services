import { Component, ViewChild } from '@angular/core';
import { InfoAlertComponent } from '../commons/alerts/commons.alerts.info.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private infoAlert: InfoAlertComponent;
  constructor() {
    this.infoAlert = new InfoAlertComponent();
  }
  viewInfoMsg($event) {
      this.infoAlert.changeState($event);
  }
}
