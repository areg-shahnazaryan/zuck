import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {fromEvent, interval, Observable, of, Subscription} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, startWith, take, timeout} from 'rxjs/operators';
import {NguCarousel, NguCarouselConfig} from '@ngu/carousel';
import {Params, Router} from '@angular/router';
import {SubmitService} from '@app/services/submit.service';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AgencyComponent implements OnInit, AfterViewInit, OnDestroy {
  firstRow = ['../../../assets/Logos/logo_undp.svg', '../../../assets/Logos/logo_pmi.svg',
    '../../../assets/Logos/logo_amundi.svg', '../../../assets/Logos/logo_IQOS.svg', '../../../assets/Logos/logo_beeline.svg'
  ];

  secondRow = ['../../../assets/Logos/logo_Dobry.svg', '../../../assets/Logos/logo_mikro_Kapital.svg', '../../../assets/Logos/logo_Nabu.svg',
    '../../../assets/Logos/logo_Coca_Cola.svg', '../../../assets/Logos/logo_Burn.svg'
  ];

  thirdRow = ['../../../assets/Logos/logo_moe.svg', '../../../assets/Logos/logo_Acba.svg', '../../../assets/Logos/logo_gyumri.svg',
    '../../../assets/Logos/logo_qit.am.svg', '../../../assets/Logos/logo_armenia_wine.svg'
  ];

  showMore = false;
  currentItem: number;

  carouselTileItems$: Observable<any[]>;


  carouselConfig: NguCarouselConfig = {
    grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
    load: 3,
    loop: false,
    speed: 1000,
    touch: true,
    velocity: 0.2
  };
  secondCarouselConfigMobile: NguCarouselConfig = {
    grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
    loop: true,
    touch: true,
    interval: {
      timing: 3000
    },
  };

  secondCarouselConfig: NguCarouselConfig = {
    grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
    load: 20,
    loop: true,
    velocity: 2,
    touch: false,
    interval: {
      timing: 3000
    },
  };

  firstCarouselItems = [{
    img: '../../../assets/reviews/3.png',
    text: 'If I try to describe our work with Zuck, I’ll have to be very emotional. Crazy interesting. Crazy creative.' +
      ' Abnormally effective. Me personally, and all of our team, enjoy the collaboration and definitely learn a lot. As for all the' +
      ' funny accidents, I’ll just say “March 30 and 31” - they know what I mean.',
    company: 'ACBA Credit Agricole Bank',
    name: 'Artyom Ghazaryan',
    position: 'Head of Marketing Communications',
    shownText: true,
    showMore: false,

  }, {
    img: '../../../assets/reviews/2.png',
    text: 'Zuck&Berg, for me, is first of all an amazing group of people with a “let’s shoot for the stars\' attitude. The team’s endless' +
      ' creativity and daring passion empowers us to clearly convey our brand promise and communicate our care to our consumers.',
    company: 'Coca - Cola Happiness Factory',
    name: 'Yesayi Melik-Yolchyan',
    position: 'Operational Marketing and ComEx Manager',
    shownText: true,
    showMore: false,

  }, {
    img: '../../../assets/reviews/5.png',
    text: 'Two years ago I was looking for creatives for an ad campaign. Imagine my surprise when I came across the Armenian agency ' +
      'Zuck&Berg in Zuckerberg’s social network ;) I’ll say right away, I’m still working with them and have never regretted my choice.' +
      'It’s always a pleasure to deal with a knowledgeable, competent and creative team, especially when they have such humor and' +
      ' charisma.',
    company: 'QIT',
    name: 'Gevorg Eghiazaryan',
    shownText: true,
    showMore: false,
    position: 'Plastic Surgeon'
  }, {
    img: '../../../assets/reviews/8.png',
    text: 'Zuck and Berg is a young, creative, innovative and very responsible team that is not afraid of obstacles in their way. They' +
      ' are one of the leaders in their industry.<br> We have worked together for the Dobry Brand for over a year and because of the ' +
      'professional experience, effective strategy and' +
      ' interesting content, we have succeeded in many important metrics for us such as brand love score, social media activity and' +
      ' customer acquisition.We always have productive meetings and are confident that any presented idea will turn into a creative' +
      ' solution.<br> We highly value their great communication skills and the ability to deliver whatever they promise.' +
      'It’s clear that our success is their top priority.' +
      'We are very happy that we work with such professionals.” <br>' +
      'PS. these words are from the bottom of my heart :) <br>',
    company: 'Dobry Armenia',
    name: 'Nona Ayvazyan',
    shownText: true,
    showMore: false,
    position: 'Marketing Specialist'
  }, {
    img: '../../../assets/reviews/4.png',
    text: 'Give them the brief and they will move the world Happy to have worked with Zuck (that’s what I call them). Super professional,' +
      ' Super talented, super punctual. An agency that never says never and always finds solutions.Being on the agency side they manage' +
      ' to become a part of the team, dive into your strategy and give solutions. Would highly recommend these guys.',
    name: 'Ani Mkrtchyan',
    company: 'PMI',
    shownText: true,
    showMore: false,
    position: 'Digital Marketing Team Lead'
  }, {
    img: '../../../assets/reviews/6.png',
    text: 'Our partnership with Zuck is hard to call a working process. Work beautifies a person, but our partnership not only ' +
      'beautifies, but also develops and motivates us.\n' +
      'One more thing - don’t make hopes that Zuck will tell you how to do your business. You need to figure out yourself what you want' +
      ' from these supernatural people, so that they create the right solution for your problem.\n' +
      'If you’re lucky enough to find yourself “one one wave” with them, the partnership isn’t just pleasant - it’s fantastically' +
      ' effective.',
    company: 'MikroKapital',
    name: 'Khachik Nerkararyan',
    shownText: true,
    showMore: false,
    position: 'CEO'
  }, {
    img: '../../../assets/reviews/1.png',
    text: 'I had the luck to work with one of the most creative teams in town - Zuck&Berg. They are always focused on delivering the best' +
      ' experience with every implemented project. They are making the local agency sphere more colorful and crazy. \'The craziness\' and' +
      ' soul they put into every initiative lets you be confident in any brief given to Zuck&Berg.',
    name: 'Anna Zohrabyan',
    company: 'Coca - Cola Happiness Factory',
    shownText: true,
    showMore: false,
    position: 'Trade Marketing Expert'
  }, {
    img: '../../../assets/reviews/7.png',
    text: 'If you need something like a mind-reader like in the movie “What women want”, you already know who got that magic power. It’s' +
      ' really a pleasure to cooperate with Z&B. What is also noteworthy, these guys just naturally marry any cloudy idea with local' +
      ' reality, which is fantastic🙏',
    name: 'Lilit Matevosyan',
    company: 'PMI',
    shownText: true,
    showMore: false,
    position: 'Head of Marketing'
  }];

  secondCarouselItems = [
    '../../../assets/agencyAssets/carousel-images/1.jpg', '../../../assets/agencyAssets/carousel-images/2.jpg',
    '../../../assets/agencyAssets/carousel-images/3.jpg', '../../../assets/agencyAssets/carousel-images/4.jpg',
    '../../../assets/agencyAssets/carousel-images/5.jpg', '../../../assets/agencyAssets/carousel-images/6.jpg',
    '../../../assets/agencyAssets/carousel-images/7.jpg', '../../../assets/agencyAssets/carousel-images/8.jpg',
    '../../../assets/agencyAssets/carousel-images/9.jpg', '../../../assets/agencyAssets/carousel-images/10.jpg',
    '../../../assets/agencyAssets/carousel-images/11.jpg', '../../../assets/agencyAssets/carousel-images/12.jpg',
    '../../../assets/agencyAssets/carousel-images/13.jpg', '../../../assets/agencyAssets/carousel-images/14.jpg',
    '../../../assets/agencyAssets/carousel-images/15.jpg', '../../../assets/agencyAssets/carousel-images/16.jpg'
  ];
  resize$: Subscription;
  screenSize: number;
  @ViewChild('firstCarousel', {static: false}) firstcarousel: NguCarousel<any>;
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
    if (!this.firstCarouselItems[i].shownText) {
      this.elementRef.nativeElement.querySelector('.first-carousel')
        .getElementsByClassName('item')[i].querySelector('.shown-text').innerHTML = this.firstCarouselItems[i].text;
    } else {
      this.removeWord(i);
    }
    // this.firstCarouselItems[i].shownText = !this.firstCarouselItems[i].shownText;
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
    this.removeWord();
  }

  removeWord(i?) {
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

  }

  removeOneWord(i, image) {
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
  }


  ngOnDestroy() {
    this.resize$.unsubscribe();
  }
}
