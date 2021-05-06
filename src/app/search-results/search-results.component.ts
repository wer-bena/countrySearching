import { Component, OnInit } from '@angular/core';
import {ApiHttpService} from '../api-http.service';
import {Observable} from 'rxjs';
import {CountryInterface} from '../country.interface';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  // countries$: Observable<CountryInterface[]>;

  constructor(private apiHttpService: ApiHttpService) { }

  ngOnInit(): void {
  }

}
