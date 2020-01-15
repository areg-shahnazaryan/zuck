import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-vacancy',
  templateUrl: './copywriter.component.html',
  styleUrls: ['./copywriter.component.scss']
})
export class CopywriterComponent implements OnInit {
  public screenSize = window.innerWidth;

  constructor(public  router: Router) { }

  ngOnInit() {
  }

}
