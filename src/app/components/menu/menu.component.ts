import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public menuToggle = false;
  public menuClass = 'hamburger hamburger--spin';
  public menuStyle = 'menu-bar';
  public contentStyle = 'content';
  public logo2 = 'logo2';
  public menuContent1 = 'menu-items';
  public menuContent2 = 'contact-items';
  public orderStyle = 'order-button';
  public screenSize = window.innerWidth;

  constructor(public router: Router) { }

  ngOnInit() {
    console.log(window);
  }

  toggle() {
    this.menuToggle = !this.menuToggle;
    if (this.menuToggle === false) {
      this.menuClass = 'hamburger hamburger--spin';
      this.contentStyle = 'content';
      this.menuStyle = 'menu-bar';
      this.logo2 = 'logo2';
      this.menuContent1 = 'menu-items';
      this.menuContent2 = 'contact-items';
      this.orderStyle = 'order-button';
    } else {
      this.menuClass = 'hamburger hamburger--spin is-active';
      this.contentStyle = 'opened-menu-content';
      this.menuStyle = 'opened-menu';
      this.logo2 = 'logo2 opened-logo';
      this.menuContent1 = 'opened-logo menu-items';
      this.menuContent2 = 'opened-logo contact-items';
      this.orderStyle = 'order-button order-button-opened';
    }
  }
}
