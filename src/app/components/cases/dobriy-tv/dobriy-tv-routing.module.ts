import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DobriyTvComponent} from '@dobriy-tv/dobriy-tv.component';

const routes: Routes = [
  {path: '', component: DobriyTvComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DobriyTvRoutingModule {
}
