import {
  Component,
  HostListener,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy, AfterViewInit, Inject
} from '@angular/core';
import {fromEvent, interval, Subscription} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, startWith} from 'rxjs/operators';
import {CaseService} from '@app/components/cases/case.service';
import {Router} from '@angular/router';
import {DOCUMENT} from '@angular/common';
import {NguCarouselConfig} from '@ngu/carousel';

@Component({
  selector: 'app-acba',
  templateUrl: './acba.component.html',
  styleUrls: ['./acba.component.scss']
})
export class AcbaComponent implements OnInit, OnDestroy, AfterViewInit {

  list;
  autoplay = false;
  screenSize: number;
  reach = 0;
  views = 0;
  engagement = 0;
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

  futureWebImages = ['../../../assets/cases/Acba/web/web_2.png', '../../../assets/cases/Acba/web/web_3.png',
    '../../../assets/cases/Acba/web/web_5.png', '../../../assets/cases/Acba/web/web_7.png', '../../../assets/cases/Acba/web/web_8.png',
    '../../../assets/cases/Acba/web/web_9.png', '../../../assets/cases/Acba/web/web_10.png', '../../../assets/cases/Acba/web/web_11.png',
    '../../../assets/cases/Acba/web/web_12.png'
  ];

  futureMobileImages = ['../../../assets/cases/Acba/mobile/web_2.png', '../../../assets/cases/Acba/mobile/web_3.png',
    '../../../assets/cases/Acba/mobile/web_5.png', '../../../assets/cases/Acba/mobile/web_7.png', '../../../assets/cases/Acba/mobile/web_8.png',
    '../../../assets/cases/Acba/mobile/web_9.png', '../../../assets/cases/Acba/mobile/web_10.png', '../../../assets/cases/Acba/mobile/web_11.png',
    '../../../assets/cases/Acba/mobile/web_12.png'
  ];

  carouselItems = [{
    img: '../../../assets/reviews/3.png',
    text: 'If I try to describe our work with Zuck, I’ll have to be very emotional. Crazy interesting. Crazy creative.' +
      ' Abnormally effective. Me personally, and all of our team, enjoy the collaboration and definitely learn a lot. As for all the' +
      ' funny accidents, I’ll just say “March 30 and 31” - they know what I mean.',
    name: 'Artyom Ghazaryan',
    position: 'Head of Marketing Communications'
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
    this.scrollEllLG = document.getElementById('countingLG');
    this.scrollEllSM = document.getElementById('countingSM');
    if (this.screenSize < 992) {
      if ((this.tabs.nativeElement.getBoundingClientRect().top + window.scrollY) - 450 < window.pageYOffset) {
        this.loadImages();
        if (this.mobileBanners.nativeElement.getBoundingClientRect().bottom < window.pageYOffset) {
          this.mobileCounter++;
          this.loadImages(this.mobileCounter);
        }
      }
      const coords = (this.scrollEllSM.getBoundingClientRect().bottom + window.scrollY) - 450;
      if (window.pageYOffset > coords) {
        this.counting();
      }
    } else {
      if ((this.tabs.nativeElement.getBoundingClientRect().top + window.scrollY) - 650 < window.pageYOffset) {
        this.loadImages();
        if (this.webBanners.nativeElement.getBoundingClientRect().bottom < window.pageYOffset) {
          this.loadImages(this.webCounter);
        }
      }
      const coords = (this.scrollEllLG.getBoundingClientRect().top + window.scrollY) - 450;
      if (window.pageYOffset > coords) {
        this.counting();
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
        if (width >= 992) {
          this.videoWidth = (this.document.body.offsetWidth * 79) / 100;
          this.videoHeight = (this.videoWidth * 9) / 16;
          this.screenSize = this.document.body.offsetWidth;
        } else {
          this.screenSize = width;
        }
      });
    this.otherWorks = this.caseService.getOtherWork('/work/acba');
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

  ngAfterViewInit(): void {


    setTimeout(() => {
      this.briefHeight = `${this.brief.nativeElement.offsetHeight}px`;

    }, 1200);
  }

  ngOnDestroy(): void {
    this.resize$.unsubscribe();
  }

  navigateTo(route) {
    this.router.navigateByUrl(route);
  }

  counting() {
    if (!this.done) {
      const interval1 = interval(120).subscribe(() => {
        if (this.reach < 1.4) {
          this.reach = Number((this.reach + 0.1).toFixed(1));
        } else {
          this.subscription.add(interval1);
        }
      });
      const interval2 = interval(56).subscribe(() => {
        if (this.views < 3) {
          this.views = Number((this.views + 0.1).toFixed(1));
        } else {
          this.subscription.add(interval2);
        }
      });
      const interval3 = interval(170).subscribe(() => {
        if (this.engagement < 50) {
          this.engagement += 5;
        } else {
          this.subscription.add(interval3);
        }
      });
      this.done = true;
      if (this.done) {
        this.subscription.unsubscribe();
      }
    }
  }
}
