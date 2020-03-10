import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatTabsModule} from '@angular/material/tabs';
import {AgencyComponent} from '@agency/agency.component';
import {AgencyRoutingModule} from '@agency/agency-routing.module';
import {NguCarouselModule} from '@ngu/carousel';


@NgModule({
  declarations: [AgencyComponent],
  imports: [
    CommonModule,
    AgencyRoutingModule,
    NgbModule,
    MatTabsModule,
    NguCarouselModule,
  ]
})
export class AgencyModule {
}
