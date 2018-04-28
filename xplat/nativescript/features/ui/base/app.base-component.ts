import { Component } from '@angular/core';

// nativescript
import { registerElement } from 'nativescript-angular/element-registry';
import { topmost } from 'tns-core-modules/ui/frame';

// libs
import { BaseComponent } from '@firebase/core';
import { AppService } from '@firebase/nativescript/core';

export abstract class AppBaseComponent extends BaseComponent {
  constructor(protected appService: AppService) {
    super();

    if (topmost().ios) {
      const navigationBar = topmost().ios.controller.navigationBar;
      // 0: default
      // 1: light
      navigationBar.barStyle = 0;
    }
  }
}
