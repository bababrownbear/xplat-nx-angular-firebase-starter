import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// libs
import { RouterExtensions } from 'nativescript-angular/router';

// app
import { HeaderBaseComponent } from '@firebase/features';

@Component({
  moduleId: module.id,
  selector: 'foo-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent extends HeaderBaseComponent {
  constructor(private router: RouterExtensions) {
    super();
  }
}
