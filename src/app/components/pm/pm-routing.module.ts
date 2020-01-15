import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PmComponent} from '@app/components/pm/pm.component';

const routes: Routes = [
  {path: '', component: PmComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PmRoutingModule {
}
