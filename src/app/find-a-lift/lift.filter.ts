import { Trip } from './../entities/trip';
import {Injectable, Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'filterLift'})
@Injectable()
export class FilterLift implements PipeTransform {
     transform(items: Trip[], search: any): any {
        // your custom code here
        
        console.log(search);
        console.log(items);
        
        if (search === undefined) {
            return items;
        }

        search = search.toLowerCase();
        return items.filter(trip => trip.destination && trip.destination.toLowerCase().includes(search) || 
        trip.origin && trip.origin.toLowerCase().includes(search) || 
        trip.availableSeats && trip.availableSeats >= search ||
        trip.owner.firstName && trip.owner.firstName.toLowerCase().includes(search));

     }
}
