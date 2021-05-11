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
  currencies: CountryInterface[] = [];
  inputValue: string;
  tabName: string;
  constructor(
    private apiHttpService: ApiHttpService,
    public mainPage: MainPageComponent,
    private _dataStoreService: dataStoreService
  ) {
    this.tabName = _dataStoreService.getTab();
    console.log('search results');
    console.log(this.tabName);
    console.log(this._dataStoreService.getCapital());
    this.inputValue = this._dataStoreService.getInputValue();
    console.log(this._dataStoreService.getCapital());

    if (this.tabName === 'name'){
    this._dataStoreService.getData().subscribe((res) => {
      this.countries = res;
      this._dataStoreService.setDetails(this.countries);
      console.log('cos tam');
      console.log(this.countries);
    })};

    if (this.tabName === 'capital'){
      this._dataStoreService.getCapital().subscribe((res) => {
        this.capitals = res;
        this._dataStoreService.setDetails(this.capitals);
        console.log('cos tam 2');
        console.log(this.capitals);
      });
    }
    if (this.tabName === 'currency'){
      this._dataStoreService.getCurrency().subscribe((res) => {
        this.currencies = res;
        this._dataStoreService.setDetails(this.currencies);
        console.log('cos tam currencies');
        console.log(this.currencies);
      });
    }
    }

  @Input() countriesList;

  ngOnInit(): void {}

  public showCountries() {
    console.log(this.mainPage.countries);
  }

  public storeItem(i: CountryInterface){
    console.log(i);
    this._dataStoreService.setItem(i);
  }
}
