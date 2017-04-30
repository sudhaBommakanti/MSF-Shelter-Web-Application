
import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from "@angular/router";
import { Location } from '@angular/common';
import { FakeService } from "../../services/fake.service";
import { AuthService } from "app/services/auth.service";
import { Subscription }       from 'rxjs/Subscription';


@Component({
  selector: 'app-products-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.css']
})


export class ProductDetailsPageComponent implements OnInit {


  pageTitle: string = 'Product Detail';
  post: any[];
  errorMessage: string;
  private sub: Subscription;
  constructor(private _route: ActivatedRoute,
    private _productService: FakeService) {
  }

  ngOnInit(): void {
    this.sub = this._route.params.subscribe(
      params => {
        let id = +params['id'];
        this.Get(id);
      });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  Get(id: number) {
    this._productService.Get(id).subscribe(
      product => this.post = product,
      error => this.errorMessage = <any>error);
  }


}
