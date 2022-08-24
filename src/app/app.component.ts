import { Component } from '@angular/core';
import { getTestBed } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular2';
  rootName = 'Val';

  onNameChanged(newName) {
    this.rootName = newName;
  }
}
