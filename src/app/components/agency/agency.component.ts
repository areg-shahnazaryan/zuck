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

  constructor() { }

  ngOnInit() {
  }

}
