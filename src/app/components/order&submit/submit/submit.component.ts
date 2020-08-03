import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Options, LabelType} from 'ng5-slider';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {SubmitService} from '@app/services/submit.service';


@Component({
  selector: 'app-order',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss']
})
export class SubmitComponent implements OnInit, AfterViewInit {
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
    focused: false,
    id: '166'
  }, {
    position: 'graphic designer intern',
    focused: false,
    id: '168'
  }, {
    position: 'copywriter',
    focused: false,
    id: '170'
  }, {
    position: 'account/project manager',
    focused: false,
    id: '172'
  }];
  showPortfolio = false;
  fileAttached1 = '';
  fileAttached2 = '';
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
      link: this.formBuilder.control(null, [Validators.required]),
      portfolio: this.formBuilder.control(null),
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


  typeButtons(type) {

    if (type === 'graphic designer') {
      this.submitForm.controls['portfolio'].setValidators([Validators.required]);
      this.submitForm.controls['portfolio'].updateValueAndValidity();
      setTimeout(() => {
        if (!this.portfolio.nativeElement.querySelector('.mat-form-field-label').innerHTML.includes('attach or put')) {
          this.portfolio.nativeElement.querySelector('.mat-form-field-label').innerHTML += ` (<span style="font-style: italic;vertical-align: middle;font-size: 12px">attach or put the link</span>)*`;
        }
      }, 0);
    } else {
      this.submitForm.controls['portfolio'].setValidators([]);
      this.submitForm.controls['portfolio'].updateValueAndValidity();
    }
    this.workButtons.map((work) => {
      work.focused = type === work.position;
    });
    this.showPortfolio = type === 'graphic designer';
  }

  onFileChange($event, controlname) {

    let file = $event.target.files[0]; // <--- File Object for future use.

    let base64Value = '';
    let myReader: FileReader = new FileReader();


    myReader.onloadend = (e) => {
      let result: any = myReader.result;
      base64Value = result.replace('data:application/pdf;base64,', '');
      this.submitForm.controls[controlname].setValue(file ? base64Value : ''); // <-- Set Value for Validation
      if (controlname === 'filePortfolio') {
        this.fileAttached2 = 'your file attached';
      } else {
        this.fileAttached1 = 'your file attached';
      }
    };
    myReader.readAsDataURL(file);
    // this.submitForm.controls[controlname].setValue(file ? file.name : ''); // <-- Set Value for Validation
  }

  submit() {

    let focused: any;
    this.workButtons.forEach(button => {
      if (button.focused) {
        focused = button;
      }
    });

    if (this.submitForm.controls['fileCv']) {
      this.showInvalids = true;
    }
    let scrolltoTop: number;
    window.innerWidth <= 992 ? scrolltoTop = this.form.nativeElement.offsetTop - 81 : scrolltoTop = this.form.nativeElement.offsetTop;
    if (this.submitForm.valid) {
      console.log(this.submitForm.value);
      this.submitService.createOrder('crm.contact.add.json', {
        fields: {
          NAME: this.submitForm.value.NAME,
          LAST_NAME: this.submitForm.value.LAST_NAME,
          ASSIGNED_BY_ID: 7,
          TYPE_ID: '6',
          PHONE: [{VALUE: this.submitForm.value.phoneNumber}],
          EMAIL: [{VALUE: this.submitForm.value.email}]
        }
      }).subscribe((d: any) => {
        if (d) {

          this.submitService.createOrder('crm.deal.add.json', {

            fields: {
              ASSIGNED_BY_ID: 7,
              CATEGORY_ID: 14, // constant, do not change this
              CONTACT_ID: d.result, // contact
              UF_CRM_1591697316433:
                  {
                    fileData:  ['CVfile.pdf', this.submitForm.value.fileCv], // CV file
                  },
              UF_CRM_1591706894044: this.submitForm.value.link, // CV url
              UF_CRM_1591707047362:
                {
                  fileData:  ['portfoliofile.pdf', this.submitForm.value.filePortfolio], // CV file
                },

              UF_CRM_1591707161705: this.submitForm.value.portfolio, // portfolio link
              UF_CRM_1591697306010: this.submitForm.value.motivation, // Motivation letter
              UF_CRM_1591697181410: this.submitForm.value.salary, // Expected salary
              UF_CRM_1591697129292: focused.id // submit type
            }

          }).subscribe((data) => {
            this.router.navigateByUrl('good-luck');
          });
        }
      });
    } else {
      window.scroll({
        top: scrolltoTop,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}
