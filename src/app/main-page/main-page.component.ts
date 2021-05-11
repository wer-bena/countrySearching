import {Component, Input, OnInit, Output, ViewChild} from '@angular/core';
import {CountryInterface} from '../country.interface';
import {ApiHttpService} from '../api-http.service';
import {Router} from '@angular/router';
import {dataStoreService} from '../data-store.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  allCountries: CountryInterface = new CountryInterface();
  countries: CountryInterface[] = [];
  capitals: CountryInterface[] = [];
  currencies: CountryInterface[] = [];
  inputValue: string;
  tab: string = 'name';

  constructor(
    private apiHttpService: ApiHttpService,
    private router: Router,
    private _dataStoreService: dataStoreService) { }

  ngOnInit(): void {
  }

  public setTabName(tab: string){
   this._dataStoreService.setTab(tab);
   this.tab = tab;
  }

  public searchBy(input: string){
    this._dataStoreService.setInpuTValue(this.inputValue);
    if (this.tab === 'name'){
      console.log(this.inputValue);
      this.searchByName(this.inputValue);
    }
    if (this.tab === 'capital'){
      console.log(this.tab);
      this.searchByCapital(this.inputValue);
    }
    if (this.tab === 'currency'){
      console.log(this.tab);
      this.searchByCurrency(this.inputValue);
     // this._dataStoreService.setInpuTValue(this.inputValue);
    }
  }

  public searchByName(value: string) {
      const countryPromise = this.apiHttpService.getCountriesByName(
        this.inputValue
      );
      console.log(this.inputValue);
      this._dataStoreService.setData(countryPromise);
  }

  public searchByCapital(value: string) {
     const capitalPromise = this.apiHttpService.getCountriesByCapital(
       value
     );
     console.log('stolica');
     this._dataStoreService.setCapital(capitalPromise);
  }

  public searchByCurrency(value: string) {
    const currencyPromise = this.apiHttpService.getCountriesByCurrency(
      value
    );
    console.log('waluta');
    this._dataStoreService.setCurrency(currencyPromise);
  }
  }


