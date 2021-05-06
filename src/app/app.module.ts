import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import {HttpClientModule} from '@angular/common/http';
import { CountryDetailsComponent } from './country-details/country-details.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SearchResultsComponent,
    CountryDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    MainPageComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
