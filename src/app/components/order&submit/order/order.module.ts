import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import {Ng5SliderModule} from 'ng5-slider';
import {ReactiveFormsModule} from '@angular/forms';
import {OrderComponent} from '@order/order.component';
import {OrderRoutingModule} from '@order/order-routing.module';

@NgModule({
  declarations: [OrderComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    MatInputModule,
    Ng5SliderModule,
    ReactiveFormsModule

  ]
})
export class OrderModule {
}
