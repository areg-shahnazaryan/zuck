import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CaseComponent} from '@case/case.component';
import {CaseRoutingModule} from '@case/case-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatTabsModule} from '@angular/material/tabs';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [CaseComponent],
  imports: [
    CommonModule,
    CaseRoutingModule,
    FormsModule,
    NgbModule,
    MatTabsModule,
    MDBBootstrapModule.forRoot()
  ]
})
export class CaseModule {
}
