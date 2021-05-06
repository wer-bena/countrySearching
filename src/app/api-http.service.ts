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

getCountriesByName(name: string): Observable<CountryInterface[]>{
    return this.httpClient.get<CountryInterface[]>(`${BASE_URL}/name/${name}`);
}
getCountriesByCapital(capital: string): Observable<CountryInterface[]>{
    return this.httpClient.get<CountryInterface[]>(`${BASE_URL}/capital/${capital}`);
}

getCountriesByCurrency(currency: object[]): Observable<CountryInterface[]>{
    return this.httpClient.get<CountryInterface[]>(`${BASE_URL}/currency/${currency}`);
}

}
