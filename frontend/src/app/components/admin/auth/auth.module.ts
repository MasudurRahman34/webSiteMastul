import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { Material } from './../../../material.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { ResquestResetComponent } from './password/resquest-reset/resquest-reset.component';
import { ResponseResetComponent } from './password/response-reset/response-reset.component';

import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [
  LoginComponent,
  SignupComponent,
  ProfileComponent,
  ResquestResetComponent,
  ResponseResetComponent


  ],
  imports: [
    CommonModule,
    Material,
    AuthRoutingModule,
    FormsModule
  ],
  exports:[
  LoginComponent,
  SignupComponent,
  ProfileComponent,
  ResquestResetComponent,
  ResponseResetComponent 
  ]
})
export class AuthModule { }
