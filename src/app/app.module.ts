import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {de_DE, NZ_I18N} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import de from '@angular/common/locales/de';
import {MainMenuComponent} from './sections/main-menu/main-menu.component';
import {StartPageComponent} from './pages/start-page/start-page.component';
import {AppRoutingModule} from './app-routing.module';

registerLocaleData(de);

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    StartPageComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [{provide: NZ_I18N, useValue: de_DE}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
