import { NgModule, Optional, SkipSelf, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// libs
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { throwIfAlreadyLoaded } from '@firebase/utils';
import {
  CoreModule,
  PlatformLanguageToken,
  WindowPlatformService
} from '@firebase/core';
import { ITEM_PROVIDERS } from '@firebase/features';

// bring in custom web services here...

// factories
export function winFactory() {
  return window;
}

export function platformLangFactory() {
  const browserLang = window.navigator.language || 'en'; // fallback English
  // browser language has 2 codes, ex: 'en-US'
  return browserLang.split('-')[0];
}

export class CustomTranslateLoader {
  constructor(private injector: Injector) {}

  public getTranslation(lang: string) {
    const http = this.injector.get(HttpClient);
    return http.get(`/assets/i18n/${lang}.json`);
  }
}

export function createTranslateLoader(injector: Injector) {
  return new CustomTranslateLoader(injector);
}

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule.forRoot([
      {
        provide: PlatformLanguageToken,
        useFactory: platformLangFactory
      },
      {
        provide: WindowPlatformService,
        useFactory: winFactory
      }
    ]),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [Injector]
      }
    })
  ],
  providers: [...ITEM_PROVIDERS]
})
export class FooCoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: FooCoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'FooCoreModule');
  }
}
