import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.scss']
})
export class AgencyComponent implements OnInit {
  public firstRow = ['../../../assets/agency-assets/download.png', '../../../assets/agency-assets/dobro1.png',
    '../../../assets/agency-assets/Logo_iqos_black.png', '../../../assets/agency-assets/BeeLine_logo.png',
    '../../../assets/agency-assets/rich1.png', '../../../assets/agency-assets/Image 51.png',
    '../../../assets/agency-assets/logo.svg'
  ];
  public secondRow = ['../../../assets/agency-assets/Image 49.png', '../../../assets/agency-assets/logo.svg',
    '../../../assets/agency-assets/Image 44.png', '../../../assets/agency-assets/Image 28.png',
    '../../../assets/agency-assets/Image 30.png', '../../../assets/agency-assets/Image 44.png',
    '../../../assets/agency-assets/rich1.png'
  ];
  public thirdRow = ['../../../assets/agency-assets/download.png', '../../../assets/agency-assets/dobro1.png',
    '../../../assets/agency-assets/Logo_iqos_black.png', '../../../assets/agency-assets/BeeLine_logo.png',
    '../../../assets/agency-assets/Image 28.png', '../../../assets/agency-assets/logo.svg',
    '../../../assets/agency-assets/Image 49.png'
  ];
  public fourthRow = ['../../../assets/agency-assets/Image 49.png', '../../../assets/agency-assets/logo.svg',
    '../../../assets/agency-assets/Image 28.png', '../../../assets/agency-assets/Image 44.png',
    '../../../assets/agency-assets/Image 30.png'];


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
    console.log(this.firstRow.length, this.secondRow.length, this.thirdRow.length);
  }

}
