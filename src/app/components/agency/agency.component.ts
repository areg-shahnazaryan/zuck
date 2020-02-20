import { Component, OnInit } from '@angular/core';
import {fromEvent, Observable} from "rxjs";
import {debounceTime, distinctUntilChanged, map, startWith} from "rxjs/operators";

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.scss']
})
export class AgencyComponent implements OnInit {
  public firstRow = ['../../../assets/agencyAssets/cocacola.svg', '../../../assets/agencyAssets/acba.svg',
    '../../../assets/agencyAssets/armat.svg', '../../../assets/agencyAssets/beeline.svg',
    '../../../assets/agencyAssets/burn.svg', '../../../assets/agencyAssets/beeline.svg'
  ];
  public secondRow = ['../../../assets/agencyAssets/cocacola.svg', '../../../assets/agencyAssets/kara.svg',
    '../../../assets/agencyAssets/kotayk.svg', '../../../assets/agencyAssets/kotayk.svg',
    '../../../assets/agencyAssets/mikrokapital.svg', '../../../assets/agencyAssets/patchi.svg'
  ];
  public thirdRow = ['../../../assets/agencyAssets/kara.svg', '../../../assets/agencyAssets/kara.svg',
    '../../../assets/agencyAssets/kara.svg', '../../../assets/agencyAssets/kara.svg',
    '../../../assets/agencyAssets/kara.svg', '../../../assets/agencyAssets/kara.svg'
  ];
  public fourthRow = ['../../../assets/agencyAssets/image49.png', '../../../assets/agencyAssets/logo.svg',
    '../../../assets/agencyAssets/image28.png', '../../../assets/agencyAssets/image44.png',
    '../../../assets/agencyAssets/image30.png'];

  public resize$: Observable<any>;
  public screenSize: number;
  constructor() { }

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
      if (width <= 1799 && width > 1542) {
        this.firstRow.length = 6;
        this.secondRow.length = 6;
        this.thirdRow.length = 6;
      }
      if (width <= 1543 && width > 1303) {
        this.firstRow.length = 5;
        this.secondRow.length = 5;
        this.thirdRow.length = 5;
      }
      if (width <= 1302 && width > 1045) {
        this.firstRow.length = 4;
        this.secondRow.length = 4;
        this.thirdRow.length = 4;
      }
      if (width <= 1045 && width > 992) {
        this.firstRow.length = 3;
        this.secondRow.length = 3;
        this.thirdRow.length = 3;
      }
    });
  }

}
