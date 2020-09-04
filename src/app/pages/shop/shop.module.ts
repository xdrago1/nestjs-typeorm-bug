import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShopRoutingModule} from './shop-routing.module';
import {ShopPageComponent} from './shop-page/shop-page.component';



@NgModule({
  declarations: [
    ShopPageComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
