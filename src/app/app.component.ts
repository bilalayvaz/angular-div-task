import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'div-task';

  //I created a empty array.
  divArray: number[] = [];

  // I created a function that adds a new element to the array every time I click the button.
  addNewDiv() {
    this.divArray.push(1);
    console.log(this.divArray);
  }
}
