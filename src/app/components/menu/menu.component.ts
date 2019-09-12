import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public menuToggle = false;
  public menuClass = 'hamburger hamburger--3dy';
  public menuStyle = 'menu-bar';
  public contentStyle = 'content';
  public logo2 = 'logo2';
  public menuContent1 = 'menu-items';
  public menuContent2 = 'contact-items';

  constructor(public  router: Router) { }

  ngOnInit() {
  }

  toggle() {
    this.menuToggle = !this.menuToggle;
    if (this.menuToggle === false) {
      this.menuClass = 'hamburger hamburger--3dy';
      this.contentStyle = 'content';
      this.menuStyle = 'menu-bar';
      this.logo2 = 'logo2';
      this.menuContent1 = 'menu-items';
      this.menuContent2 = 'contact-items';
    } else {
      this.menuClass = 'hamburger hamburger--3dy is-active';
      this.contentStyle = 'opened-menu-content';
      this.menuStyle = 'opened-menu';
      this.logo2 = 'logo2 opened-logo'
      this.menuContent1 = 'opened-logo menu-items';
      this.menuContent2 = 'opened-logo contact-items';
    }
  }
}