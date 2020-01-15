import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  tiltSettings = {
    reverse: false,
    max: 20,
    startX: 0,
    startY: 0,
    perspective: 2000,
    speed: 10000
  };
  bigTiltSettings = {
    reverse: false,
    max: 20,
    startX: 0,
    startY: 0,
    perspective: 5000,
    speed: 10000
  };
  public screenSize = window.innerWidth;
  public isActive1 = true;
  public isActive2 = false;
  public isActive3 = false;
  public isActive4 = false;
  public isActive5 = false;
  public isActive6 = false;
  public isActive7 = false;
  public array = [
    {
      src: '../../../assets/workAssets/22x.png',
      type: 'strategy',
      routerLink: 'case'
    },
    {
      src: '../../../assets/workAssets/32x.png',
      type: 'strategy'
    },
    {
      src: '../../../assets/workAssets/Image54@2x.png',
      type: 'design'
    },
    {
      src: '../../../assets/workAssets/AdAgeGatefold2x.png',
      type: 'non-standard'
    },
    {
      src: '../../../assets/workAssets/22x.png',
      type: 'integrated'
    },
    {
      src: '../../../assets/workAssets/32x.png',
      type: 'digital'
    }
  ];
  public newArray = [];
  filterargs: any;


  constructor() {
  }

  ngOnInit() {
    this.newArray = this.array;
  }

  toggle(type) {
    switch (type) {
      case 'all':
        this.isActive1 = true;
        this.isActive2 = false;
        this.isActive3 = false;
        this.isActive4 = false;
        this.isActive5 = false;
        this.isActive6 = false;
        this.isActive7 = false;
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
        break;
      case 'video':
        this.isActive1 = false;
        this.isActive2 = false;
        this.isActive3 = false;
        this.isActive4 = !this.isActive4;
        this.isActive5 = false;
        this.isActive6 = false;
        this.isActive7 = false;
        break;
      case 'digital':
        this.isActive1 = false;
        this.isActive2 = false;
        this.isActive3 = false;
        this.isActive4 = false;
        this.isActive5 = !this.isActive5;
        this.isActive6 = false;
        this.isActive7 = false;
        break;
      case 'integrated':
        this.isActive1 = false;
        this.isActive2 = false;
        this.isActive3 = false;
        this.isActive4 = false;
        this.isActive5 = false;
        this.isActive6 = !this.isActive6;
        this.isActive7 = false;
        break;
      case 'non-standard':
        this.isActive1 = false;
        this.isActive2 = false;
        this.isActive3 = false;
        this.isActive4 = false;
        this.isActive5 = false;
        this.isActive6 = false;
        this.isActive7 = !this.isActive7;
        break;
    }
    if (this.isActive2 === false &&
      this.isActive3 === false &&
      this.isActive4 === false &&
      this.isActive5 === false &&
      this.isActive6 === false &&
      this.isActive7 === false) {
      this.isActive1 = true;
      this.newArray = this.array;
    }
  }

  deleteImage(type) {
    // this.array.filter(value => value.type === type);
    // console.log(this.array);
  }

}
