import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.scss']
})
export class CaseComponent implements OnInit {

    public list;
    public screenSize = window.innerWidth;



  constructor() {
    if (window.innerWidth > 992 ){
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
}
