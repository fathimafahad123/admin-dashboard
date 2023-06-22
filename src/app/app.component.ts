import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin-dashboard';
  sidebaropen:boolean=true
  toogle(){
    this.sidebaropen=!this.sidebaropen
  }
}
