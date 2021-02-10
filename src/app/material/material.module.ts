import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';


import {FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSnackBarModule} from '@angular/material/snack-bar';



const FormsComponents=[FormsModule,MatCardModule,MatFormFieldModule,MatSelectModule,
  MatSliderModule,MatInputModule,MatTableModule,MatPaginatorModule, MatSnackBarModule];



const MaterialComponents=[MatButtonModule,MatMenuModule,MatIconModule,MatToolbarModule,
  MatSidenavModule,MatTabsModule,MatListModule];

@NgModule({
  declarations: [],
  imports: [ CommonModule, MaterialComponents,FormsComponents],
  exports: [MaterialComponents,FormsComponents]

})
export class MaterialModule { }
