import { Component, OnInit } from '@angular/core';
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
  private http: ApiHttpService;
  public inputValue: string;

  constructor(private apiHttpService: ApiHttpService, private router: Router) { }

  ngOnInit(): void {
  }
  public search(value: string){
    console.log(this.allCountries.name);
    this.apiHttpService.getCountriesByName(this.allCountries.name).subscribe(
      data => {
        this.allCountries = data;
      });
  }
}

