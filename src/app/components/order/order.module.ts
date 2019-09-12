import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OrderComponent} from '@order/order.component';
import {OrderRoutingModule} from '@order/order-routing.module';
import {MatInputModule} from '@angular/material';
import {Ng5SliderModule} from 'ng5-slider';

@NgModule({
  declarations: [OrderComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    MatInputModule,
    Ng5SliderModule
  ]
})
export class OrderModule {
}