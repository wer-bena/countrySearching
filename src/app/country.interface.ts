export class CountryInterface {
  name: string;
  topLevelDomain?: string[];
  alpha2Code?: string;
  alpha3Code: string;
  callingCodes?: string[];
  capital: string;
  region?: string;
  subregion?: string;
  population?: number;
  area?: number;
  timezones?: string[];
  borders?: string[];
  nativeName?: string;
  numericCode?: string;
  currencies: object[];
  languages: object[];
  flag: string;

}
