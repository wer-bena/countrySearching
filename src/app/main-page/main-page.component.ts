import {Component, Input, OnInit, Output, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CountryInterface} from '../country.interface';
import {ApiHttpService} from '../api-http.service';
import {Router} from '@angular/router';

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
  liList: any = document.getElementsByTagName('li');

  constructor(private apiHttpService: ApiHttpService, private router: Router) { }

  ngOnInit(): void {
  }

  public searchByName(value: string){
    console.log(this.inputValue);
    this.apiHttpService.getCountriesByName(this.inputValue).subscribe(
      countries => {
        this.countries = countries;
        console.log(countries);
      });
  }

  public searchByCapital(value: string){
    console.log(this.inputValue);
    this.apiHttpService.getCountriesByCapital(this.allCountries.capital).subscribe(
      capitals => {
        this.capitals = capitals;
        console.log(capitals);
      }
    );
  }
  public searchByCurrency(value: object[]){
    console.log(this.inputValue);
    this.apiHttpService.getCountriesByCurrency(this.allCountries.currencies).subscribe(
      currencies => {
        this.currencies = currencies;
      }
    );
  }

  public search(value: string){
    if (this.liList[0].contains('uk-active')){
      this.liList[0] = this.searchByName(this.allCountries.name); }
     else if (this.liList[1].contains('uk-active')) {
      this.liList[1] = this.searchByCapital(this.allCountries.capital); }
     else {this.liList[2] = this.searchByCurrency(this.allCountries.currencies); }
}

  // public searchingSwitcher(isActive: boolean){
  // if (this.liList.forEach().classList.contains('uk-active')){
  //
  // }
  //   }
  }


