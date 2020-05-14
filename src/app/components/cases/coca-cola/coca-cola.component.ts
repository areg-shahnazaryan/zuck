import {
  Component,
  HostListener,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy, AfterViewInit, Inject
} from '@angular/core';
import {fromEvent, interval, Subscription} from 'rxjs';
import {debounceTime, distinctUntilChanged, finalize, map, startWith} from 'rxjs/operators';
import {CaseService} from '@app/components/cases/case.service';
import {Router} from '@angular/router';
import {NguCarouselConfig} from '@ngu/carousel';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-coca-cola',
  templateUrl: './coca-cola.component.html',
  styleUrls: ['./coca-cola.component.scss']
})
export class CocaColaComponent implements OnInit, OnDestroy, AfterViewInit {

  autoplay = false;
  screenSize: number;
  score = 0;
  likes = 0;
  impressions = 0;
  unique = 0;
  cumulative = 0;
  users = 0;
  views = 0;
  done = false;
  toggle = false;
  videoWidth: number;
  videoHeight: number;
  resize$: Subscription;
  scrollEll: HTMLElement;
  briefHeight = '0px';
  subscription = new Subscription();
  otherWorks = [];
  webAssets = [];
  mobileAssets = [];
  webCounter = 0;
  mobileCounter = 0;

  futureWebImages = ['../../../assets/cases/Coke/web/web_2.png', '../../../assets/cases/Coke/web/web_4.png',
    '../../../assets/cases/Coke/web/web_5.png', '../../../assets/cases/Coke/web/web_6.png', '../../../assets/cases/Coke/web/web_8.png',
    '../../../assets/cases/Coke/web/web_10.png'
  ];

  futureMobileImages = ['../../../assets/cases/Coke/mobile/mobile_3.png', '../../../assets/cases/Coke/mobile/mobile_2.png', '../../../assets/cases/Coke/mobile/mobile_4.png',
    '../../../assets/cases/Coke/mobile/mobile_5.png', '../../../assets/cases/Coke/mobile/mobile_6.png', '../../../assets/cases/Coke/mobile/mobile_7.png',
    '../../../assets/cases/Coke/mobile/mobile_8.png', '../../../assets/cases/Coke/mobile/mobile_9.png', '../../../assets/cases/Coke/mobile/mobile_10.png',
    '../../../assets/cases/Coke/mobile/mobile_12.png',
  ];

  carouselItems = [{
    img: '../../../assets/reviews/2.png',
    text: 'Zuck&Berg, for me, is first of all an amazing group of people with a “let’s shoot for the stars\' attitude. The team’s endless' +
      ' creativity and daring passion empowers us to clearly convey our brand promise and communicate our care to our consumers.',
    name: 'Yesayi Melik-Yolchyan',
    position: 'Operational Marketing and ComEx Manager'
  }, {

    img: '../../../assets/reviews/1.png',
    text: 'I had the luck to work with one of the most creative teams in town - Zuck&Berg. They are always focused on delivering the best' +
      ' experience with every implemented project. They are making the local agency sphere more colorful and crazy. \'The craziness\' and' +
      ' soul they put into every initiative lets you be confident in any brief given to Zuck&Berg.',
    name: 'Anna Zohrabyan',
    position: 'Trade Marketing Expert'
  }];

  carouselConfig: NguCarouselConfig = {
    grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
    load: 20,
    loop: true,
    touch: true,
    velocity: 2
  };

  @ViewChild('iframe', {static: true}) iframe: ElementRef;
  @ViewChild('brief', {static: false}) brief: ElementRef;
  @ViewChild('tabs', {static: false}) tabs: ElementRef;
  @ViewChild('mobileBanners', {static: false}) mobileBanners: ElementRef;
  @ViewChild('webBanners', {static: false}) webBanners: ElementRef;

