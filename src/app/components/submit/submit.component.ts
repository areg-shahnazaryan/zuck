import {Component} from '@angular/core';
import {Options, LabelType} from 'ng5-slider';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-order',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss']
})
export class SubmitComponent {

  constructor(
    private formBuilder: FormBuilder,
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

  submit() {
  }
}
