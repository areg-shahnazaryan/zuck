import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MenuComponent} from './menu.component';

const routes: Routes = [
  {
    path: '', component: MenuComponent,
    children:
      [
        {
          path: '',
          loadChildren: '@home/home.module#HomeModule',
        },
        {
          path: 'contact',
          loadChildren: '@contact/contact.module#ContactModule',
        },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule {
}
