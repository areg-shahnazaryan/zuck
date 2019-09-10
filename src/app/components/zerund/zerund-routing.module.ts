import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ZerundComponent} from '@app/components/zerund/zerund.component';

const routes: Routes = [
  {
    path: '',
    component: ZerundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZerundRoutingModule {
}
