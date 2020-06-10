import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Options, LabelType} from 'ng5-slider';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {SubmitService} from '@app/services/submit.service';


@Component({
  selector: 'app-order',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss']
})
export class SubmitComponent implements OnInit {
  strategy = 'order-type';
  integrated = 'order-type';
  digital = 'order-type';
  video = 'order-type';
  visual = 'order-type';
  nonStandard = 'order-type';
  required = false;
  orderTypes = [];
  @ViewChild('form', {static: false}) form: ElementRef;
  @ViewChild('portfolio', {static: false}) portfolio: ElementRef;
  @ViewChild('cv', {static: false}) cv: ElementRef;

  workButtons = [{
    position: 'graphic designer',
    focused: false
    }, {
      position: 'graphic designer intern',
      focused: false
    }, {
      position: 'copywriter',
      focused: false
    }, {
      position: 'account/project manager',
      focused: false
    }];
  showPortfolio = false;
  myParam: string;
  showInvalids = false;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private submitService: SubmitService
  ) {
    this.submitForm = this.formBuilder.group({
      NAME: this.formBuilder.control('', [Validators.required]),
      LAST_NAME: this.formBuilder.control('', [Validators.required]),
      minValue: this.formBuilder.control(''),
      maxValue: this.formBuilder.control(''),
      salary: this.formBuilder.control(''),
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      phoneNumber: this.formBuilder.control(''),
      motivation: this.formBuilder.control(''),
      fileCv: this.formBuilder.control(''),
      link: this.formBuilder.control('', [Validators.required]),
      portfolio: this.formBuilder.control('', [Validators.required]),
      filePortfolio: this.formBuilder.control(''),
    });
  }

  submitForm: FormGroup;

  ngOnInit() {
    if (this.submitService.vacancy) {
      this.typeButtons(this.submitService.vacancy);
    }
  }
  ngAfterViewInit() {
    if (this.portfolio) {
      this.portfolio.nativeElement.querySelector('.mat-form-field-label').innerHTML += ` (<span style="font-style: italic;vertical-align: middle;font-size: 12px">attach or put the link</span>)*`;
    }
     
    if (this.cv) {
      this.cv.nativeElement.querySelector('.mat-form-field-label').innerHTML += ` (<span style="font-style: italic;vertical-align: middle;font-size: 12px">attach or put the link</span>)*`;
    }
  }

  change() {
  }

  typeButtons(type) {
    if (type === 'graphic designer') {
      setTimeout(() => {
        if (!this.portfolio.nativeElement.querySelector('.mat-form-field-label').innerHTML.includes('attach or put')) {
          this.portfolio.nativeElement.querySelector('.mat-form-field-label').innerHTML += ` (<span style="font-style: italic;vertical-align: middle;font-size: 12px">attach or put the link</span>)*`;
        }
      }, 0);
    }
    this.workButtons.map((work) => {
      work.focused = type === work.position;
    });
    this.showPortfolio = type === 'graphic designer';
  }

  submit() {
    console.log(this.submitForm.value);
    
    this.submitService.createOrder('crm.contact.add.json', {
      fields : {
        NAME: this.submitForm.value.NAME,
        LAST_NAME: this.submitForm.value.LAST_NAME,
        ASSIGNED_BY_ID: 7,
        TYPE_ID: "6",
        PHONE: [{VALUE: this.submitForm.value.phoneNumber}],
        EMAIL: [{VALUE: this.submitForm.value.email}]
    }
    }).subscribe((d) => {
      if(d) {
        console.log(d);
        
        this.submitService.createOrder('crm.deal.add.json', {
        
        fields: {
          ASSIGNED_BY_ID: 7,
          CATEGORY_ID: 14, // constant, do not change this
          CONTACT_ID: d.result, // contact
          UF_CRM_1591697316433: this.submitForm.value.fileCv, // CV file
          UF_CRM_1591706894044: this.submitForm.value.link, // CV url
          UF_CRM_1591707047362: this.submitForm.value.filePortfolio, // portfolio file
          UF_CRM_1591707161705: this.submitForm.value.portfolio, // portfolio link
          UF_CRM_1591697306010: this.submitForm.value.motivation, // Motivation letter
          UF_CRM_1591697181410: this.submitForm.value.salary, // Expected salary
          UF_CRM_1591697129292: "160" // submit type
        }
        
        }).subscribe((data) => {
          console.log(data);
        })
      }
    });
    this.showInvalids = true;
    let scrolltoTop: number;
    window.innerWidth <= 992 ? scrolltoTop = this.form.nativeElement.offsetTop - 81 : scrolltoTop = this.form.nativeElement.offsetTop;
    if (this.submitForm.valid) {
      this.router.navigateByUrl('good-luck');
    } else {
      window.scroll({
        top: scrolltoTop,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}
