import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CaseComponent} from '@case/case.component';

const routes: Routes = [
  {path: '', component: CaseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaseRoutingModule {
}
