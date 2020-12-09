import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss']
})
export class CurrencyConverterComponent implements OnInit {

  public filteredCurrencies = [];
  public currencies = { base: '', date: '', rates: {} };
  public firstCurrencySymbol = null;
  public secondCurrencySymbol = null;
  public firstCurrencyValue = null;
  public secondCurrencyValue = null;

  constructor(private sharedService: SharedService, public router: Router) { }

  ngOnInit(): void {
    this.getCurrencyList();
  }

  public getCurrencyList() {
    this.sharedService.currencyList().subscribe(
      data => {
        this.currencies = data;
        this.filteredCurrencies.push(data.base);
        this.filteredCurrencies = this.filteredCurrencies.concat(Object.keys(data.rates));
        this.firstCurrencySymbol = this.filteredCurrencies[0];
        this.secondCurrencySymbol = this.filteredCurrencies[1];
        this.firstCurrencyValue = 1;
        this.secondCurrencyValue = data.rates[this.secondCurrencySymbol];
      },
      err => {
        console.log(err);

      }
    )
  }

  public getCurrencyValues(base, type) {
    this.sharedService.currencyValues(base).subscribe(
      data => {
        this.currencies = data;
        switch (type) {
          case 'firstCurrency': {
            this.firstCurrencyValue = 1;
            this.secondCurrencyValue = this.currencies.rates[this.secondCurrencySymbol];
            break;
          }
          case 'secondCurrency': {
            this.secondCurrencyValue = 1;
            this.firstCurrencyValue = this.currencies.rates[this.firstCurrencySymbol];
            break;
          }
        }
      },
      err => {
        console.log(err);

      }
    )
  }

  public updateCurrencyValue(type) {
    switch (type) {
      case 'firstCurrency': {
        if (this.firstCurrencyValue === null) {
          this.secondCurrencyValue = '';
          return
        }
        if (this.firstCurrencySymbol == this.currencies.base) {
          this.secondCurrencyValue = this.firstCurrencyValue * this.currencies.rates[this.secondCurrencySymbol];
        } else {
          this.secondCurrencyValue = (1 / this.currencies.rates[this.firstCurrencySymbol]) * this.firstCurrencyValue;
        }
        break;
      }
      case 'secondCurrency': {
        if (this.secondCurrencyValue === null) {
          this.firstCurrencyValue = '';
          return
        }
        if (this.secondCurrencySymbol == this.currencies.base) {
          this.firstCurrencyValue = this.secondCurrencyValue * this.currencies.rates[this.firstCurrencySymbol];
        } else {
          this.firstCurrencyValue = (1 / this.currencies.rates[this.secondCurrencySymbol]) * this.secondCurrencyValue;
        }
        break;
      }
    }
  }

  public navigate(url) {
    this.router.navigateByUrl(url);
  }

  modelChangeFn(event) {
    console.log(event);

  }
}