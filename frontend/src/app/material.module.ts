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
	MatCardModule,
	MatListModule,
	MatBadgeModule,
	MatStepperModule,
	MatTableModule,
	MatPaginatorModule

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
  MatCardModule,
  MatListModule,
  MatBadgeModule,
  MatStepperModule,
  MatTableModule,
  MatPaginatorModule

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
	MatCardModule,
	MatListModule,
	MatBadgeModule,
	MatStepperModule,
	MatTableModule,
	MatPaginatorModule
  ],
})
export class Material { }