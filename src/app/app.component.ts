import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Colours';
  colours = [
    "Red",
    "Blue",
    "Green"
  ];
  coloursUsed = [];
  summary():string {
    return `${this.colours.length} Colours / ${this.coloursUsed.length} Used`;
  }

  constructor() {
    setInterval(() => {
      this.colours.push("Yellow");
    }, 1000);
  }
}
