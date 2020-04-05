import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CaseService {

  bigWorks = [
    {
    src: '../../../assets/cases/Coke/Case_Cover.png',
    routerLink: '/work/coca-cola',
    companyName: 'Coca-Cola HBC',
    projectName: 'Annual Social Media Promotion for Coca-Cola HBC',
    type: 'bigBanner'
  },
    {
      src: '../../../assets/cases/Qit/Case_Cover.png',
      routerLink: '/work/qit',
      companyName: 'QIT.AM',
      projectName: 'Integrated Campaign for QIT.AM and <br> Dr. Gevorg Yeghiazaryan',
      type: 'bigBanner'
    },
    {
      src: '../../../assets/cases/Gyumri/Case_Cover.png',
      routerLink: '/work/gyumri',
      companyName: 'Gyumri Beer',
      projectName: 'Car Branding for Gyumri Beer',
      type: 'bigBanner'
    }
  ];
  smallWorks = [
    {
    src: '../../../assets/cases/Dobry/Case_Cover.png',
    routerLink: '/work/dobriy',
    companyName: 'Добрый',
    projectName: 'Annual Social Media Promotion <br> for Добрый',
    type: 'smallBanner'
  },
    {
      src: '../../../assets/cases/Beeline/Case_Cover.png',
      routerLink: '/work/beeline',
      companyName: 'Beeline',
      projectName: 'Outdoor Campaign for Beeline',
      type: 'smallBanner'
    },
    {
      src: '../../../assets/cases/Acba/Case_Cover.png',
      routerLink: '/work/acba',
      companyName: 'ACBA-CREDIT AGRICOLE BANK',
      projectName: 'Integrated Campaign for <br> ACBA-CREDIT AGRICOLE BANK',
      type: 'smallBanner'
    },
    {
      src: '../../../assets/cases/Dobry TVC/Case_Cover.png',
      routerLink: '/work/dobriy-tv',
      companyName: 'Добрый',
      projectName: 'TV Commercial for Добрый',
      type: 'smallBanner'
    }
  ];

  getOtherWork(currentWork) {
    let smallWorks = this.smallWorks.filter((work) => {
      return work.routerLink !== currentWork;
    });
    let bigWorks = this.bigWorks.filter((work) => {
      return work.routerLink !== currentWork;
    });
    const randomBanners = [];
    const workIndex = Number((Math.random() * 10).toFixed());
    if (workIndex > 4) {
      randomBanners.push(bigWorks[Math.floor(Math.random() * bigWorks.length)]);
      randomBanners.push(smallWorks[Math.floor(Math.random() * smallWorks.length)]);
    } else {
      randomBanners.push(smallWorks[Math.floor(Math.random() * smallWorks.length)]);
      randomBanners.push(bigWorks[Math.floor(Math.random() * bigWorks.length)]);
    }
    return randomBanners;
  }
}
