import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

//form
import { FormsModule }   from '@angular/forms';
//
import { Material } from './material.module'; //material design 
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations'; //material design
//routing
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/admin/navbar/navbar.component';
import { LoginComponent } from './components/admin/login/login.component';
import { SignupComponent } from './components/admin/signup/signup.component';
import { ProfileComponent } from './components/admin/profile/profile.component';
import { ResquestResetComponent } from './components/admin/password/resquest-reset/resquest-reset.component';
import { ResponseResetComponent } from './components/admin/password/response-reset/response-reset.component';
import { AppRoutingModule } from './app-routing.module';
import { ChildListComponent } from './components/admin/child-list/child-list.component';
//

//services
import { JarwisService } from './Services/jarwis.service';
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
    ResponseResetComponent,
    ChildListComponent
    //
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Material,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
  JarwisService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
