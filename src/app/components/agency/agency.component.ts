import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { fromEvent, interval, Observable, of, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith, take, timeout } from 'rxjs/operators';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';
import { Params, Router } from '@angular/router';
import { SubmitService } from '@app/services/submit.service';
import { AgencyFiles } from '@agency/agency-files';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AgencyComponent implements OnInit, AfterViewInit, OnDestroy {

  partners = AgencyFiles.partners;
  mobilePartners = AgencyFiles.mobilePartners;

  showMore = false;
  currentItem: number;

  carouselTileItems$: Observable<any[]>;


  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    load: 3,
    loop: false,
    speed: 1000,
    touch: true,
    velocity: 0.2
  };
  secondCarouselConfigMobile: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    loop: true,
    touch: true,
    interval: {
      timing: 3000
    },
  };

  secondCarouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    load: 20,
    loop: true,
    velocity: 2,
    touch: false,
    interval: {
      timing: 3000
    },
  };

  slides = [
    {img: "https://via.placeholder.com/600/92c952"},
    {img: "https://via.placeholder.com/600/771796"},
    {img: "https://via.placeholder.com/600/d32776"},
    {img: "https://via.placeholder.com/600/f66b97"}
  ];

  mobileSlideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 3000
  }

  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "dots": true,
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 3000
};

  firstCarouselItems = AgencyFiles.firstCarouselItems;
  mobileFirstCarouselItems = AgencyFiles.mobileFirstCarousel;

  secondCarouselItems = AgencyFiles.secondCarouselItems;
  mobileSecondCarouselItems = AgencyFiles.mobileSecondCarouselItems;

  resize$: Subscription;
  screenSize: number;
  @ViewChild('firstCarousel', { static: false }) firstcarousel: NguCarousel<any>;
  @ViewChild('firstCarouselMobile', { static: false }) firstCarouselMobile: ElementRef<any>;
  showText = false;

  constructor(private cdr: ChangeDetectorRef, private router: Router, private elementRef: ElementRef,
    private submitService: SubmitService) {
  }

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

  goToSubmit(work) {
    this.submitService.vacancy = work;
    this.router.navigateByUrl('submit');
  }

  closeTexts(e) {
    this.firstCarouselItems.map((item, index) => {
      if (e.currentSlide !== index) {
        item.shownText = true;
        this.carouselContent(index);
      }
    });
  }

  move(i) {
    this.firstcarousel.moveTo(i, true);
  }

  carouselContent(i) {
    this.currentItem = i;

    if (this.screenSize >= 992) {
      if (!this.firstCarouselItems[i].shownText) {
          this.elementRef.nativeElement.querySelector('.first-carousel')
            .getElementsByClassName('item')[i].querySelector('.shown-text').innerHTML = this.firstCarouselItems[i].text;
      } else {
        this.removeWord(i);
      }
    } else {
      if (!this.mobileFirstCarouselItems[i].shownText) {
          this.firstCarouselMobile.nativeElement.getElementsByClassName('review')[i]
            .querySelector('.content-text').innerHTML = this.mobileFirstCarouselItems[i].text;
          this.mobileFirstCarouselItems.forEach((rev , index) => {
            if (index !== i) {
              rev.shownText = true;
              this.removeWord(index);
            }
          })
      } else {
        this.removeWord(i);
      }
    }
  }


  ngAfterViewInit() {
    this.cdr.detectChanges();
    this.removeWord();
  }

  removeWord(i?) {
    if (this.screenSize >= 992) {
      if (i !== undefined) {
        let image = this.elementRef.nativeElement.querySelector('.first-carousel')
          .getElementsByClassName('item')[i].querySelector('.image').offsetHeight;
        let item = this.elementRef.nativeElement.querySelector('.first-carousel')
          .getElementsByClassName('item')[i].offsetHeight;
        if (item > image) {
          this.removeOneWord(i, image);
        }
      } else {
        for (let i = 0; i < this.firstCarouselItems.length; i++) {
          let checkInterval = interval(500).subscribe(() => {
            let item = this.elementRef.nativeElement.querySelector('.first-carousel')
              .getElementsByClassName('item')[i].offsetHeight;
            let image = this.elementRef.nativeElement.querySelector('.first-carousel')
              .getElementsByClassName('item')[i].querySelector('.image').offsetHeight;
            if (image > 50) {
              checkInterval.unsubscribe();
              if (item > image) {
                this.firstCarouselItems[i].showMore = true;
                this.removeOneWord(i, image);
              } else {
                this.firstCarouselItems[i].showMore = false;
              }
            }
          });
        }
      }
    } else {
      if (i !== undefined) {
        let item = this.firstCarouselMobile.nativeElement.getElementsByClassName('review')[i]
          .querySelector('.content-text').offsetHeight;
        let image = this.firstCarouselMobile.nativeElement.getElementsByClassName('review')[0]
          .querySelector('.content-text').offsetHeight;
        if (item > image) {
          this.removeOneWord(i, image);
        }
      } else {
        for (let i = 0; i < this.mobileFirstCarouselItems.length; i++) {
          let checkInterval = interval(500).subscribe(() => {
            let item = this.firstCarouselMobile.nativeElement.getElementsByClassName('review')[i]
              .querySelector('.content-text').offsetHeight;
            let image = this.firstCarouselMobile.nativeElement.getElementsByClassName('review')[0]
              .querySelector('.content-text').offsetHeight;
            if (item > 50) {
              checkInterval.unsubscribe();
              if (item > image) {
                this.mobileFirstCarouselItems[i].showMore = true;
                this.removeOneWord(i, image);
              } else {
                this.mobileFirstCarouselItems[i].showMore = false;
              }
            }
          });
        }
      }

    }
  }

  removeOneWord(i, image) {
    if (this.screenSize >= 992) {
      let text = this.elementRef.nativeElement.querySelector('.first-carousel')
        .getElementsByClassName('item')[i].querySelector('.shown-text').textContent;
      let res = text.split(' ');
      res.pop();
      res.join(' ');
      this.elementRef.nativeElement.querySelector('.first-carousel')
        .getElementsByClassName('item')[i].querySelector('.shown-text').textContent = res.join(' ');
      let newItemSize = this.elementRef.nativeElement.querySelector('.first-carousel')
        .getElementsByClassName('item')[i].offsetHeight;
      if (newItemSize > image) {
        this.removeOneWord(i, image);
      } else {
        this.elementRef.nativeElement.querySelector('.first-carousel')
          .getElementsByClassName('item')[i].querySelector('.shown-text').textContent += '...';
      }
    } else {
      let text = this.firstCarouselMobile.nativeElement.getElementsByClassName('review')[i]
        .querySelector('.content-text').textContent;
      let res = text.split(' ');
      res.pop();
      res.join(' ');
      this.firstCarouselMobile.nativeElement.getElementsByClassName('review')[i]
        .querySelector('.content-text').textContent = res.join(' ');
      let newItemSize = this.firstCarouselMobile.nativeElement.getElementsByClassName('review')[i]
        .querySelector('.content-text').offsetHeight;
      if (newItemSize > image) {
        this.removeOneWord(i, image);
      } else {
        this.firstCarouselMobile.nativeElement.getElementsByClassName('review')[i]
          .querySelector('.content-text').textContent += '...';
        if (this.firstCarouselMobile.nativeElement.getElementsByClassName('review')[i]
          .querySelector('.content-text').offsetHeight > image) {
          this.removeOneWord(i, image);
        }
      }
    }
  }




  
  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }



  ngOnDestroy() {
    this.resize$.unsubscribe();
  }
}
