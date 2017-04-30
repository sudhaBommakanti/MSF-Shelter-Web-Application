import { Component } from '@angular/core';
import { Router } from "@angular/router";
import {AuthService} from "app/services/auth.service";

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent{
    constructor(private authService: AuthService,private router: Router) {
    }
  //This is a method that you can use in the html.
   ngOnInit() {
      if (localStorage.getItem('username')) {
          this.router.navigate(['pages/product']);
      }
   }  

  startSigninMainWindow(){
    this.authService.startSigninMainWindow();
  }
}
