import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngDebugChrome';

public a: number;
public b: number;
public c: number;

addNumbers(): void {
  this.c = this.a + this.b;
}



}
