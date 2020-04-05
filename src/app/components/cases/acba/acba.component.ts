import {
  Component,
  HostListener,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy, AfterViewInit
} from '@angular/core';
import {fromEvent, interval, Subscription} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, startWith} from 'rxjs/operators';
import {CaseService} from '@app/components/cases/case.service';
import {Router} from '@angular/router';

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
  webAssets = ['../../../assets/cases/Acba/web/web_2.png', '../../../assets/cases/Acba/web/web_3.png',
    '../../../assets/cases/Acba/web/web_5.png', '../../../assets/cases/Acba/web/web_7.png', '../../../assets/cases/Acba/web/web_8.png',
    '../../../assets/cases/Acba/web/web_9.png', '../../../assets/cases/Acba/web/web_10.png', '../../../assets/cases/Acba/web/web_11.png',
    '../../../assets/cases/Acba/web/web_12.png'
  ];

  mobileAssets = ['../../../assets/cases/Acba/mobile/web_2.png', '../../../assets/cases/Acba/mobile/web_3.png',
    '../../../assets/cases/Acba/mobile/web_5.png', '../../../assets/cases/Acba/mobile/web_7.png', '../../../assets/cases/Acba/mobile/web_8.png',
    '../../../assets/cases/Acba/mobile/web_9.png', '../../../assets/cases/Acba/mobile/web_10.png', '../../../assets/cases/Acba/mobile/web_11.png',
    '../../../assets/cases/Acba/mobile/web_12.png'
  ];


  @ViewChild('iframe', {static: true}) iframe: ElementRef;
  @ViewChild('brief', {static: false}) brief: ElementRef;


  @HostListener('window:scroll', ['$event'])
  scrollMe(event) {
    this.scrollEllLG = document.getElementById('countingLG');
    this.scrollEllSM = document.getElementById('countingSM');

    if (this.screenSize < 992) {

      const coords = (this.scrollEllSM.getBoundingClientRect().bottom + window.scrollY) - 450;
      if (window.pageYOffset > coords) {
        this.counting();
      }
    } else {
      const coords = (this.scrollEllLG.getBoundingClientRect().top + window.scrollY) - 450;
      if (window.pageYOffset > coords) {
        this.counting();
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
        if (width >= 992) {
          this.videoWidth = (width * 79) / 100;
          this.videoHeight = (this.videoWidth * 9) / 16;
          this.screenSize = width;
        } else {
          this.videoWidth = width;
          this.videoHeight = (this.videoWidth * 9) / 16;
          this.screenSize = width;
        }
      });
    this.otherWorks = this.caseService.getOtherWork('/work/acba');
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
      const interval7 = interval(56).subscribe(() => {
        if (this.views < 3) {
          this.views = Number((this.views + 0.1).toFixed(1));
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
