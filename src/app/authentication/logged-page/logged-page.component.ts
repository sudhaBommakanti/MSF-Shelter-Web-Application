import { Component } from '@angular/core';
import { Router } from "@angular/router";
import {AuthService} from "app/services/auth.service";

@Component({
    selector: 'app-loggedIn-page',
    templateUrl: './logged-page.component.html'
})
export class LoggedInPageComponent{
    
    constructor(private authService: AuthService,private router:Router) {
    }

     ngOnInit() {
          this.authService.endSigninMainWindow();
    }
}