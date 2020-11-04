import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Count';
  currentCount = 0;

  onIncrement() {
    this.currentCount += 1;
  }

  onClear() {
    this.currentCount = 0;
  }

  getCount() {
    return this.currentCount
  }
}
