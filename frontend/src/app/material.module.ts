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
	MatPaginatorModule,
	MatSelectModule

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
  MatPaginatorModule,
  MatSelectModule

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
	MatPaginatorModule,
	MatSelectModule
  ],
})
export class Material { }