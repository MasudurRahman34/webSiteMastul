import { NgModule } from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';
/*import { LoginComponent }   from './components/admin/login/login.component';
import { SignupComponent }   from './components/admin/signup/signup.component';
import { ProfileComponent }   from './components/admin/profile/profile.component';
import { ResquestResetComponent }   from './components/admin/password/resquest-reset/resquest-reset.component';
import { ResponseResetComponent }   from './components/admin/password/response-reset/response-reset.component';*/
//main components
//import { ChildListComponent } from './components/admin/child-list/child-list.component';
//


const RouteLists: Routes = [


	/*{
		path: 'admin/login', 
		component: LoginComponent, 
		canActivate: [BeforeLoginService]
	},

	{
		path: 'admin/signup', 
		component: SignupComponent, 
		canActivate: [AfterLoginService]
	},

	{
		path: 'admin/profile', 
		component: ProfileComponent, 
		canActivate: [AfterLoginService]
	},

	{
		path: 'admin/resquest/reset/password', 
		component: ResquestResetComponent
	},

	{
		path: 'admin/resquest/response/password', 
		component: ResponseResetComponent
	},*/
	//main authenticate routes
	/*{
		path: 'admin/childlist', 
		component: ChildListComponent,  
		//canActivate: [AfterLoginService]
	}*/
	//
];

@NgModule({

  imports: [
    RouterModule.forRoot(RouteLists)

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
