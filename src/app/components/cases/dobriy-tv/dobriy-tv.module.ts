import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatTabsModule} from '@angular/material/tabs';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {FormsModule} from '@angular/forms';
import {DobriyTvComponent} from '@dobriy-tv/dobriy-tv.component';
import {DobriyTvRoutingModule} from '@dobriy-tv/dobriy-tv-routing.module';


@NgModule({
  declarations: [DobriyTvComponent],
  imports: [
    CommonModule,
    DobriyTvRoutingModule,
    FormsModule,
    NgbModule,
    MatTabsModule,
    MDBBootstrapModule.forRoot()
  ]
})
export class DobriyTvModule {
}
