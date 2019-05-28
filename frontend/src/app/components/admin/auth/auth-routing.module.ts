import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { ResquestResetComponent } from './password/resquest-reset/resquest-reset.component';
import { ResponseResetComponent } from './password/response-reset/response-reset.component';

//middleware
import { BeforeLoginService } from './Services/before-login.service';
import { AfterLoginService } from './Services/after-login.service';
//


const routes: Routes = [
 	{
 		path: '', 
 		redirectTo: 'admin/login', 
 		pathMatch: 'full'
 	},

	{
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
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
