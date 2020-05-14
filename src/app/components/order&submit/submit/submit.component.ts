import {Component, OnInit} from '@angular/core';
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
      name: this.formBuilder.control('', [Validators.required]),
      surname: this.formBuilder.control('', [Validators.required]),
      minValue: this.formBuilder.control(''),
      maxValue: this.formBuilder.control(''),
      salery: this.formBuilder.control(''),
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

  typeButtons(type) {
    this.workButtons.map((work) => {
      work.focused = type === work.position;
    });
    this.showPortfolio = type === 'graphic designer';
    console.log(this.showPortfolio);

  }

  submit() {
    this.showInvalids = true;
    if (this.submitForm.valid) {
      this.router.navigateByUrl('good-luck');
    } else {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}
