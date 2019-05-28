import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//material design components
import { Material } from './material.module'; 
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
//routing
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/admin/navbar/navbar.component';
//services
import { JarwisService } from './components/admin/auth/Services/jarwis.service';
//

//module
import { AdminModule } from './components/admin/admin.module';
import { AuthModule } from './components/admin/auth/auth.module';
import { ChildControllerModule } from './components/admin/child-controller/child-controller.module';
//


@NgModule({
  declarations: [
    AppComponent,
    //routing
    NavbarComponent,
    //
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Material,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpClientModule,
    FormsModule,
    AdminModule,
    AuthModule,
    ChildControllerModule
  ],
  providers: [
  JarwisService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
