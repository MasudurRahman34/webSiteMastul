import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { JarwisService } from '../Services/jarwis.service';
import { TokenService } from '../Services/token.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
	roles: string[] = [
    'Admin',
    'Account'
  ];
 

public form= {
    name: null,
    email: null,
    password: null,
    role: null
  }

 public error=null;

  constructor(
    private jarwis: JarwisService,
    private Token: TokenService,
    private router: Router
    ) { }

  onSubmit(){
  	//console.log(this.form);
   this.jarwis.register(this.form).subscribe(
    //data => console.log(data),
    data => this.handleResponse(data),
    error => this.handleError(error)
    );
  }

  handleResponse(data){
    //this.Token.handle(data.access_token);
    this.Token.handle(data);
    this.router.navigateByUrl('admin/profile');

  }

  handleError(error){
    this.error = error.error.error
  }


  ngOnInit() {
  }

}
