import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  tiltSettings = {
    reverse:                false,
    max:                    20,
    startX:                 0,
    startY:                 0,
    perspective:            2000,
    speed: 10000
  };
  bigTiltSettings = {
    reverse:                false,
    max:                    20,
    startX:                 0,
    startY:                 0,
    perspective:            5000,
    speed: 10000
  };
  constructor() { }

  ngOnInit() {
  }

}
