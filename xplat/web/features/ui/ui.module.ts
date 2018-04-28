import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// libs
import { TranslateModule } from '@ngx-translate/core';
import { UISharedModule } from '@firebase/features';

const MODULES = [
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  TranslateModule,
  UISharedModule
];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES]
})
export class UIModule {}
