import {AfterViewInit, Component, OnInit} from '@angular/core';
import {fromEvent, Observable, of} from 'rxjs';
import {debounceTime, delay, distinctUntilChanged, map, mapTo, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit, AfterViewInit {
  tiltSettings = {
    reverse: false,
    max: 20,
    startX: 0,
    startY: 0,
    perspective: 2000,
    speed: 10000
  };
  resize$: Observable<any>;

  bigTiltSettings = {
    reverse: false,
    max: 20,
    startX: 0,
    startY: 0,
    perspective: 5000,
    speed: 10000
  };
  screenSize: number;
  isActive1 = true;
  isActive2 = false;
  isActive3 = false;
  isActive4 = false;
  isActive5 = false;
  isActive6 = false;
  isActive7 = false;
  elemObservable = of('auto');
  elemHeight = 'auto;'
  array = [
    {
      src: '../../../assets/cases/Dobry/Case_Cover.png',
      type: 'strategy',
      routerLink: 'dobriy',
      companyName: 'Добрый',
      projectName: 'Annual Social Media Promotion <br> for Добрый',
      id: 'elemHeight'
    },
    {
      src: '../../../assets/cases/Coke/Case_Cover.png',
      type: 'strategy',
      routerLink: 'coca-cola',
      companyName: 'Coca-Cola HBC',
      projectName: 'Annual Social Media Promotion for Coca-Cola HBC'
    },
    {
      src: '../../../assets/cases/Qit/Case_Cover.png',
      type: 'design',
      routerLink: 'qit',
      companyName: 'QIT.AM',
      projectName: 'Integrated Campaign for QIT.AM and <br> Dr. Gevorg Yeghiazaryan'
    },
    {
      src: '../../../assets/cases/Beeline/Case_Cover.png',
      type: 'non-standard',
      routerLink: 'beeline',
      companyName: 'Beeline',
      projectName: 'Outdoor Campaign for Beeline'
    },
    {
      src: '../../../assets/cases/Acba/Case_Cover.png',
      type: 'integrated',
      routerLink: 'acba',
      companyName: 'ACBA-CREDIT AGRICOLE BANK',
      projectName: 'Integrated Campaign for <br> ACBA-CREDIT AGRICOLE BANK'
    },
    {
      src: '../../../assets/cases/Gyumri/Case_Cover.png',
      type: 'digital',
      routerLink: 'gyumri',
      companyName: 'Gyumri Beer',
      projectName: 'Car Branding for Gyumri Beer'
    },
    {
      src: '../../../assets/cases/Dobry TVC/Case_Cover.png',
      type: 'digital',
      routerLink: 'dobriy-tv',
      companyName: 'Добрый',
      projectName: 'TV Commercial for Добрый'
    }
  ];
  filterargs: any;


  constructor() {
  }

  ngOnInit() {

    this.resize$ = fromEvent(window, 'resize')
      .pipe(
        debounceTime(200),
        map(() => window.innerWidth),
        distinctUntilChanged(),
        startWith(window.innerWidth),
      );

    this.resize$.subscribe(width => {
      this.screenSize = width;
    });
  }

  ngAfterViewInit() {
    const elem = document.getElementById('elemHeight') as HTMLElement;
    this.elemObservable.pipe(mapTo(`${elem.offsetHeight}px`), delay(0)).subscribe(data => {
      this.elemHeight = data;
    });
  }

  /*toggle(type) {
    switch (type) {
      case 'all':
        this.isActive1 = true;
        this.isActive2 = false;
        this.isActive3 = false;
        this.isActive4 = false;
        this.isActive5 = false;
        this.isActive6 = false;
        this.isActive7 = false;
        this.filterargs = 'all';
        break;
      case 'strategy':
        this.isActive1 = false;
        this.isActive2 = !this.isActive2;
        this.isActive3 = false;
        this.isActive4 = false;
        this.isActive5 = false;
        this.isActive6 = false;
        this.isActive7 = false;
        this.filterargs = 'strategy';
        break;
      case 'design':
        this.isActive1 = false;
        this.isActive2 = false;
        this.isActive3 = !this.isActive3;
        this.isActive4 = false;
        this.isActive5 = false;
        this.isActive6 = false;
        this.isActive7 = false;
        this.filterargs = 'design';
        break;
      case 'video':
        this.isActive1 = false;
        this.isActive2 = false;
        this.isActive3 = false;
        this.isActive4 = !this.isActive4;
        this.isActive5 = false;
        this.isActive6 = false;
        this.isActive7 = false;
        this.filterargs = 'video';
        break;
      case 'digital':
        this.isActive1 = false;
        this.isActive2 = false;
        this.isActive3 = false;
        this.isActive4 = false;
        this.isActive5 = !this.isActive5;
        this.isActive6 = false;
        this.isActive7 = false;
        this.filterargs = 'digital';
        break;
      case 'integrated':
        this.isActive1 = false;
        this.isActive2 = false;
        this.isActive3 = false;
        this.isActive4 = false;
        this.isActive5 = false;
        this.isActive6 = !this.isActive6;
        this.isActive7 = false;
        this.filterargs = 'integrated';
        break;
      case 'non-standard':
        this.isActive1 = false;
        this.isActive2 = false;
        this.isActive3 = false;
        this.isActive4 = false;
        this.isActive5 = false;
        this.isActive6 = false;
        this.isActive7 = !this.isActive7;
        this.filterargs = 'non-standard';
        break;
    }
    if (this.isActive2 === false &&
      this.isActive3 === false &&
      this.isActive4 === false &&
      this.isActive5 === false &&
      this.isActive6 === false &&
      this.isActive7 === false) {
      this.filterargs = 'all';
      // this.newArray = this.array;
      this.isActive1 = true;
    }
  }*/


  deleteImage(type) {
    // this.array.filter(value => value.type === type);
    // console.log(this.array);
  }

}
