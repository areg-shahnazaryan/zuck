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
          loadChildren: () => import('@home/home.module').then(m => m.HomeModule),
        },
        {
          path: 'contact',
          loadChildren: () => import('@contact/contact.module').then(m => m.ContactModule),
        },
        {
          path: 'work',
          loadChildren: () => import('@work/work.module').then(m => m.WorkModule),
        },
        {
          path: 'agency',
          loadChildren: () => import('@agency/agency.module').then(m => m.AgencyModule),
        },
        {
          path: 'work/case',
          loadChildren: () => import('@case/case.module').then(m => m.CaseModule),
        },
        {
          path: 'agency/zerund',
          loadChildren: () => import('@zerund/zerund.module').then(m => m.ZerundModule),
        },
        {
          path: 'agency/story',
          loadChildren: () => import('@app/components/story/story.module').then(m => m.StoryModule),
        },
        {
          path: 'agency/vacancy',
          loadChildren: () => import('@vacancy/vacancy.module').then(m => m.VacancyModule),
        },
        {
          path: 'agency/vacancy/submit',
          loadChildren: () => import('@submit/submit.module').then(m => m.SubmitModule),
        },
        {
          path: 'order',
          loadChildren: () => import('@order/order.module').then(m => m.OrderModule),
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule {
}
