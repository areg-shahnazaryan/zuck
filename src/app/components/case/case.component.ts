import {
  Component,
  HostListener,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy
} from '@angular/core';
import Player from '@vimeo/player';
import {fromEvent, Observable, Subscription} from "rxjs";
import {debounceTime, distinctUntilChanged, map, startWith} from "rxjs/operators";

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.scss']
})
export class CaseComponent implements OnInit, OnDestroy {

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

  @ViewChild('iframe', {static: true}) iframe: ElementRef;

  @HostListener('window:scroll', ['$event'])
  scrollMe(event) {
    this.scrollEll = document.getElementById('counting');
    let coords = (this.scrollEll.getBoundingClientRect().top + window.scrollY) - 520;
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
        this.videoWidth = (width * 80) / 100;
        console.log(width, this.videoWidth);
        this.videoHeight = (this.videoWidth * 9) / 16;
        this.screenSize = width;
      });
  }

  ngOnDestroy(): void {
    this.resize$.unsubscribe();
  }

  counting() {
    if (!this.done) {
      let interval1 = setInterval(() => {
        if (this.expressions <= 729) {
          this.expressions += 10;
        }
      }, 15);
      let interval2 = setInterval(() => {
        if (this.contacts <= 57) {
          this.contacts++;
        }
      }, 25);
      let interval3 = setInterval(() => {
        if (this.awernes <= 2) {
          this.awernes++;
        }
      }, 300);
      let interval4 = setInterval(() => {
        if (this.traffic <= 729) {
          this.traffic += 10;
        }
      }, 15);
      this.done = true;
    }

  }
}
