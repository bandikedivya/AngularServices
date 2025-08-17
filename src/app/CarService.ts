import { EventEmitter, Injectable } from "@angular/core";
import { HydCarService } from "./HydCarService";


//can use this service by using constructor.
@Injectable()
export class CarService
{
    // To get service from another service, wes should add the other service's name[HydCarService] in the constructor
    // then using the local variable in the constructor, we'll call the methods in the other service's [HydCarService].
    constructor( private hydservice: HydCarService)
    {
        //this.hydservice.getHydCarList();
    }
    getMechList(){
    return ['John','Peter'];
    }

    getAvailability()
    {
        let mrngSlot = "10:00 Am";
        let aftnoonSlot = "13:00 Pm";
        let EvngSlot = "18:00 Pm";

        return [mrngSlot,aftnoonSlot,EvngSlot];

    }

    //   getAvailableSlots(){
    //      let morningTime   = "10:00 AM" ;
    //      let afterNoonTime = "13:00 PM";
    //      let eveningTime   = "18:00 PM";

    //      return [morningTime, afterNoonTime , eveningTime];
    //   }


    moneyEventEmittor = new EventEmitter<any>();
    getPaymentDetails(moneyvalue:any)
    {
        this.moneyEventEmittor.emit(moneyvalue);
    }

    getAllInfo(location: string)
    {
        if(location == "Banglore")
        {
            return "🎉 200000 Lakh Cars Available in 📍Banglore";
            //return "CarList = 🎉 200000Lakh Car Available";
            
        }
        else if(location == "Hyderabad")
        {
            let info = this.hydservice.getHydCarList();
            return info;
        }
        else 
        {
            return "⛔ No Service Available";
        }
        return null;
    }



}

