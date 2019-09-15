import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zerund',
  templateUrl: './zerund.component.html',
  styleUrls: ['./zerund.component.scss']
})
export class ZerundComponent implements OnInit {
  public screenSize = window.innerWidth;
  constructor() { }

  ngOnInit() {
  }

}
