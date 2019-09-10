import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WorkComponent} from '@work/work.component';
import {WorkRoutingModule} from '@work/work-routing.module';

@NgModule({
  declarations: [WorkComponent],
  imports: [
    CommonModule,
    WorkRoutingModule,
  ]
})
export class WorkModule {
}
