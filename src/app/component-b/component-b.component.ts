import { Component } from '@angular/core';
import { CarService } from '../CarService';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css'],

})
export class ComponentBComponent {




  // Timings : any;

  // constructor(private carservice: CarService)
  // {
  //   this.Timings = this.carservice.getAvailability();
  // }


  Timings: any;
  paymentB: any;
 


  PaymentCompB: any;
  constructor(private carservice: CarService) {
  
    this.carservice.moneyEventEmittor.subscribe((result)=>{
        console.log("From Comp-B" + result);
        this.PaymentCompB = result;
    })

  }
  
    getAvailList()
    {
      this.Timings = this.carservice.getAvailability();
    }

    // evntReceiveMoney()
    // {
    //   // this.carservice.moneyEventEmittor.subscribe((result)=>{
    //   //   console.log(result);
    //   })


    CarHydList : any;
      getHydInfo()
      {
         this.CarHydList = this.carservice.getAllInfo("Hyderabad");
      }


    }



