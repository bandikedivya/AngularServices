import { Injectable } from "@angular/core";


//can use this service by using constructor.
Injectable()
export class CarService
{
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
}

