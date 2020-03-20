import {
  Component,
  HostListener,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy, AfterViewInit
} from '@angular/core';
import {fromEvent, Subscription} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-dobriy',
  templateUrl: './dobriy.component.html',
  styleUrls: ['./dobriy.component.scss']
})
export class DobriyComponent implements OnInit, OnDestroy, AfterViewInit {

  list;
  screenSize: number;
  contacts = 0;
  expressions = 0;
  awernes = 0;
  traffic = 0;
  done = false;
  toggle = false;
  videoWidth: number;
  videoHeight: number;
  resize$: Subscription;
  scrollEll: HTMLElement;
  briefHeight = '0px';


  @ViewChild('iframe', {static: true}) iframe: ElementRef;
  @ViewChild('brief', {static: false}) brief: ElementRef;

  @HostListener('window:scroll', ['$event'])
  scrollMe(event) {
    this.scrollEll = document.getElementById('counting');
    const coords = (this.scrollEll.getBoundingClientRect().top + window.scrollY) - 520;
    if (window.pageYOffset > coords) {
      this.counting();
    }
  }

  constructor() {
    if (window.innerWidth > 992) {
      this.list = [
        {id: 1, path: '../../../assets/caseAssets/Image422x.png'},
        {id: 2, path: '../../../assets/caseAssets/Image422x.png'},
        {id: 3, path: '../../../assets/caseAssets/Image432x.png'},
        {id: 4, path: '../../../assets/caseAssets/Image442x.png'},
        {id: 5, path: '../../../assets/caseAssets/Image452x.png'},
      ];
    } else {
      this.list = [
        {id: 1, path: '../../../assets/caseAssets/logoMob.svg'},
        {id: 2, path: '../../../assets/caseAssets/ImageMob42.png'},
      ];

    }
  }

  ngOnInit() {

    this.resize$ = fromEvent(window, 'resize')
      .pipe(
        debounceTime(200),
        map(() => window.innerWidth),
        distinctUntilChanged(),
        startWith(window.innerWidth),
      ).subscribe(width => {
        this.videoWidth = (width * 79) / 100;
        console.log(width, this.videoWidth);
        this.videoHeight = (this.videoWidth * 9) / 16;
        this.screenSize = width;
      });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.briefHeight = `${this.brief.nativeElement.offsetHeight}px`;
    }, 0);
  }

  ngOnDestroy(): void {
    this.resize$.unsubscribe();
  }

  counting() {
    if (!this.done) {
      const interval1 = setInterval(() => {
        if (this.expressions <= 729) {
          this.expressions += 10;
        }
      }, 15);
      const interval2 = setInterval(() => {
        if (this.contacts <= 57) {
          this.contacts++;
        }
      }, 25);
      const interval3 = setInterval(() => {
        if (this.awernes <= 2) {
          this.awernes++;
        }
      }, 300);
      const interval4 = setInterval(() => {
        if (this.traffic <= 729) {
          this.traffic += 10;
        }
      }, 15);
      this.done = true;
    }

  }
}
