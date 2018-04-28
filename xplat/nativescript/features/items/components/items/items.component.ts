import { Component } from '@angular/core';

// libs
import { LogService } from '@firebase/core';
import { ItemsBaseComponent, ItemService } from '@firebase/features';
import { AppService } from '@firebase/nativescript/core';

@Component({
  moduleId: module.id,
  selector: 'foo-items',
  templateUrl: './items.component.html'
})
export class ItemsComponent extends ItemsBaseComponent {
  constructor(
    log: LogService,
    itemService: ItemService,
    public appService: AppService
  ) {
    super(log, itemService);
  }
}
