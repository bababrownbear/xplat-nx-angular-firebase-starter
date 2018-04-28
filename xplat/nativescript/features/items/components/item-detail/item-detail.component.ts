import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// libs
import { LogService } from '@firebase/core';
import { ItemService, ItemDetailBaseComponent } from '@firebase/features';
import { AppService } from '@firebase/nativescript/core/services/app.service';

@Component({
  moduleId: module.id,
  selector: 'foo-item-detail',
  templateUrl: './item-detail.component.html'
})
export class ItemDetailComponent extends ItemDetailBaseComponent {
  constructor(
    log: LogService,
    itemService: ItemService,
    route: ActivatedRoute,
    public appService: AppService
  ) {
    super(log, itemService, route);
  }
}
