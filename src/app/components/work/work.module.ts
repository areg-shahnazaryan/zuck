import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WorkComponent} from '@work/work.component';
import {WorkRoutingModule} from '@work/work-routing.module';
import {AngularTiltModule} from 'angular-tilt';
import {FilterPipe} from '@app/services/filter.pipe';

@NgModule({
  declarations: [
    WorkComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    WorkRoutingModule,
    AngularTiltModule
  ]
})
export class WorkModule {
}
