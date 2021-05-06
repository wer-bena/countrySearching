import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const BASE_URL = 'https://restcountries.eu/rest/v2';
const HTTP_OPTIONS = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getCountriesByName(country: string): Observable<any> {
    return this.httpClient.get(
      `${
        BASE_URL
      }/name/${country}?fields=name;capital;currencies;subregion;timezones;alpha3Code;population;area;flag;topLevelDomain;alpha2Code;altSpellings;region;borders;nativeName;languages;callingCodes`
    );
  }
  public getCountriesByCurrency(currency: string): Observable<any> {
    return this.httpClient.get(
      `${
        BASE_URL
      }/currency/${currency}?fields=name;capital;currencies;subregion;timezones;alpha3Code;population;area;latlng;flag;topLevelDomain;alpha2Code;altSpellings;region;borders;nativeName;languages;callingCodes`
    );
  }

  public getCountriesByCapital(capital: string): Observable<any> {
      return this.httpClient.get(
        `${
          BASE_URL
        }/capital/${capital}?fields=name;capital;currencies;subregion;timezones;alpha3Code;population;area;latlng;flag;topLevelDomain;alpha2Code;altSpellings;region;borders;nativeName;languages;callingCodes`
      );
}}
