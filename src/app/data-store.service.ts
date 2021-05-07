import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
  export class dataStoreService {
    public countries: Observable<any>;
    public tab: Observable<any>;
    public capital: Observable<any>;
    public currency: Observable<any>;
    public inputValue: Observable<any>;
    public details: Observable<any>;

    constructor() {}

    setData(data) {
      this.countries = data;
    }
    getData() {
      return this.countries;
    }
  setTab(data) {
    this.tab = data;
  }
  getTab() {
    return this.tab;
  }
  setCapital(data) {
    this.capital = data;
  }
  getCapital() {
    return this.capital;
  }
  setCurrency(data) {
    this.currency = data;
  }
  getCurrency() {
    return this.currency;
  }
  setInpuTValue(data) {
    this.inputValue = data;
  }
  getInputValue() {
    return this.inputValue;
  }
  setDetails(data) {
    this.inputValue = data;
  }
  getDetails() {
    return this.inputValue;
  }
  }


