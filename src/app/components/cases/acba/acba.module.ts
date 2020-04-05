import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatTabsModule} from '@angular/material/tabs';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {FormsModule} from '@angular/forms';
import {AcbaComponent} from '@app/components/cases/acba/acba.component';
import {AcbaRoutingModule} from '@app/components/cases/acba/acba-routing.module';


@NgModule({
  declarations: [AcbaComponent],
  imports: [
    CommonModule,
    AcbaRoutingModule,
    FormsModule,
    NgbModule,
    MatTabsModule,
    MDBBootstrapModule.forRoot()
  ]
})
export class AcbaModule {
}
