import {Component, Input, OnInit, Output} from '@angular/core';
import {ApiHttpService} from '../api-http.service';
import {MainPageComponent} from '../main-page/main-page.component';
import {CountryInterface} from '../country.interface';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  tabName: string;
  allCountries: CountryInterface = new CountryInterface();
  countries: CountryInterface[] = [];
  capitals: CountryInterface[] = [];
  currencies: CountryInterface[] = [];
  inputValue: string;
  constructor(private apiHttpService: ApiHttpService, public mainPage: MainPageComponent) { }


  ngOnInit(): void {
    console.log(this.mainPage.inputValue);
    this.search(this.mainPage.inputValue);
    console.log(this.mainPage.tab);
  }

  public showCountries() {
    console.log(this.mainPage.countries);
  }

  public search(input: string){
    this.inputValue = input;
    if (this.mainPage.tab === 'name'){
      console.log(this.mainPage.tab);
      this.searchByName(this.mainPage.inputValue);
    }
    if (this.mainPage.tab === 'capital'){
      this.searchByCapital(this.mainPage.inputValue);
    } else {this.searchByCurrency(this.mainPage.inputValue);}
  }

  public searchByName(value: string){
      this.apiHttpService.getCountriesByName(this.mainPage.inputValue).subscribe(
        countries => {
          this.countries = countries;
          console.log(countries);
        });
    }

  public searchByCapital(value: string){
      console.log(this.inputValue);
      this.apiHttpService.getCountriesByCapital(this.mainPage.inputValue).subscribe(
        capitals => {
          this.capitals = capitals;
          console.log(capitals);
        }
      );
    }
  public searchByCurrency(value: string){
      console.log(this.inputValue);
      this.apiHttpService.getCountriesByCurrency(this.mainPage.inputValue).subscribe(
        currencies => {
          this.currencies = currencies;
        }
      );
    }
}
