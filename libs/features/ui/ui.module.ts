import { NgModule } from '@angular/core';

// app
import { PIPES } from './pipes';

@NgModule({
  declarations: [...PIPES],
  exports: [...PIPES]
})
export class UISharedModule {}
