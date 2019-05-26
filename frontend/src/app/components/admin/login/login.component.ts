import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { JarwisService } from '../../../Services/jarwis.service';
import { TokenService } from '../../../Services/token.service';
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
    private Token: TokenService

    ) { }

  onSubmit(){
   this.jarwis.login(this.form).subscribe(
    //data => console.log(data),
    data => this.handleResponse(data),
    error => this.handleError(error)
    );
  }

  handleResponse(data){
    this.Token.handle(data.access_token);
  }

  handleError(error){
    this.error = error.error.error
  }

  ngOnInit() {
  	
  }

}
