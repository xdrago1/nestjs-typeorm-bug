import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';


const routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top', initialNavigation: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
