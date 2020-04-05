import {
  Component,
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
  webAssets = ['../../../assets/cases/Beeline/web/web_2.png', '../../../assets/cases/Beeline/web/web_3.png',
    '../../../assets/cases/Beeline/web/web_4.png', '../../../assets/cases/Beeline/web/web_5.png',
    '../../../assets/cases/Beeline/web/web_6.png'
  ];

  mobileAssets = ['../../../assets/cases/Beeline/mobile/mobile_2.png', '../../../assets/cases/Beeline/mobile/mobile_3.png',
    '../../../assets/cases/Beeline/mobile/mobile_5.png', '../../../assets/cases/Beeline/mobile/mobile_7.png', '../../../assets/cases/Beeline/mobile/mobile_8.png'
  ];


  @ViewChild('iframe', {static: true}) iframe: ElementRef;
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
        this.screenSize = width;
      });
    this.otherWorks = this.caseService.getOtherWork('/work/beeline');
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
