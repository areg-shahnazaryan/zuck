import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CocaColaComponent} from '@coca-cola/coca-cola.component';

const routes: Routes = [
  {path: '', component: CocaColaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CocaColaRoutingModule {
}
