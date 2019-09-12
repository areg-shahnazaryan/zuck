import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WorkComponent} from '@work/work.component';
import {WorkRoutingModule} from '@work/work-routing.module';
import {AngularTiltModule} from 'angular-tilt';

@NgModule({
  declarations: [WorkComponent],
  imports: [
    CommonModule,
    WorkRoutingModule,
    AngularTiltModule
  ]
})
export class WorkModule {
}
