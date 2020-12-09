import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { UnitModule } from './unit/unit.module';
import { CurrencyModule } from './currency/currency.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
const appRoutes: Routes = [
  {
    path:'',
    component: DashboardComponent
  },
  {
    path: 'currency',
    loadChildren: () => import('./currency/currency.module').then((c) => c.CurrencyModule),
  },
  {
    path: 'unit',
    loadChildren: () => import('./unit/unit.module').then((u) => u.UnitModule),
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    UnitModule,
    CurrencyModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
