import { Component, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { LandingScreenComponent } from './landing-screen/landing-screen.component';
import { ProductComponent } from './product/product.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SideNavComponent } from './side-nav/side-nav.component';
const routes:Routes = [
  { path: '', redirectTo:'product', pathMatch: 'full' },
  {
    path: '', component:ProductComponent,
    children:[
      {
        path:'product',component:ProductComponent
        //lazy loading - module1
      },
      {
        path:'checkout',component:CheckoutComponent
        //lazy loading module2
      },
    ]
  }
]
@NgModule({
  declarations: [
    NavBarComponent,
    LandingScreenComponent,
    ProductComponent,
    CheckoutComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModuleModule { }
