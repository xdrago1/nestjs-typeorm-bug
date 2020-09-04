import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShopPageComponent} from '../shop/shop-page/shop-page.component';
import {RouterModule} from '@angular/router';
import {HdapPageComponent} from './hdap-page/hdap-page.component';



const routes = [
  {
    path: '',
    component: HdapPageComponent,
    data: {title: 'HDAP'}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HdapRoutingModule {
}
