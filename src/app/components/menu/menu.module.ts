import {NgModule} from '@angular/core';
import {MenuComponent} from './menu.component';
import {CommonModule} from '@angular/common';
import {MenuRoutingModule} from '@menu/menu-routing.module';
import {FooterComponent} from '@app/components/footer/footer.component';

@NgModule({
  declarations: [MenuComponent, FooterComponent],
  imports: [
    CommonModule,
    MenuRoutingModule,
  ]
})
export class MenuModule {
}
