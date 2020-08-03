import { Component, OnInit } from '@angular/core';
import {LabelType, Options} from 'ng5-slider';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SubmitService} from '../../../services/submit.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  strategy = 'order-type';
  integrated = 'order-type';
  digital = 'order-type';
  video = 'order-type';
  visual = 'order-type';
  nonStandard = 'order-type';
  required = false;
  orderTypes = [];
  showInvalids = false;

  options: Options = {
    floor: 100,
    ceil: 5000,
    step: 100,
    translate: (value: number, label: LabelType): string => {
        switch (label) {
          case LabelType.Low:
            if (value <= 999) {
              return `${value}k`;
            } else {
              return `${value / 1000}mln`;
            }
          case LabelType.High:
            if (value <= 999) {
              return `${value}k`;
            } else {
              return `${value / 1000}mln`;
            }
          default:
            if (value <= 999) {
              return `${value}k`;
            } else {
              return `${value / 1000}mln`;
            }
      }
    }
  };

  orderForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private submitService: SubmitService
  ) {
    this.orderForm = this.formBuilder.group({
      companyName: this.formBuilder.control('', [Validators.required]),
      customerName: this.formBuilder.control('', [Validators.required]),
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      phoneNumber: this.formBuilder.control(''),
      aboutProject: this.formBuilder.control('')
    });
  }

  typeButtons(type) {
    switch (type) {
      case 'strategy':
        if (this.strategy === 'order-type') {
          this.strategy = 'order-type-focused';
          this.orderTypes.push({
            NAME: 'Strategy',
            VALUE: 198
          });
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
          this.orderTypes.push({
            NAME: 'Integrated',
            VALUE: 200
          });
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
          this.orderTypes.push({
            NAME: 'Digital',
            VALUE: 202
          });
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
          this.orderTypes.push({
            NAME: 'Video',
            VALUE: 204
          });
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
          this.orderTypes.push({
            NAME: 'Visual',
            VALUE: 196
          });
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
          this.orderTypes.push({
            NAME: 'Non-standard',
            VALUE: 194
          });
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
    if (this.orderTypes.length === 0) {
      this.required = true;
    }
    if (this.orderForm.valid && this.orderTypes.length !== 0) {
      this.required = false;
      this.submitService.createOrder(this.orderForm.value, {
        fields: {
          ASSIGNED_BY_ID: 378,
          COMMENTS: this.orderForm.controls['aboutProject'].value,
          COMPANY_TITLE: this.orderForm.controls['companyName'].value,
          EMAIL: [{VALUE: this.orderForm.controls['email'].value}],
          NAME: this.orderForm.controls['customerName'].value,
          PHONE: [{VALUE: this.orderForm.controls['phoneNumber'].value}],
          SOURCE_ID: 'WEB',
          UF_CRM_1591615508714: this.orderTypes
        }
      }).subscribe(d => {
        this.router.navigateByUrl('thank-you');
      });
    }

    this.showInvalids = true;
    if (this.orderForm.valid) {
      this.router.navigateByUrl('thank-you');
    } else {
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
    }
  }
}
