import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CopywriterComponent} from '@app/components/copywriter/copywriter.component';

const routes: Routes = [
  {path: '', component: CopywriterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CopywriterRoutingModule {
}
