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

  details: CountryInterface[] = [];

  constructor(private _dataStore: dataStoreService) {
    this._dataStore.getDetails().subscribe((res) => {
      this.details = res;
      // this._dataStore.setDetails(this.details);
      console.log('cos tam details dziala');
      console.log(this.details);
    });

  }

  ngOnInit(): void {
  }

}
