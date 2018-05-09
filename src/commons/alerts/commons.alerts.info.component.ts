import { Component } from '@angular/core';

@Component({
  selector: 'info-alert',
  templateUrl: './commons.alerts.info.component.html',
  styleUrls: ['./commons.alerts.info.component.css']
})
export class InfoAlertComponent {
  public showInfoAlert: boolean = false;
  public changeState(value) {
    this.showInfoAlert = value;
    console.log(this.showInfoAlert);
  }
}
