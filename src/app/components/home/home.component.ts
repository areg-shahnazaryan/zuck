import { Component, OnInit } from '@angular/core';
import {fromEvent, Observable} from "rxjs";
import {debounceTime, distinctUntilChanged, map, startWith} from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  menuWidth: number;
  contentWidth: number;
  openedMenuWidth: number;
  openedContentWidth: number;
  constructor() { }

  ngOnInit() {
    // fromEvent(window, 'resize')
    //   .pipe(
    //     debounceTime(200),
    //     map(() => window.innerWidth),
    //     distinctUntilChanged(),
    //     startWith(window.innerWidth),
    //   ).subscribe(width => {
    //     this.menuWidth = (width * 81) / 100;
    //     this.videoHeight = (this.videoWidth * 9) / 16;
    //   });
  }
}
