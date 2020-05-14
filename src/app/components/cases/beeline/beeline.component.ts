import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy, AfterViewInit, HostListener
} from '@angular/core';
import {fromEvent, interval, Subscription} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, startWith} from 'rxjs/operators';
import {CaseService} from '@app/components/cases/case.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-beeline',
  templateUrl: './beeline.component.html',
  styleUrls: ['./beeline.component.scss']
})
export class BeelineComponent implements OnInit, OnDestroy, AfterViewInit {

  screenSize: number;
  toggle = false;
  resize$: Subscription;
  briefHeight = '0px';
  subscription = new Subscription();
  otherWorks = [];
  webAssets = [];
  mobileAssets = [];
  webCounter = 0;
  mobileCounter = 0;
  futureWebImages = ['../../../assets/cases/Beeline/web/web_2.png', '../../../assets/cases/Beeline/web/web_3.png',
    '../../../assets/cases/Beeline/web/web_4.png', '../../../assets/cases/Beeline/web/web_5.png',
    '../../../assets/cases/Beeline/web/web_6.png'
  ];

  futureMobileImages = ['../../../assets/cases/Beeline/mobile/mobile_2.png', '../../../assets/cases/Beeline/mobile/mobile_3.png',
    '../../../assets/cases/Beeline/mobile/mobile_5.png', '../../../assets/cases/Beeline/mobile/mobile_7.png', '../../../assets/cases/Beeline/mobile/mobile_8.png'
  ];


  @ViewChild('iframe', {static: true}) iframe: ElementRef;
  @ViewChild('brief', {static: false}) brief: ElementRef;
  @ViewChild('tabs', {static: false}) tabs: ElementRef;
  @ViewChild('mobileBanners', {static: false}) mobileBanners: ElementRef;
  @ViewChild('webBanners', {static: false}) webBanners: ElementRef;

  @HostListener('window:scroll', ['$event'])
  scrollMe(event) {
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

  constructor(private caseService: CaseService, private router: Router) {
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
        this.screenSize = width;
      });
    this.otherWorks = this.caseService.getOtherWork('/work/beeline');
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

}
