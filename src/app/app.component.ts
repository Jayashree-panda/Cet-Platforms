import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cetplatforms';
  public link: boolean = true;

  loginClicked() {
    console.warn('clicked')
    this.link = false;
  }
}
