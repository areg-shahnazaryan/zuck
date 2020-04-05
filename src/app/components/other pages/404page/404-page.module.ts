import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ErrorRoutingModule} from '@app/components/other pages/404page/404-page-routing.module';
import {ErrorComponent} from '@app/components/other pages/404page/404-page.component';

@NgModule({
  declarations: [ErrorComponent],
  imports: [
    CommonModule,
    ErrorRoutingModule
  ]
})
export class ErrorModule {
}
