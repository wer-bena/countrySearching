import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {SearchResultsComponent} from './search-results/search-results.component';
import {CountryDetailsComponent} from './country-details/country-details.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'results', component: SearchResultsComponent},
  {path: 'details', component: CountryDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
