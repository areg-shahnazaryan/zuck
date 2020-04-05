import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ThankYouComponent} from '@app/components/order&submit/thank-you/thank-you.component';
import {TyRoutingModule} from '@app/components/order&submit/thank-you/ty-routing.module';

@NgModule({
  declarations: [ThankYouComponent],
  imports: [
    CommonModule,
    TyRoutingModule,
  ]
})
export class ThankYouModule {
}
