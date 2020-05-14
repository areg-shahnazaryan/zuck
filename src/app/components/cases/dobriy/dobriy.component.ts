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
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-dobriy',
  templateUrl: './dobriy.component.html',
  styleUrls: ['./dobriy.component.scss']
})
export class DobriyComponent implements OnInit, OnDestroy, AfterViewInit {

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
  scrollEllLG: HTMLElement;
  scrollEllSM: HTMLElement;
  briefHeight = '0px';
  subscription = new Subscription();
  otherWorks = [];
  webAssets = [];
  mobileAssets = [];
  webCounter = 0;
  mobileCounter = 0;

  futureWebImages = ['../../../assets/cases/Dobry/web/web_2.png', '../../../assets/cases/Dobry/web/web_3.png',
    '../../../assets/cases/Dobry/web/web_4.png', '../../../assets/cases/Dobry/web/web_5.png', '../../../assets/cases/Dobry/web/web_6.png',
    '../../../assets/cases/Dobry/web/web_7.png', '../../../assets/cases/Dobry/web/web_8.png', '../../../assets/cases/Dobry/web/web_9.png',
    '../../../assets/cases/Dobry/web/web_10.png', '../../../assets/cases/Dobry/web/web_11.png'
  ];

  futureMobileImages = ['../../../assets/cases/Dobry/mobile/mobile_2.png', '../../../assets/cases/Dobry/mobile/mobile_3.png',
    '../../../assets/cases/Dobry/mobile/mobile_4.png', '../../../assets/cases/Dobry/mobile/mobile_5.png', '../../../assets/cases/Dobry/mobile/mobile_6.png',
    '../../../assets/cases/Dobry/mobile/mobile_7.png', '../../../assets/cases/Dobry/mobile/mobile_8.png', '../../../assets/cases/Dobry/mobile/mobile_9.png',
    '../../../assets/cases/Dobry/mobile/mobile_10.png', '../../../assets/cases/Dobry/mobile/mobile_11.png', '../../../assets/cases/Dobry/mobile/mobile_12.png',
    '../../../assets/cases/Dobry/mobile/mobile_13.png'
  ];


  @ViewChild('iframe', {static: true}) iframe: ElementRef;
  @ViewChild('brief', {static: false}) brief: ElementRef;
  @ViewChild('tabs', {static: false}) tabs: ElementRef;
  @ViewChild('mobileBanners', {static: false}) mobileBanners: ElementRef;
  @ViewChild('webBanners', {static: false}) webBanners: ElementRef;


  @HostListener('window:scroll', ['$event'])
  scrollMe(event) {
    this.scrollEllLG = document.getElementById('countingLG');
    this.scrollEllSM = document.getElementById('countingSM');

    if (this.screenSize < 992) {
      const coords = (this.scrollEllSM.getBoundingClientRect().bottom + window.scrollY) - 450;
      if (window.pageYOffset > coords) {
        this.counting();
      }
      if ((this.tabs.nativeElement.getBoundingClientRect().top + window.scrollY) - 450 < window.pageYOffset) {
        this.loadImages();
        console.log(this.mobileBanners.nativeElement.getBoundingClientRect().bottom, window.pageYOffset);
        if (this.mobileBanners.nativeElement.getBoundingClientRect().bottom < window.pageYOffset) {
          this.loadImages(this.mobileCounter);
        }
      }
    } else {
      const coords = (this.scrollEllLG.getBoundingClientRect().top + window.scrollY) - 450;
      if (window.pageYOffset > coords) {
        this.counting();
      }
      if ((this.tabs.nativeElement.getBoundingClientRect().top + window.scrollY) - 650 < window.pageYOffset) {
        this.loadImages();
        if (this.webBanners.nativeElement.getBoundingClientRect().bottom < window.pageYOffset) {
          this.loadImages(this.webCounter);
        }
      }
    }
  }

  constructor(private caseService: CaseService, private router: Router, @Inject(DOCUMENT)private document: Document) {
  }


  ngOnInit() {
    // this.autoplay = true;
    this.resize$ = fromEvent(window, 'resize')
      .pipe(
        debounceTime(200),
        map(() => window.innerWidth),
        distinctUntilChanged(),
        startWith(window.innerWidth),
      ).subscribe(width => {
        this.videoWidth = (this.document.body.offsetWidth * 79) / 100;
        this.videoHeight = (this.videoWidth * 9) / 16;
        this.screenSize = this.document.body.offsetWidth;
      });
    this.otherWorks = this.caseService.getOtherWork('/work/dobriy');
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
      const interval1 = interval(567).subscribe(() => {
        if (this.score < 0.3) {
          this.score = Number((this.score + 0.1).toFixed(1));
        } else {
          this.subscription.add(interval1);
        }
      });
      const interval2 = interval(30).subscribe(() => {
        if (this.likes < 56) {
          this.likes += 1;
        } else {
          this.subscription.add(interval2);
        }
      });

      const interval3 = interval(30).subscribe(() => {
        if (this.impressions < 6.6) {
          this.impressions = Number((this.impressions + 0.1).toFixed(1));
        } else {
          this.subscription.add(interval3);
        }
      });

      const interval4 = interval(25).subscribe(() => {
        if (this.unique < 650) {
          this.unique += 10;
        } else {
          this.subscription.add(interval4);
        }
      });
      const interval5 = interval(30).subscribe(() => {
        if (this.cumulative < 5.8) {
          this.cumulative = Number((this.cumulative + 0.1).toFixed(1));
        } else {
          this.subscription.add(interval5);
        }
      });
      const interval6 = interval(100).subscribe(() => {
        if (this.users < 289) {
          this.users = Number((this.users + 17).toFixed(1));
        } else {
          this.subscription.add(interval6);
        }
      });
      const interval7 = interval(100).subscribe(() => {
        if (this.views < 306) {
          this.views += 17;
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
