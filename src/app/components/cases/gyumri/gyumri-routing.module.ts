import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GyumriComponent} from '@gyumri/gyumri.component';

const routes: Routes = [
  {path: '', component: GyumriComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GyumriRoutingModule {
}
