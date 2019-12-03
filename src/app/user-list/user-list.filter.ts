import {Injectable, Pipe, PipeTransform} from '@angular/core';
import { User } from '../entities/user';

@Pipe({name: 'filterUsers'})
@Injectable()
export class FilterUser implements PipeTransform {
     transform(items: User[], search: any): any {
        
        console.log(search);
        console.log(items);
        
        if (search === undefined) {
            return items;
        }

        search = search.toLowerCase();

        return items.filter(user => user.firstName && user.firstName.toLowerCase().includes(search) || 
        user.city && user.city.toLowerCase().includes(search) || 
        user.lastName && user.lastName.toLowerCase().includes(search) ||
        user.locationOfEducation && user.locationOfEducation.toLowerCase().includes(search));
     }
}
