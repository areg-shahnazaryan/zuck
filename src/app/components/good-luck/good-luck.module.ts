import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GoodLuckComponent} from '@app/components/good-luck/good-luck.component';
import {GlRoutingModule} from '@app/components/good-luck/gl-routing.module';

@NgModule({
  declarations: [GoodLuckComponent],
  imports: [
    CommonModule,
    GlRoutingModule,
  ]
})
export class GoodLuckModule {
}
