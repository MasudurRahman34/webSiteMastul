import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http:HttpClient) { }
  onSubmit(){
  	//console.log(this.form);
   return this.http.post('http://localhost:8000/api/register', this.form).subscribe(
    data => console.log(data),
    error => this.handleError(error)
    );
  }

  handleError(error){
    this.error = error.error.error
  }


  ngOnInit() {
  }

}
