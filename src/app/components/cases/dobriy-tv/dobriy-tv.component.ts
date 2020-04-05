import {
  Component,
  HostListener,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy, AfterViewInit
} from '@angular/core';
import {fromEvent, interval, Subscription} from 'rxjs';
import {debounceTime, distinctUntilChanged, finalize, map, startWith} from 'rxjs/operators';
import {CaseService} from '@app/components/cases/case.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dobriy-tv',
  templateUrl: './dobriy-tv.component.html',
  styleUrls: ['./dobriy-tv.component.scss']
})
export class DobriyTvComponent implements OnInit, OnDestroy, AfterViewInit {

  screenSize: number;

  toggle = false;
  videoWidth: number;
  videoHeight: number;
  resize$: Subscription;
  briefHeight = '0px';
  subscription = new Subscription();
  otherWorks = [];
  webAssets = ['../../../assets/cases/Dobry TVC/web/web_2.png', '../../../assets/cases/Dobry TVC/web/web_3.png',
    '../../../assets/cases/Dobry TVC/web/web_4.png'
  ];

  mobileAssets = ['../../../assets/cases/Dobry TVC/mobile/mobile_2.png', '../../../assets/cases/Dobry TVC/mobile/mobile_3.png',
    '../../../assets/cases/Dobry TVC/mobile/mobile_5.png', '../../../assets/cases/Dobry TVC/mobile/mobile_6.png'
  ];


  @ViewChild('brief', {static: false}) brief: ElementRef;

  constructor(private caseService: CaseService, private router: Router) {
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
          this.videoWidth = (width * 79) / 100;
          this.videoHeight = (this.videoWidth * 9) / 16;
          this.screenSize = width;
        } else {
          this.videoWidth = width;
          this.videoHeight = (this.videoWidth * 9) / 16;
          this.screenSize = width;
        }
      });
    this.otherWorks = this.caseService.getOtherWork('/work/dobriy-tv');
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
