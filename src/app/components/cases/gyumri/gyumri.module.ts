import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatTabsModule} from '@angular/material/tabs';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {FormsModule} from '@angular/forms';
import {GyumriComponent} from '@gyumri/gyumri.component';
import {GyumriRoutingModule} from '@gyumri/gyumri-routing.module';


@NgModule({
  declarations: [GyumriComponent],
  imports: [
    CommonModule,
    GyumriRoutingModule,
    FormsModule,
    NgbModule,
    MatTabsModule,
    MDBBootstrapModule.forRoot()
  ]
})
export class GyumriModule {
}
