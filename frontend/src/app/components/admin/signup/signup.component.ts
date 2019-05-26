import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { JarwisService } from '../../../Services/jarwis.service';


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

  constructor(private jarwis: JarwisService) { }

  onSubmit(){
  	//console.log(this.form);
   this.jarwis.register(this.form).subscribe(
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
