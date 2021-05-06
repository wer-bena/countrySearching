import {Component, Input, OnInit, Output, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CountryInterface} from '../country.interface';
import {ApiHttpService} from '../api-http.service';
import {Router} from '@angular/router';
import {SearchResultsComponent} from '../search-results/search-results.component';

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
  tab: string;
  liList: any = document.getElementsByTagName('li');

  constructor(private apiHttpService: ApiHttpService, private router: Router) { }

  ngOnInit(): void {
  }

  public searchBy(input: string){
    console.log(this.inputValue);
    return this.inputValue = input;
  }

  public getTabName(tab: string){
    console.log(tab);
    return this.tab = tab;
  }

//   public search(value: string){
//     if (this.liList[0].contains('uk-active')){
//       this.liList[0] = this.searchByName(this.allCountries.name); }
//      else if (this.liList[1].contains('uk-active')) {
//       this.liList[1] = this.searchByCapital(this.allCountries.capital); }
//      else {this.liList[2] = this.searchByCurrency(this.allCountries.currencies); }
// }

  // public searchingSwitcher(isActive: boolean){
  // if (this.liList.forEach().classList.contains('uk-active')){
  //
  // }
  //   }
  }


