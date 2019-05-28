
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { Material } from './../../../material.module';
import { ChildListComponent } from './child-list/child-list.component';

import { ChildControllerRoutingModule } from './child-controller-routing.module';
import { ChildDetailsComponent } from './child-details/child-details.component';

@NgModule({
  declarations: [
	ChildListComponent,
	ChildDetailsComponent
  ],
  imports: [
    CommonModule,
    Material,
    FormsModule,
    ChildControllerRoutingModule
    
  ],
  exports:[
  ChildListComponent 
  ]
})
export class ChildControllerModule { }
