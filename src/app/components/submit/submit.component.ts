import {Component} from '@angular/core';
import {Options, LabelType} from 'ng5-slider';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-order',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss']
})
export class SubmitComponent {
  strategy = 'order-type';
  integrated = 'order-type';
  digital = 'order-type';
  video = 'order-type';
  visual = 'order-type';
  nonStandard = 'order-type';
  required = false;
  orderTypes = [];


  constructor(
    private formBuilder: FormBuilder,
    private route: Router
  ) {
    this.submitForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required]),
      surname: this.formBuilder.control('', [Validators.required]),
      minValue: this.formBuilder.control(''),
      maxValue: this.formBuilder.control(''),
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      phoneNumber: this.formBuilder.control(''),
      motivation: this.formBuilder.control(''),
      link: this.formBuilder.control('', [Validators.required]),
      fileCv: this.formBuilder.control(''),
      portfolio: this.formBuilder.control('', [Validators.required]),
      filePortfolio: this.formBuilder.control(''),
    });
  }

  submitForm: FormGroup;
  minValue = 100;
  maxValue = 400;
  options: Options = {
    floor: 0,
    ceil: 500,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return `<b>Min price:</b> ${value}k`;
        case LabelType.High:
          return `<b>Max price:</b> ${value}k`;
        default:
          return `${value}k`;
      }
    }
  };

  typeButtons(type) {
    switch (type) {
      case 'strategy':
        if (this.strategy === 'order-type') {
          this.strategy = 'order-type-focused';
          this.orderTypes.push('strategy');
          this.required = false;
        } else {
          this.strategy = 'order-type';
          for (let u = 0; u < this.orderTypes.length; u++) {
            if (this.orderTypes[u] === 'strategy') {
              this.orderTypes.splice(u);
            }
          }
        }
        break;
      case 'integrated':
        if (this.integrated === 'order-type') {
          this.integrated = 'order-type-focused';
          this.orderTypes.push('integrated');
          this.required = false;

        } else {
          this.integrated = 'order-type';
          for (let u = 0; u < this.orderTypes.length; u++) {
            if (this.orderTypes[u] === 'integrated') {
              this.orderTypes.splice(u);
            }
          }
        }
        break;
      case 'digital':
        if (this.digital === 'order-type') {
          this.digital = 'order-type-focused';
          this.orderTypes.push('digital');
          this.required = false;

        } else {
          this.digital = 'order-type';
          for (let u = 0; u < this.orderTypes.length; u++) {
            if (this.orderTypes[u] === 'digital') {
              this.orderTypes.splice(u);
            }
          }
        }
        break;
      case 'video':
        if (this.video === 'order-type') {
          this.video = 'order-type-focused';
          this.orderTypes.push('video');
          this.required = false;

        } else {
          this.video = 'order-type';
          for (let u = 0; u < this.orderTypes.length; u++) {
            if (this.orderTypes[u] === 'video') {
              this.orderTypes.splice(u);
            }
          }
        }
        break;
      case 'visual':
        if (this.visual === 'order-type') {
          this.visual = 'order-type-focused';
          this.orderTypes.push('visual');
          this.required = false;

        } else {
          this.visual = 'order-type';
          for (let u = 0; u < this.orderTypes.length; u++) {
            if (this.orderTypes[u] === 'visual') {
              this.orderTypes.splice(u);
            }
          }
        }
        break;
      case 'non-standard':
        if (this.nonStandard === 'order-type') {
          this.nonStandard = 'order-type-focused';
          this.orderTypes.push('non-standard');
          this.required = false;

        } else {
          this.nonStandard = 'order-type';
          for (let u = 0; u < this.orderTypes.length; u++) {
            if (this.orderTypes[u] === 'non-standard') {
              this.orderTypes.splice(u);
            }
          }
        }
        break;
      default:
        break;
    }
  }

  submit() {
    this.route.navigateByUrl('good-luck');
  }
}
