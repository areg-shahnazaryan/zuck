import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PmComponent} from '@app/components/pm/pm.component';
import {PmRoutingModule} from '@app/components/pm/pm-routing.module';
import {NguCarouselModule} from '@ngu/carousel';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [PmComponent],
  imports: [
    CommonModule,
    PmRoutingModule,
    NguCarouselModule,
    FormsModule
  ]
})
export class PmModule {
}
