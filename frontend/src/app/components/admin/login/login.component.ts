import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	emailFormControl: FormControl;
	password: FormControl;

  constructor() { }

  ngOnInit() {
  	this.emailFormControl = new FormControl('',[
  		Validators.required,
  		Validators.email
  		]),

  	this.password = new FormControl('',[
  		Validators.required
  		]);
  }

}
