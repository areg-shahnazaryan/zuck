import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CaseComponent} from '@case/case.component';
import {CaseRoutingModule} from '@case/case-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [CaseComponent],
  imports: [
    CommonModule,
    CaseRoutingModule,
    NgbModule,
    MatTabsModule
  ]
})
export class CaseModule {
}
