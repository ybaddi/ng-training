import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'examplePipe1';
  prices = [10, 100,1000,10000,100000,1000000,10000000,100000000,100000000,10000000000,100000000000,100000000000000,10000000000000000000000000,100000000000000000000000000000000000];
  price = 1000000000;
}
