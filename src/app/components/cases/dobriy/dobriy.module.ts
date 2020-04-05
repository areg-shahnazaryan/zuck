import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatTabsModule} from '@angular/material/tabs';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {FormsModule} from '@angular/forms';
import {DobriyComponent} from '@dobriy/dobriy.component';
import {DobriyRoutingModule} from '@dobriy/dobriy-routing.module';


@NgModule({
  declarations: [DobriyComponent],
  imports: [
    CommonModule,
    DobriyRoutingModule,
    FormsModule,
    NgbModule,
    MatTabsModule,
    MDBBootstrapModule.forRoot()
  ]
})
export class DobriyModule {
}
