import {NgModule} from '@angular/core';
import {MenuComponent} from './menu.component';
import {CommonModule} from '@angular/common';
import {FooterComponent} from '../footer/footer.component';
import {MenuRoutingModule} from '@menu/menu-routing.module';

@NgModule({
  declarations: [MenuComponent, FooterComponent],
  imports: [
    CommonModule,
    MenuRoutingModule,
  ]
})
export class MenuModule {
}
