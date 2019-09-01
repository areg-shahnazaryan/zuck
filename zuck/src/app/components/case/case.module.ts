import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CaseComponent} from '@case/case.component';
import {CaseRoutingModule} from '@case/case-routing.module';

@NgModule({
  declarations: [CaseComponent],
  imports: [
    CommonModule,
    CaseRoutingModule
  ]
})
export class CaseModule {
}
