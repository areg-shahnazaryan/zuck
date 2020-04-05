import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QitComponent} from '@qit/qit.component';

const routes: Routes = [
  {path: '', component: QitComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QitRoutingModule {
}
