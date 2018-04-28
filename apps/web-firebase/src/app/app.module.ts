import { NgModule } from '@angular/core';

// libs
import { environment } from '@firebase/core';

// app
import { CoreModule } from './features/core/core.module';
import { SharedModule } from './features/shared/shared.module';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

@NgModule({
  imports: [CoreModule, SharedModule, AppRoutingModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
