import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ZerundRoutingModule} from '@app/components/zerund/zerund-routing.module';
import {ZerundComponent} from '@app/components/zerund/zerund.component';


@NgModule({
  declarations: [ZerundComponent],
  imports: [
    CommonModule,
    ZerundRoutingModule,
  ]
})
export class ZerundModule {
}
