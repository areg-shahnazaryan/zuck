import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {HttpClientModule} from '@angular/common/http';
import {SubmitService} from '@app/services/submit.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AngularTiltModule} from 'angular-tilt';
import {NgxSocialButtonModule, SocialServiceConfig} from 'ngx-social-button';

export function getAuthServiceConfigs() {
  return new SocialServiceConfig()
    .addFacebook('408345993385872');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    HttpClientModule,
    NgbModule,
    AngularTiltModule,
    NgxSocialButtonModule
  ],
  providers: [
    SubmitService,
    {
      provide: SocialServiceConfig,
      useFactory: getAuthServiceConfigs
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
