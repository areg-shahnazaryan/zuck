import {Component, OnInit, OnDestroy} from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';
import { debounceTime, map, distinctUntilChanged, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-good-luck',
  templateUrl: './good-luck.component.html',
  styleUrls: ['./good-luck.component.scss']
})
export class GoodLuckComponent implements OnInit, OnDestroy {
  screenSize = window.innerWidth;
  resize$: Subscription;
  constructor() { }

  ngOnInit() {
    this.resize$ = fromEvent(window, 'resize')
      .pipe(
        debounceTime(200),
        map(() => window.innerWidth),
        distinctUntilChanged(),
        startWith(window.innerWidth),
      ).subscribe(width => {
      this.screenSize = width;
    });
  }

  ngOnDestroy() {
    this.resize$.unsubscribe();
  }

}
