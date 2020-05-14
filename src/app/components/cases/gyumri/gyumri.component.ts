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

@Component({
  selector: 'app-gyumri',
  templateUrl: './gyumri.component.html',
  styleUrls: ['./gyumri.component.scss']
})
export class GyumriComponent implements OnInit, OnDestroy, AfterViewInit {

  screenSize: number;
  toggle = false;
  videoWidth: number;
  videoHeight: number;
  resize$: Subscription;
  briefHeight = '0px';
  subscription = new Subscription();
  otherWorks = [];
  webAssets = [];
  mobileAssets = [];
  webCounter = 0;
  mobileCounter = 0;

  futureWebImages = ['../../../assets/cases/Gyumri/web/web_2.png', '../../../assets/cases/Gyumri/web/web_3.png',
    '../../../assets/cases/Gyumri/web/web_4.png', '../../../assets/cases/Gyumri/web/web_5.png'
  ];

  futureMobileImages = ['../../../assets/cases/Gyumri/mobile/mobile_2.png', '../../../assets/cases/Gyumri/mobile/mobile_3.png',
    '../../../assets/cases/Gyumri/mobile/mobile_4.png', '../../../assets/cases/Gyumri/mobile/mobile_5.png'
  ];


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

  constructor(private caseService: CaseService, private router: Router, @Inject(DOCUMENT)private document: Document
) {
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
          this.screenSize = width;
        } else {
          this.screenSize = width;
        }
      });
    this.otherWorks = this.caseService.getOtherWork('/work/gyumri');
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
