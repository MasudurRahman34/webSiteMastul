import { NgModule } from '@angular/core';
import {
	MatToolbarModule,
	MatButtonModule, 
	MatCheckboxModule,
	MatFormFieldModule,
	MatIconModule,
	MatInputModule,
	MatSidenavModule,
	MatMenuModule,
	MatCardModule

} from '@angular/material';

@NgModule({
  imports: [

  MatToolbarModule,
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSidenavModule,
  MatMenuModule,
  MatCardModule

  ],
  exports: [
	MatToolbarModule,
	MatButtonModule,
	MatCheckboxModule,
	MatFormFieldModule,
	MatIconModule,
	MatInputModule,
	MatSidenavModule,
	MatMenuModule,
	MatCardModule
  ],
})
export class Material { }