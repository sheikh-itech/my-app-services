import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'test-section',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent {
  nameList: any[] = [
      {name: 'a1', nickname: 'one'},
      {name: 'a2', nickname: 'two'},
      {name: 'a3', nickname: 'three'},
      {name: 'a4', nickname: 'four'},
      {name: 'a5', nickname: 'five'}
    ]
}
