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

  webAssets = ['../../../assets/cases/Gyumri/web/web_2.png', '../../../assets/cases/Gyumri/web/web_3.png',
    '../../../assets/cases/Gyumri/web/web_4.png', '../../../assets/cases/Gyumri/web/web_5.png'
  ];

  mobileAssets = ['../../../assets/cases/Gyumri/mobile/mobile_2.png', '../../../assets/cases/Gyumri/mobile/mobile_3.png',
    '../../../assets/cases/Gyumri/mobile/mobile_4.png', '../../../assets/cases/Gyumri/mobile/mobile_5.png'
  ];


  @ViewChild('brief', {static: false}) brief: ElementRef;


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
    this.otherWorks = this.caseService.getOtherWork('/work/gyumri');
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
