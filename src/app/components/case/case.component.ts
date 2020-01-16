import {Component, HostListener, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import Player from '@vimeo/player';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.scss']
})
export class CaseComponent implements OnInit, AfterViewInit {

  public list;
  public screenSize = window.innerWidth;
  public contacts = 0;
  public expressions = 0;
  public awernes = 0;
  public traffic = 0;
  public done = false;
  public toggle = false;

  @ViewChild('iframe', {static: false}) iframe: ElementRef;

  @HostListener('window:scroll', ['$event'])
  scrollMe(event) {
    const scrollEll: HTMLElement = document.getElementById('counting');
    let coords = (scrollEll.getBoundingClientRect().top + window.scrollY) - 520;
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

  }

  ngAfterViewInit() {

  }

  playVid() {
    if (this.toggle) {
      const player1 = new Player(this.iframe.nativeElement, {'data-vimeo-controls': false});
      player1.play();
    } else {
      const player1 = new Player(this.iframe.nativeElement, {'data-vimeo-controls': false});
      player1.pause();
    }
  }

  counting() {
    if (!this.done) {
      let interval1 = setInterval(() => {
        if (this.expressions <= 729) {
          this.expressions++;
        }
      }, 1);
      let interval2 = setInterval(() => {
        if (this.contacts <= 57) {
          this.contacts++;
        }
      }, 50);
      let interval3 = setInterval(() => {
        if (this.awernes <= 2) {
          this.awernes++;
        }
      }, 500);
      let interval4 = setInterval(() => {
        if (this.traffic <= 729) {
          this.traffic++;
        }
      }, 1);
      this.done = true;
    }

  }
}
