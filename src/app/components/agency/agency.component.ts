import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.scss']
})
export class AgencyComponent implements OnInit {
  public firstRow = ['../../../assets/agencyAssets/download.png', '../../../assets/agencyAssets/dobro1.png',
    '../../../assets/agencyAssets/logoiqosblack.png', '../../../assets/agencyAssets/beeLinelogo.png',
    '../../../assets/agencyAssets/rich1.png', '../../../assets/agencyAssets/image51.png',
    '../../../assets/agencyAssets/logo.svg'
  ];
  public secondRow = ['../../../assets/agencyAssets/image49.png', '../../../assets/agencyAssets/logo.svg',
    '../../../assets/agencyAssets/image44.png', '../../../assets/agencyAssets/image28.png',
    '../../../assets/agencyAssets/image30.png', '../../../assets/agencyAssets/image44.png',
    '../../../assets/agencyAssets/rich1.png'
  ];
  public thirdRow = ['../../../assets/agencyAssets/download.png', '../../../assets/agencyAssets/dobro1.png',
    '../../../assets/agencyAssets/logoiqosblack.png', '../../../assets/agencyAssets/beeLinelogo.png',
    '../../../assets/agencyAssets/image28.png', '../../../assets/agencyAssets/logo.svg',
    '../../../assets/agencyAssets/image49.png'
  ];
  public fourthRow = ['../../../assets/agencyAssets/image49.png', '../../../assets/agencyAssets/logo.svg',
    '../../../assets/agencyAssets/image28.png', '../../../assets/agencyAssets/image44.png',
    '../../../assets/agencyAssets/image30.png'];

  public screenSize = window.innerWidth;
  constructor() { }

  ngOnInit() {
    if (this.screenSize <= 1799 && this.screenSize > 1542) {
      this.firstRow.length = 6;
      this.secondRow.length = 6;
      this.thirdRow.length = 6;
    }
    if (this.screenSize <= 1543 && this.screenSize > 1303) {
      this.firstRow.length = 5;
      this.secondRow.length = 5;
      this.thirdRow.length = 5;
    }
    if (this.screenSize <= 1302 && this.screenSize > 1045) {
      this.firstRow.length = 4;
      this.secondRow.length = 4;
      this.thirdRow.length = 4;
    }
    if (this.screenSize <= 1045 && this.screenSize > 992) {
      this.firstRow.length = 3;
      this.secondRow.length = 3;
      this.thirdRow.length = 3;
    }
  }

}
