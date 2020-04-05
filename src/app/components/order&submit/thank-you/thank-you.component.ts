import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';
import { debounceTime, map, distinctUntilChanged, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit, OnDestroy {
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
