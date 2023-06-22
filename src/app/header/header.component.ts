import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

// userdefined event creation
// EventEmitter()-- is a class from angular core
// onmenubutton---it is a object
// @output---is used to share data from parent to child
@Output() onmenubutton= new EventEmitter()

  menubuttonclick(){
    // to occure a userdegined evevnt
    this.onmenubutton.emit()
  }
}
