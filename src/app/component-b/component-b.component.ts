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
  getCarsList: any;

  constructor(private carservice: CarService) {
  


  }

  
    getAvailList()
    {
      this.Timings = this.carservice.getAvailability();
    }
}