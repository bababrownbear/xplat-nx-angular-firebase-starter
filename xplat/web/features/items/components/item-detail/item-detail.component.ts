import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// libs
import { LogService } from '@firebase/core';
import { ItemService, ItemDetailBaseComponent } from '@firebase/features';

@Component({
  selector: 'foo-item-detail',
  templateUrl: './item-detail.component.html'
})
export class ItemDetailComponent extends ItemDetailBaseComponent {
  constructor(
    log: LogService,
    itemService: ItemService,
    route: ActivatedRoute
  ) {
    super(log, itemService, route);
  }
}
