import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { FirstSecComponent } from './components/first-sec/first-sec.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { PortfolioPartComponent } from './components/portfolio-part/portfolio-part.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PortfolioTwoColumnsComponent } from './components/portfolio-two-columns/portfolio-two-columns.component';
import { ContactComponent } from './components/contact/contact.component';
import { NgOptimizedImage } from '@angular/common';
import { MaterialPopupComponent } from './components/material-popup/material-popup.component';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FirstSecComponent,
    PortfolioPartComponent,
    PortfolioComponent,
    PortfolioTwoColumnsComponent,
    ContactComponent,
    MaterialPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    NgOptimizedImage,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true, backgroundColor:"var(--clr-bg)"}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
