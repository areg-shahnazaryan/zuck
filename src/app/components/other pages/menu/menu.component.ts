import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuToggle = false;
  menuClass = 'hamburger hamburger--spin';
  menuStyle = 'menu-bar';
  contentStyle = 'content';
  logo2 = 'logo2';
  menuContent1 = 'menu-items';
  menuContent2 = 'contact-items';
  orderStyle = 'order-button';
  screenSize = window.innerWidth;
  currentUrl = '';
  caseUrls = {
    '/work/beeline': 'Case',
    '/work/dobriy': 'Case',
    '/work/dobriy-tv': 'Case',
    '/work/qit': 'Case',
    '/work/coca-cola': 'Case',
    '/work/case': 'Case',
    '/work/gyumri': 'Case',
    '/work/acba': 'Case',
  };



  constructor(public router: Router, private location: Location) { }

  ngOnInit() {
    if (this.router.url.slice(1, 5) === 'work' && this.router.url.length > 5) {
      this.currentUrl = this.caseUrls[this.router.url];
    }
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // Show loading indicator
        this.menuToggle = false;
        this.toggle();
      }

      if (event instanceof NavigationEnd) {
        // Hide loading indicator
        this.currentUrl = this.caseUrls[event.url];

      }

      if (event instanceof NavigationError) {
        // Hide loading indicator
        // Present error to user
        console.error(event.error);
      }
    });
  }

  toggle() {
    // this.menuToggle = !this.menuToggle;
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
