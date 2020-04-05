import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatTabsModule} from '@angular/material/tabs';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {FormsModule} from '@angular/forms';
import {BeelineComponent} from '@beeline/beeline.component';
import {BeelineRoutingModule} from '@beeline/beeline-routing.module';


@NgModule({
  declarations: [BeelineComponent],
  imports: [
    CommonModule,
    BeelineRoutingModule,
    FormsModule,
    NgbModule,
    MatTabsModule,
    MDBBootstrapModule.forRoot()
  ]
})
export class BeelineModule {
}
