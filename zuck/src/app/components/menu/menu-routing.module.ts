import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MenuComponent} from '@menu/menu.component';

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
        {
          path: 'work',
          loadChildren: '@work/work.module#WorkModule',
        },
        {
          path: 'agency',
          loadChildren: '@agency/agency.module#AgencyModule',
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
