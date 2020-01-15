import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CopywriterRoutingModule} from '@app/components/copywriter/copywriter-routing.module';
import {CopywriterComponent} from '@app/components/copywriter/copywriter.component';

@NgModule({
  declarations: [CopywriterComponent],
  imports: [
    CommonModule,
    CopywriterRoutingModule
  ]
})
export class CopywriterModule {
}
