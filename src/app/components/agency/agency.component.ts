import {AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, } from '@angular/core';
import {fromEvent, Subscription} from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith } from 'rxjs/operators';
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.scss']
})
export class AgencyComponent implements  OnInit, AfterViewInit, OnDestroy {
  firstRow = ['../../../assets/agencyAssets/cocacola.svg', '../../../assets/agencyAssets/acba.svg',
    '../../../assets/agencyAssets/armat.svg', '../../../assets/agencyAssets/beeline.svg',
    '../../../assets/agencyAssets/burn.svg', '../../../assets/agencyAssets/beeline.svg'
  ];
  secondRow = ['../../../assets/agencyAssets/cocacola.svg', '../../../assets/agencyAssets/kara.svg',
    '../../../assets/agencyAssets/kotayk.svg', '../../../assets/agencyAssets/kotayk.svg',
    '../../../assets/agencyAssets/mikrokapital.svg', '../../../assets/agencyAssets/patchi.svg'
  ];
  thirdRow = ['../../../assets/agencyAssets/kara.svg', '../../../assets/agencyAssets/kara.svg',
    '../../../assets/agencyAssets/kara.svg', '../../../assets/agencyAssets/kara.svg',
    '../../../assets/agencyAssets/kara.svg', '../../../assets/agencyAssets/kara.svg'
  ];
  fourthRow = ['../../../assets/agencyAssets/image49.png', '../../../assets/agencyAssets/logo.svg',
    '../../../assets/agencyAssets/image28.png', '../../../assets/agencyAssets/image44.png',
    '../../../assets/agencyAssets/image30.png'];

  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    load: 20,
    loop: true,
    touch: true,
    velocity: 2
  };
  secondCarouselConfigMobile: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    loop: true,
    touch: true
  };

  secondCarouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    load: 20,
    loop: true,
    velocity: 2,
    touch: true,
  };

  firstCarouselItems = [{
    img: '../../../assets/agencyAssets/Rectangle17@2x.png',
    text: 'I know, I know. It\'s supposed to be about "us", not "we". But we\'re always ready to break a' +
      'rule or two, especially when it comes to we. We are Zuck&Berg. Zuck for short. And we are all about we. In fact. I know,' +
      'I know. But we\'re always ready to break a rule or two, especially when it comes to we. We are Zuck&Berg. And we are all about we. In fact.',
    name: 'Lilit Matevosyan',
    position: 'PMI Marketing Head'
  }, {

    img: '="../../../assets/agencyAssets/Rectangle18@2x.png',
    text: 'I know, I know. It\'s supposed to be about "us", not "we". But we\'re always ready to break a' +
      'rule or two, especially when it comes to we. We are Zuck&Berg. Zuck for short. And we are all about we. In fact. I know,' +
      'I know. But we\'re always ready to break a rule or two, especially when it comes to we. We are Zuck&Berg. And we are all about we. In fact.',
    name: 'Lilit Matevosyan',
    position: 'PMI Marketing Head'
  }, {

    img: '="../../../assets/agencyAssets/Rectangle17@2x.png',
    text: 'I know, I know. It\'s supposed to be about "us", not "we". But we\'re always ready to break a' +
      'rule or two, especially when it comes to we. We are Zuck&Berg. Zuck for short. And we are all about we. In fact. I know,' +
      'I know. But we\'re always ready to break a rule or two, especially when it comes to we. We are Zuck&Berg. And we are all about we. In fact.',
    name: 'Lilit Matevosyan',
    position: 'PMI Marketing Head'
  }];

  secondCarouselItems = [
    '../../../assets/agencyAssets/Rectangle402x.png', '../../../assets/agencyAssets/mbRectangle 45x.png', '../../../assets/agencyAssets/Rectangle402x.png'
  ];
  resize$: Subscription;
  screenSize: number;
  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.resize$ = fromEvent(window, 'resize')
      .pipe(
        debounceTime(200),
        map(() => window.innerWidth),
        distinctUntilChanged(),
        startWith(window.innerWidth),
      ).subscribe(width => {
      this.screenSize = width;
      if (width <= 1799 && width > 1542) {
        this.firstRow.length = 6;
        this.secondRow.length = 6;
        this.thirdRow.length = 6;
      }
      if (width <= 1543 && width > 1303) {
        this.firstRow.length = 5;
        this.secondRow.length = 5;
        this.thirdRow.length = 5;
      }
      if (width <= 1302 && width > 1045) {
        this.firstRow.length = 4;
        this.secondRow.length = 4;
        this.thirdRow.length = 4;
      }
      if (width <= 1045 && width > 992) {
        this.firstRow.length = 3;
        this.secondRow.length = 3;
        this.thirdRow.length = 3;
      }
    });
  }

  ngAfterViewInit() {
    console.log(this.cdr);
    this.cdr.detectChanges();
  }

  ngOnDestroy() {
    this.resize$.unsubscribe();
  }
}
