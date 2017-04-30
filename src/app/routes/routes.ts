import { Routes } from "@angular/router";
import { AdminAuthGuardService } from "../services/admin-auth-gurad.service";
import { ProductPageComponent } from "../pages/product-page/product-page.component";
import { ProductDetailsPageComponent } from "../pages/product-details-page/product-details-page.component";
import { LoginPageComponent } from "../authentication/login-page/login-page.component";
import { LoggedInPageComponent } from "../authentication/logged-page/logged-page.component";

export const LOGIN_PATH_GROUP =
  {
    path: 'authentication', children:
    [
      {
        path: 'login', component: LoginPageComponent
      },
      {
        path: 'loggedIn', component: LoggedInPageComponent
      }
      //Add any other children in the same way
    ]
  };

export const ADMIN_PATH_GROUP =
  {
    path: 'pages',canActivate:[AdminAuthGuardService], children:
    [
      {
        path: 'product', component: ProductPageComponent
      },
      {
        path: 'productdetails/:id', component: ProductDetailsPageComponent
      }
      //Add any other children in the same way
    ]
  };

export const APP_ROUTES: Routes = [
  // The default route localhost:4200/ you should choose where it should  point.
  { path: '', redirectTo: 'authentication/login', pathMatch: 'full' },

  // Admin routes , Home, and its children, and any others.
  ADMIN_PATH_GROUP,

  LOGIN_PATH_GROUP,

  // Here, add the your groups for the other users

];

