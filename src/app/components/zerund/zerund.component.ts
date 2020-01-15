import { Component, OnInit } from '@angular/core';
import {FacebookLoginProvider, GoogleLoginProvider, SocialService} from 'ngx-social-button';

@Component({
  selector: 'app-zerund',
  templateUrl: './zerund.component.html',
  styleUrls: ['./zerund.component.scss']
})
export class ZerundComponent implements OnInit {
  public screenSize = window.innerWidth;
  shareObj = {
    href: 'https://www.facebook.com/',
    hashtag: '#FACEBOOK-SHARE-HASGTAG'
  };
  constructor(private socialAuthService: SocialService) { }

  ngOnInit() {

  }

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform === 'facebook') {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_TYPE;
      console.log();;
      console.log(FacebookLoginProvider, ' asd asd as ');
    } else if (socialPlatform === 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_TYPE;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (socialUser) => {
        console.log(socialPlatformProvider, socialUser);
        console.log(socialPlatform + ' sign in data : ' , socialUser);
      });
  }

  public facebookSharing(shareObj: any) {
    this.socialAuthService.facebookSharing(shareObj);
  }
}
