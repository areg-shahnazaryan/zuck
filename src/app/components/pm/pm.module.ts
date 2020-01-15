import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PmComponent} from '@app/components/pm/pm.component';
import {PmRoutingModule} from '@app/components/pm/pm-routing.module';

@NgModule({
  declarations: [PmComponent],
  imports: [
    CommonModule,
    PmRoutingModule
  ]
})
export class PmModule {
}
