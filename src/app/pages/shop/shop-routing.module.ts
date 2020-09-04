import {ShopPageComponent} from './shop-page/shop-page.component';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';


const routes = [
  {
    path: '',
    component: ShopPageComponent,
    data: {title: 'SHOP'}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule {
}
