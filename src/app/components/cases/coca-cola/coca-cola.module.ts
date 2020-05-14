import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatTabsModule} from '@angular/material/tabs';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {FormsModule} from '@angular/forms';
import {CocaColaComponent} from '@coca-cola/coca-cola.component';
import {CocaColaRoutingModule} from '@coca-cola/coca-cola-routing.module';
import {NguCarouselModule} from '@ngu/carousel';


@NgModule({
  declarations: [CocaColaComponent],
  imports: [
    CommonModule,
    CocaColaRoutingModule,
    FormsModule,
    NgbModule,
    MatTabsModule,
    MDBBootstrapModule.forRoot(),
    NguCarouselModule,

  ]
})
export class CocaColaModule {
}
