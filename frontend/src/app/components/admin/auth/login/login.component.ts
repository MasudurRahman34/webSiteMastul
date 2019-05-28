import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { JarwisService } from '../Services/jarwis.service';
import { TokenService } from '../Services/token.service';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form = {
    email: null,
    password: null
  }

  public error = null;
  constructor(
    private jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
     private Auth: AuthService

    ) { }

  onSubmit(){
   this.jarwis.login(this.form).subscribe(
    //data => console.log(data),
    data => this.handleResponse(data),
    error => this.handleError(error)
    );
  }

  handleResponse(data){
    //this.Token.handle(data.access_token);
    this.Token.handle(data);
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('admin/profile');

  }

  handleError(error){
    this.error = error.error.error
  }

  ngOnInit() {
  	
  }

}
