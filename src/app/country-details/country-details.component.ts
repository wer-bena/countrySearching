import { Component, OnInit } from '@angular/core';
import {SearchResultsComponent} from '../search-results/search-results.component';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {

  constructor(public searchResults: SearchResultsComponent) { }

  ngOnInit(): void {
   // console.log(this.searchResults.tabName);
  }

}
