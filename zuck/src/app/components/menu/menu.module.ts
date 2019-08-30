import {NgModule} from '@angular/core';
import {MenuComponent} from './menu.component';
import {CommonModule} from '@angular/common';
import {MenuRoutingModule} from './menu-routing.module';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    MenuRoutingModule
  ]
})
export class MenuModule {
}
