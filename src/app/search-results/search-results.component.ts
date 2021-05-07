import {Component, Input, OnInit, Output} from '@angular/core';
import {ApiHttpService} from '../api-http.service';
import {MainPageComponent} from '../main-page/main-page.component';
import {CountryInterface} from '../country.interface';
import {dataStoreService} from '../data-store.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent implements OnInit {
  countries: CountryInterface[] = [];
  capitals: CountryInterface[] = [];
  inputValue: Observable<any>;
  constructor(
    private apiHttpService: ApiHttpService,
    public mainPage: MainPageComponent,
    private _dataStoreService: dataStoreService
  ) {
    console.log(this._dataStoreService.getCapital());
    this.inputValue = this._dataStoreService.getInputValue();
    console.log(this._dataStoreService.getCapital());

    this._dataStoreService.getData().subscribe((res) => {
      this.countries = res;
      this._dataStoreService.setDetails(this.countries);
      console.log('cos tam');
      console.log(this.countries);
    });

    // this._dataStoreService.getCapital().subscribe((res) => {
    // this.capitals = res;
    // console.log('cos tam 2');
    // console.log(this.capitals);
    // });
    // }
  }
  @Input() countriesList;

  ngOnInit(): void {}

  public showCountries() {
    console.log(this.mainPage.countries);
  }
}
