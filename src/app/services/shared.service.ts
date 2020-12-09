import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public unitsList = ['meter(m)', 'yard(yd)', 'inch(in)'];
  public unitsValues = [{
    base: 'meter(m)',
    rates: { 'yard(yd)': 1.09361, 'inch(in)': 39.3701, 'meter(m)': 1 }
  },
  {
    base: 'yard(yd)',
    rates: { 'meter(m)': 0.9144, 'inch(in)': 36, 'yard(yd)': 1 }
  },
  {
    base: 'inch(in)',
    rates: { 'meter(m)': 0.0254, 'yard(yd)': 0.0277778, 'inch(in)':1 }
  },
  ]
  constructor(
    private http: HttpClient
  ) { }

  // Get Currency List API
  currencyList(): Observable<any> {
    return this.http.get(`${environment.APIconfigURL}`);
  }
  currencyValues(base): Observable<any> {
    return this.http.get(`${environment.APIconfigURL}?base=${base}`);
  }

  filterUnits(base) {
    return this.unitsValues.find(unit => unit.base == base)
  }
}
