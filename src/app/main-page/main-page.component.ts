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
  liList: any = document.getElementsByTagName('li');

  constructor(
    private apiHttpService: ApiHttpService,
    private router: Router,
    private _dataStoreService: dataStoreService) { }

  ngOnInit(): void {
  }

  public getTabName(tab: string){
    return this.tab = tab;
  }

  public searchBy(input: string){
    if (this.tab === 'name'){
      console.log(this.inputValue);
      this.searchByName(this.inputValue);
      this._dataStoreService.setInpuTValue(this.inputValue);
    }
    if (this.tab === 'capital'){
      console.log(this.tab);
      this.searchByCapital(this.inputValue);
      this._dataStoreService.setInpuTValue(this.inputValue);
    } else {
      console.log(this.tab);
      this.searchByCurrency(this.inputValue);
      this._dataStoreService.setInpuTValue(this.inputValue);
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
       this.inputValue
     );
     this._dataStoreService.setCapital(capitalPromise);
  }

  public searchByCurrency(value: string) {
    const currencyPromise = this.apiHttpService.getCountriesByCurrency(
      this.inputValue
    );
    this._dataStoreService.setCurrency(currencyPromise);
  }
  }


