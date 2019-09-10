import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.scss']
})
export class CaseComponent implements OnInit {
  public list = [
    {id: 1, path: '../../../assets/case-assets/Image422x.png'},
    {id: 2, path: '../../../assets/case-assets/Image422x.png'},
    {id: 3, path: '../../../assets/case-assets/Image432x.png'},
    {id: 4, path: '../../../assets/case-assets/Image442x.png'},
    {id: 5, path: '../../../assets/case-assets/Image452x.png'},
  ];

  constructor() { }

  ngOnInit() {
    console.log('case');
  }

  // images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);


}
