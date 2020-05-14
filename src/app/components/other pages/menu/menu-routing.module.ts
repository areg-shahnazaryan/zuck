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
          loadChildren: () => import('../../home/home.module').then(m => m.HomeModule),
        },
        {
          path: 'contact',
          loadChildren: () => import('../../contact/contact.module').then(m => m.ContactModule),
        },
        {
          path: 'agency',
          loadChildren: () => import('../../agency/agency.module').then(m => m.AgencyModule),
        },
        /*{
          path: 'work',
          loadChildren: () => import('../../work/work.module').then(m => m.WorkModule),
        },
        {
          path: 'work/case',
          loadChildren: () => import('@case/case.module').then(m => m.CaseModule),
        },
        {
          path: 'work/dobriy',
          loadChildren: () => import('@dobriy/dobriy.module').then(m => m.DobriyModule),
        },
        {
          path: 'work/acba',
          loadChildren: () => import('@acba/acba.module').then(m => m.AcbaModule),
        },
        {
          path: 'work/coca-cola',
          loadChildren: () => import('@coca-cola/coca-cola.module').then(m => m.CocaColaModule),
        },
        {
          path: 'work/qit',
          loadChildren: () => import('@qit/qit.module').then(m => m.QitModule),
        },
        {
          path: 'work/gyumri',
          loadChildren: () => import('@gyumri/gyumri.module').then(m => m.GyumriModule),
        },
        {
          path: 'work/beeline',
          loadChildren: () => import('@beeline/beeline.module').then(m => m.BeelineModule),
        },
        {
          path: 'work/dobriy-tv',
          loadChildren: () => import('@dobriy-tv/dobriy-tv.module').then(m => m.DobriyTvModule),
        },*/
        {
          path: 'submit',
          loadChildren: () => import('@submit/submit.module').then(m => m.SubmitModule),
        },
        {
          path: 'order',
          loadChildren: () => import('@order/order.module').then(m => m.OrderModule),
        },
        {
          path: 'good-luck',
          loadChildren: () => import('../../order&submit/good-luck/good-luck.module').then(m => m.GoodLuckModule),
        },
        {
          path: 'thank-you',
          loadChildren: () => import('../../order&submit/thank-you/thank-you.module').then(m => m.ThankYouModule)
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
