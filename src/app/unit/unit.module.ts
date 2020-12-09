import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UnitConverterComponent } from './unit-converter/unit-converter.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {
    path: 'unit-converter',
    component: UnitConverterComponent
  }
];

@NgModule({
  declarations: [UnitConverterComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UnitModule { }
