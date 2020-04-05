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
  selector: 'app-qit',
  templateUrl: './qit.component.html',
  styleUrls: ['./qit.component.scss']
})
export class QitComponent implements OnInit, OnDestroy, AfterViewInit {

  autoplay = false;
  screenSize: number;
  engagement = 0;
  impressions = 0;
  traffic = 0;
  inquiries = 0;
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

  webAssets = ['../../../assets/cases/Qit/web/web_2.png', '../../../assets/cases/Qit/web/web_3.png',
    '../../../assets/cases/Qit/web/web_4.png', '../../../assets/cases/Qit/web/web_5.png', '../../../assets/cases/Qit/web/web_6.png',
    '../../../assets/cases/Qit/web/web_7.png'
  ];

  mobileAssets = ['../../../assets/cases/Qit/mobile/mobile_2.png', '../../../assets/cases/Qit/mobile/mobile_3.png',
    '../../../assets/cases/Qit/mobile/mobile_4.png', '../../../assets/cases/Qit/mobile/mobile_5.png', '../../../assets/cases/Qit/mobile/mobile_6.png',
    '../../../assets/cases/Qit/mobile/mobile_7.png'
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
    this.otherWorks = this.caseService.getOtherWork('/work/qit');
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
      const interval1 = interval(154).subscribe(() => {
        if (this.engagement < 110) {
          this.engagement += 10;
        } else {
          this.subscription.add(interval1);
        }
      });

      const interval3 = interval(42.5).subscribe(() => {
        if (this.impressions < 4) {
          this.impressions = Number((this.impressions + 0.1).toFixed(1));
        } else {
          this.subscription.add(interval3);
        }
      });

      const interval4 = interval(100).subscribe(() => {
        if (this.traffic < 17) {
          this.traffic += 1;
        } else {
          this.subscription.add(interval4);
        }
      });
      const interval5 = interval(120).subscribe(() => {
        if (this.inquiries < 1.4) {
          this.inquiries = Number((this.inquiries + 0.1).toFixed(1));
        } else {
          this.subscription.add(interval5);
        }
      });
      this.done = true;
      if (this.done) {
        this.subscription.unsubscribe();
      }
    }
  }
}
