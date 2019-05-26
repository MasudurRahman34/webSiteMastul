import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  handle(token){
  	this.set(token);
  }
  set(token){  //token set to the local storage
  	localStorage.setItem('token', token);
  }

  get(token){ //getToken from the local Storage
  	localStorage.getItem('token');
  }

  remove(token){
  	localStorage.removeItem('token');
  }

}
