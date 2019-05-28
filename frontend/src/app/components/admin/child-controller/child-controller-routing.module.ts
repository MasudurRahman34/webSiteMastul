import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { ChildListComponent } from './child-list/child-list.component';
import { ChildDetailsComponent } from './child-details/child-details.component';
//middleware
import { BeforeLoginService } from './../auth/Services/before-login.service';
import { AfterLoginService } from './../auth/Services/after-login.service';
//

const routes: Routes = [
	{
		path: 'admin/child', 
		component: ChildListComponent,  
		canActivate: [AfterLoginService]
	},
	{
		path: 'admin/child/details', 
		component: ChildDetailsComponent,  
		canActivate: [AfterLoginService]
	}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildControllerRoutingModule { }
