import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-unit-converter',
  templateUrl: './unit-converter.component.html',
  styleUrls: ['./unit-converter.component.scss']
})
export class UnitConverterComponent implements OnInit {

  public filteredUnits = [];
  public units = { base: '', rates: {} };
  public firstUnitSymbol = null;
  public secondUnitSymbol = null;
  public firstUnitValue = null;
  public secondUnitValue = null;

  constructor(private sharedService: SharedService, public router: Router) { }

  ngOnInit(): void {
    this.filteredUnits = this.sharedService.unitsList;
    this.firstUnitSymbol = this.filteredUnits[0];
    this.secondUnitSymbol = this.filteredUnits[1];
    this.firstUnitValue = 1;
    this.units = this.sharedService.filterUnits(this.firstUnitSymbol);
    this.secondUnitValue = this.sharedService.filterUnits(this.firstUnitSymbol).rates[this.secondUnitSymbol];
  }

  public getUnitValues(base, type) {
    this.units = this.sharedService.filterUnits(base);
    switch (type) {
      case 'firstUnit': {
        this.firstUnitValue = 1;
        this.secondUnitValue = this.units.rates[this.secondUnitSymbol];
        break;
      }
      case 'secondUnit': {
        this.secondUnitValue = 1;
        this.firstUnitValue = this.units.rates[this.firstUnitSymbol];
        break;
      }
    }
  }

  public updateUnitValue(type) {
    switch (type) {
      case 'firstUnit': {
        if (this.firstUnitValue === null) {
          this.secondUnitValue = '';
          return
        }
        if (this.firstUnitSymbol == this.units.base) {
          this.secondUnitValue = this.firstUnitValue * this.units.rates[this.secondUnitSymbol];
        } else {
          this.secondUnitValue = (1 / this.units.rates[this.firstUnitSymbol]) * this.firstUnitValue;
        }
        break;
      }
      case 'secondUnit': {
        if (this.secondUnitValue === null) {
          this.firstUnitValue = '';
          return
        }
        if (this.secondUnitSymbol == this.units.base) {
          this.firstUnitValue = this.secondUnitValue * this.units.rates[this.firstUnitSymbol];
        } else {
          this.firstUnitValue = (1 / this.units.rates[this.secondUnitSymbol]) * this.secondUnitValue;
        }
        break;
      }
    }
  }

  public navigate(url) {
    this.router.navigateByUrl(url);
  }
}