import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {StartPageComponent} from './pages/start-page/start-page.component';


const routes = [
  {
    path: '',
    component: StartPageComponent,
    pathMatch: 'full',
    data: {title: 'HD ACADEMY'}
  },
  {
    path: 'shop',
    loadChildren: () => import('./pages/shop/shop.module').then(m => m.ShopModule),
    data: {title: 'SHOP'}
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
