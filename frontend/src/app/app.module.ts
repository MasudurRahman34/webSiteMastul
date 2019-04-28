import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//form
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


//
import { Material } from './material.module'; //material design 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; //material design
//routing
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/admin/navbar/navbar.component';
import { LoginComponent } from './components/admin/login/login.component';
import { SignupComponent } from './components/admin/signup/signup.component';
import { ProfileComponent } from './components/admin/profile/profile.component';
import { ResquestResetComponent } from './components/admin/password/resquest-reset/resquest-reset.component';
import { ResponseResetComponent } from './components/admin/password/response-reset/response-reset.component';
import { AppRoutingModule } from './app-routing.module';
//


@NgModule({
  declarations: [
    AppComponent,
    //routing
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    ResquestResetComponent,
    ResponseResetComponent
    //
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Material,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
