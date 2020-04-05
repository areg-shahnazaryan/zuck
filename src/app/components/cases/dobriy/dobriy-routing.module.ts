import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DobriyComponent} from '@dobriy/dobriy.component';

const routes: Routes = [
  {path: '', component: DobriyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DobriyRoutingModule {
}
