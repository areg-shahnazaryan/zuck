import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CaseComponent} from '@case/case.component';
import {CaseRoutingModule} from '@case/case-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatTabsModule} from '@angular/material/tabs';
import {MDBBootstrapModule} from 'angular-bootstrap-md';


@NgModule({
  declarations: [CaseComponent],
  imports: [
    CommonModule,
    CaseRoutingModule,
    NgbModule,
    MatTabsModule,
    MDBBootstrapModule.forRoot()
  ]
})
export class CaseModule {
}
