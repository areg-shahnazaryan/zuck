import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VacancyComponent} from '@app/components/vacancy/vacancy.component';
import {VacancyRoutingModule} from '@app/components/vacancy/vacancy-routing.module';

@NgModule({
  declarations: [VacancyComponent],
  imports: [
    CommonModule,
    VacancyRoutingModule
  ]
})
export class VacancyModule {
}
