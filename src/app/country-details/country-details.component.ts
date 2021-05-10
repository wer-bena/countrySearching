import { Component, OnInit } from '@angular/core';
import {SearchResultsComponent} from '../search-results/search-results.component';
import {dataStoreService} from '../data-store.service';
import {CountryInterface} from '../country.interface';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {

  country: CountryInterface;

  constructor(private _dataStore: dataStoreService) {
    this.country = _dataStore.getItem();
    console.log('dupa');
    console.log(this.country);
  }

  ngOnInit(): void {
  }

}
