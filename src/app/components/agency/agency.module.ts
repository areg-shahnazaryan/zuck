import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatTabsModule} from '@angular/material/tabs';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {AgencyComponent} from '@agency/agency.component';
import {AgencyRoutingModule} from '@agency/agency-routing.module';


@NgModule({
  declarations: [AgencyComponent],
  imports: [
    CommonModule,
    AgencyRoutingModule,
    NgbModule,
    MatTabsModule,
    MDBBootstrapModule.forRoot()
  ]
})
export class AgencyModule {
}
