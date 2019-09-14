import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AgencyComponent} from '@agency/agency.component';
import {AgencyRoutingModule} from '@agency/agency-routing.module';

@NgModule({
  declarations: [AgencyComponent],
  imports: [
    CommonModule,
    AgencyRoutingModule

  ]
})
export class AgencyModule {
}
