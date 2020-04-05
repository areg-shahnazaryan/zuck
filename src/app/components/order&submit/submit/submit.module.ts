import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {Ng5SliderModule} from 'ng5-slider';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SubmitComponent} from '@submit/submit.component';
import {SubmitRoutingModule} from '@submit/submit-routing.module';


@NgModule({
  declarations: [SubmitComponent],
  imports: [
    CommonModule,
    SubmitRoutingModule,
    FormsModule,
    MatInputModule,
    Ng5SliderModule,
    ReactiveFormsModule

  ],
  providers: [ ]
})
export class SubmitModule {
}
