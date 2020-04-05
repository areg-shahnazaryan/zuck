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
    private router: Router
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
    // if (this.orderForm.valid && this.orderTypes.length !== 0) {
    //   this.required = false;
    //   this.submitService.createOrder(this.orderForm.value).subscribe(d => {
    //     console.log(d);
    //   });
    // }
    // if (this.orderTypes.length === 0) {
    //   this.required = true;
    // }
    this.showInvalids = true;
    if (this.orderForm.valid) {
      this.router.navigateByUrl('thank-you');
    }
  }
}
