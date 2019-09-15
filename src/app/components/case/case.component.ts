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
            {id: 1, path: '../../../assets/case-assets/Image422x.png'},
            {id: 2, path: '../../../assets/case-assets/Image422x.png'},
            {id: 3, path: '../../../assets/case-assets/Image432x.png'},
            {id: 4, path: '../../../assets/case-assets/Image442x.png'},
            {id: 5, path: '../../../assets/case-assets/Image452x.png'},
          ];
    } else {
        this.list = [
            {id: 1, path: '../../../assets/case-assets/logoMob.svg'},
            {id: 2, path: '../../../assets/case-assets/ImageMob42.png'},
          ];

    }
   }

  ngOnInit() {
  }
}
