import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete'
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule
  ],
   exports: [
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule
   ]
})
export class MaterialModule { }
