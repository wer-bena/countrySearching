import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CountryInterface} from './country.interface';

const BASE_URL = 'https://restcountries.eu/rest/v2';
const HTTP_OPTIONS = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })};

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService{

  constructor(private httpClient: HttpClient) {
  }

getCountriesByName(name: string): Observable<any>{
    return this.httpClient.get(`${BASE_URL}/name/${name}`);
}

// getAllCountries(){
//     return this.httpClient.get<CountryInterface[]>(`${BASE_URL}/all`);
// }

}
