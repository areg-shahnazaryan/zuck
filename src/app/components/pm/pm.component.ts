import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-vacancy',
  templateUrl: './pm.component.html',
  styleUrls: ['./pm.component.scss']
})
export class PmComponent implements OnInit {
  public screenSize = window.innerWidth;

  constructor(public  router: Router) { }

  ngOnInit() {
  }

}
