import { Component } from '@angular/core';
import { CarService } from '../CarService';

@Component({
  selector: 'app-component-c',
  templateUrl: './component-c.component.html',
  styleUrls: ['./component-c.component.css'],
})
export class ComponentCComponent {

  PaymentCompC : any;

  constructor(private carservice: CarService){
    this.carservice.moneyEventEmittor.subscribe((result)=>{
      console.log("From Comp-C" +result);
      this.PaymentCompC = result;
    })
  }
}
