import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private iss = {
    login: 'http://localhost:8000/api/login',
    signup: 'http://localhost:8000/api/signup'
  };


  constructor() { }

  handle(data){
    const token = data.access_token;
  	this.set(token);
    const validJWT=this.loggedIn();
    if(validJWT){
      return this.userData(data);
    }return false; 
  }

  userData(data){
    const userData = data;
    return userData;
  }

  set(token){  //token set to the local storage
  	localStorage.setItem('token', token);
  }

  get(){ //getToken from the local Storage
  	return localStorage.getItem('token');
  }

  remove(){
  	localStorage.removeItem('token');
  }

  isValid(){
    const token= this.get();
    if(token){
      const payload= this.payload(token);
      if(payload){
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
      }
    }
    return false;
  }

  payload(token){
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload) {
    return JSON.parse(atob(payload));
  }
  loggedIn() {
    return this.isValid();
  }

}
