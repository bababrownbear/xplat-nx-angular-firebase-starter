import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// libs
import { BaseComponent } from '@firebase/core/base';
import { LogService } from '@firebase/core/services/log.service';

// app
import { Item } from '../models';
import { ItemService } from '../services/item.service';

export abstract class ItemsBaseComponent extends BaseComponent
  implements OnInit {
  public items: Item[];

  constructor(protected log: LogService, protected itemService: ItemService) {
    super();
  }

  ngOnInit() {
    this.log.debug('ItemsBaseComponent ngOnInit');
    this.items = this.itemService.getItems();
  }
}
