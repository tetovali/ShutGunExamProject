import { Trip } from './../entities/trip';
import {Injectable, Pipe, PipeTransform} from '@angular/core';
import { empty } from 'rxjs';

@Pipe({name: 'filterLift'})
@Injectable()
export class FilterLift implements PipeTransform {
     transform(items: Trip[], search: any): any {
        // your custom code here
        
        console.log(search);
        console.log(items);
        
        if (search === undefined) {
            return items;
        
        } else if(!isNaN(search)) { //is not a number func.
            if (search < 0) {
                return [];
            } else {
                return items.filter(trip => trip.availableSeats && trip.availableSeats >= search);
            }
            
        } else {
            search = search.toLowerCase();
            return items.filter(trip => trip.destination && trip.destination.toLowerCase().includes(search) || 
            trip.origin && trip.origin.toLowerCase().includes(search) || 
            trip.owner.firstName && trip.owner.firstName.toLowerCase().includes(search));
        }
    
        

     }
}
