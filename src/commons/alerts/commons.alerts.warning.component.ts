import { Component } from '@angular/core';

@Component({
  selector: 'info-warning',
  templateUrl: './commons.alerts.warning.component.html',
  styles: [`
            .warningAlert {
                padding: 20px;
                background-color: #36f4c5;
                color: white;
                width: 50%;
                margin: auto;
            }

            .closebtn {
                margin-left: 15px;
                color: white;
                font-weight: bold;
                float: right;
                font-size: 22px;
                line-height: 20px;
                cursor: pointer;
                transition: 0.3s;
            }

            .closebtn:hover {
                color: black;
            }`
    ]
})
export class InfoWarningComponent {

    public showWaringAlert:boolean = false;

    public changeState(value) {
        this.showWaringAlert = value;
    }
}
