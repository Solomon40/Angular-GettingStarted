import { Component } from "@angular/core";

@Component({
  selector: 'pm-root',
  template: `
  <nav class="navbar navbar-expand navbar-light bg-light">

    <a class="nav-brand" [routerLink]="['/welcome']">{{pageTitle}}</a>

    <ul class="nav nav-pills">
      <li><a class="nav-link" [routerLink]="['/welcome']">Welcome</a></li>
      <li><a class="nav-link" [routerLink]="['./products']">Product List</a></li>
    </ul>
  </nav>
  <div class="container">
    <router-outlet></router-outlet>
  </div>
  `
// templateUrl: './app.component.html',
// styleUrls: ['./app.component.css']
})

export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}