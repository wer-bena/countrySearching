import {Component, Input, OnInit} from '@angular/core';
import {ApiHttpService} from '../api-http.service';
import {MainPageComponent} from '../main-page/main-page.component';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  constructor(private apiHttpService: ApiHttpService, public mainPage: MainPageComponent) { }

  @Input() countriesList;

  ngOnInit(): void {
  }

  public showCountries(){
    console.log(this.mainPage.countries);
  }

}
