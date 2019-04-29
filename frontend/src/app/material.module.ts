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
	MatBadgeModule

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
  MatBadgeModule

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
	MatBadgeModule
  ],
})
export class Material { }