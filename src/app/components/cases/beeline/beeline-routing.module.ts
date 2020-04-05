import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BeelineComponent} from '@beeline/beeline.component';

const routes: Routes = [
  {path: '', component: BeelineComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeelineRoutingModule {
}