  @HostListener('window:scroll', ['$event'])
  scrollMe(event) {
    this.scrollEll = document.getElementById('counting');
    const coords = (this.scrollEll.getBoundingClientRect().top + window.scrollY) - 520;
    if (window.pageYOffset > coords) {
      this.counting();
    }

    if (this.screenSize < 992) {
      if ((this.tabs.nativeElement.getBoundingClientRect().top + window.scrollY) - 450 < window.pageYOffset) {
        this.loadImages();
        if (this.mobileBanners.nativeElement.getBoundingClientRect().bottom < window.pageYOffset) {
          this.loadImages(this.mobileCounter);
        }
      }
    } else {
      if ((this.tabs.nativeElement.getBoundingClientRect().top + window.scrollY) - 650 < window.pageYOffset) {
        this.loadImages();
        if (this.webBanners.nativeElement.getBoundingClientRect().bottom < window.pageYOffset) {
          this.loadImages(this.webCounter);
        }
      }
    }
  }

  loadImages(i?) {
    if (this.screenSize >= 992) {
      if (this.webCounter === 0) {
        this.webAssets.push(this.futureWebImages[0]);
        this.webCounter++;
      } else {
        if (this.futureWebImages.length > i) {
          this.webAssets.push(this.futureWebImages[i]);
          this.webCounter++;

        }
      }
    } else {
      if (this.mobileCounter === 0) {
        this.mobileAssets.push(this.futureMobileImages[0]);
        this.mobileCounter++;
      } else {
        if (this.futureWebImages.length > i) {
          this.mobileAssets.push(this.futureMobileImages[i]);
          this.mobileCounter++;
        }
      }
    }
  }

  constructor(private caseService: CaseService, private router: Router, @Inject(DOCUMENT)private document: Document
) {
  }


  ngOnInit() {
    this.resize$ = fromEvent(window, 'resize')
      .pipe(
        debounceTime(200),
        map(() => window.innerWidth),
        distinctUntilChanged(),
        startWith(window.innerWidth),
      ).subscribe(width => {
        if (width >= 992) {
          this.videoWidth = (this.document.body.offsetWidth * 79) / 100;
          this.videoHeight = (this.videoWidth * 9) / 16;
          this.screenSize = this.document.body.offsetWidth;
        } else {
          this.screenSize = width;
        }
      });
    this.otherWorks = this.caseService.getOtherWork('/work/coca-cola');
  }

  navigateTo(route) {
    this.router.navigateByUrl(route);
  }

  ngAfterViewInit(): void {

    setTimeout(() => {
      this.briefHeight = `${this.brief.nativeElement.offsetHeight}px`;
    }, 1200);
  }

  ngOnDestroy(): void {
    this.resize$.unsubscribe();
  }

  counting() {
    if (!this.done) {
      const interval1 = interval(100).subscribe(() => {
        if (this.score < 1.7) {
          this.score = Number((this.score + 0.1).toFixed(1));
        } else {
          this.subscription.add(interval1);
        }
      });
      const interval2 = interval(155).subscribe(() => {
        if (this.likes < 143) {
          this.likes += 11;
        } else {
          this.subscription.add(interval2);
        }
      });

      const interval3 = interval(39).subscribe(() => {
        if (this.impressions < 4.4) {
          this.impressions = Number((this.impressions + 0.1).toFixed(1));
        } else {
          this.subscription.add(interval3);
        }
      });

      const interval4 = interval(30).subscribe(() => {
        if (this.unique < 580) {
          this.unique += 10;
        } else {
          this.subscription.add(interval4);
        }
      });
      const interval5 = interval(52).subscribe(() => {
        if (this.cumulative < 3.3) {
          this.cumulative = Number((this.cumulative + 0.1).toFixed(1));
        } else {
          this.subscription.add(interval5);
        }
      });
      const interval6 = interval(11.2).subscribe(() => {
        if (this.users < 151) {
          this.users += 1;
        } else {
          this.subscription.add(interval6);
        }
      });
      const interval7 = interval(24).subscribe((x) => {
        if (this.views < 213) {
          this.views += 3;
        } else {
          this.subscription.add(interval7);
        }
      });
      this.done = true;
      if (this.done) {
        this.subscription.unsubscribe();
      }
    }
  }
}
