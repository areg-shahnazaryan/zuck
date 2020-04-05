import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GoodLuckComponent} from '@app/components/order&submit/good-luck/good-luck.component';

const routes: Routes = [
  {
    path: '',
    component: GoodLuckComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlRoutingModule {
}

