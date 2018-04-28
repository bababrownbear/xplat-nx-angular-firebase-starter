import { Component, OnInit } from '@angular/core';

// libs
import { LogService } from '@firebase/core';
import { ItemsBaseComponent, ItemService } from '@firebase/features';

@Component({
  selector: 'foo-items',
  templateUrl: './items.component.html'
})
export class ItemsComponent extends ItemsBaseComponent {
  constructor(log: LogService, itemService: ItemService) {
    super(log, itemService);
  }
}
