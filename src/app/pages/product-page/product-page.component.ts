import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Location } from '@angular/common';
import { FakeService } from "../../services/fake.service";
import { AuthService } from "app/services/auth.service";


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  products: any[];
  profile = JSON.parse(localStorage.getItem("userProfile"));
  username = this.profile["name"];

  constructor(private router: Router, private fakeService: FakeService, private authService: AuthService, private location: Location) { }

  ngOnInit() {
    //load the data on init.
    this.loadPosts();
  }

  loadPosts() {
    this.fakeService.GetAll().subscribe(data => {
      //Your logic to render the html.

      //Just like that. (of course do the heard edge checks)
      this.products = data;

    }, error => console.log('error in loading the products'));
  }

  //This is a method that you can use in the html.
  getPosts() {
    //Notice the router instance how it was loaded in the constructor.
    //That apply to all services. No need to use 'new' keyword to instatiate an object.
    this.router.navigate(['product', 'products']);
  }
  goBack(): void {
    this.location.back();
  }

  startSignoutMainWindow() {
    localStorage.clear();
    this.authService.startSignoutMainWindow();
  }

}
