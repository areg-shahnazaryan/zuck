import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatTabsModule} from '@angular/material/tabs';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {FormsModule} from '@angular/forms';
import {QitComponent} from '@qit/qit.component';
import {QitRoutingModule} from '@qit/qit-routing.module';


@NgModule({
  declarations: [QitComponent],
  imports: [
    CommonModule,
    QitRoutingModule,
    FormsModule,
    NgbModule,
    MatTabsModule,
    MDBBootstrapModule.forRoot()
  ]
})
export class QitModule {
}
