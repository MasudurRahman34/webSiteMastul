import { Component, OnInit } from '@angular/core';
import { AuthService } from './components/admin/auth/Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public loggedIn: boolean;

constructor(
    private Auth: AuthService
    ){ }

ngOnInit() {
    this.Auth.authStatus.subscribe(value => this.loggedIn = value);
    console.log(this.loggedIn);
  }

isMenuOpen = true;
contentMargin = 240;
onToolbarMenuToggle() {
    console.log('On toolbar toggled', this.isMenuOpen);
    this.isMenuOpen = !this.isMenuOpen;

    if(!this.isMenuOpen) {
      this.contentMargin = 70;
    } else {
      this.contentMargin = 240;
    }
  }
  // sidenavEvents(str) {
  //   console.log(str);
  // }
}