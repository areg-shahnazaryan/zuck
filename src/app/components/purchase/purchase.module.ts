import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PurchaseComponent} from '@app/components/purchase/purchase.component';
import {PurchaseRoutingModule} from '@app/components/purchase/purchase-routing.module';


@NgModule({
  declarations: [PurchaseComponent],
  imports: [
    CommonModule,
    PurchaseRoutingModule,
  ]
})
export class PurchaseModule {
}
