import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.scss']
})
export class VacancyComponent implements OnInit {

  constructor(public  router: Router) { }

  ngOnInit() {
    console.log(this.router.url);
  }

}
