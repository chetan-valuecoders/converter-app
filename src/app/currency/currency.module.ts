import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {
    path: 'currency-converter',
    component: CurrencyConverterComponent
  }
];

@NgModule({
  declarations: [CurrencyConverterComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class CurrencyModule { }
