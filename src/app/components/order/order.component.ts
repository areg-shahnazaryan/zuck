import { Component, OnInit } from '@angular/core';
import {LabelType, Options} from 'ng5-slider';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {

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

}
