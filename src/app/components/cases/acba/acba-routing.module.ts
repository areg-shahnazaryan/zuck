import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AcbaComponent} from '@app/components/cases/acba/acba.component';

const routes: Routes = [
  {path: '', component: AcbaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcbaRoutingModule {
}
