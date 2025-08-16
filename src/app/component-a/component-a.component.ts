import { Component } from '@angular/core';
import { CarService } from '../CarService';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css'],
})
export class ComponentAComponent {



  
//can use this service by using constructor.
  //should create object for the service.ts file.
  constructor(private carService: CarService) {

  }


  MechList : any;
  getMecsList() {
    this.MechList =   this.carService.getMechList();
  }


}
