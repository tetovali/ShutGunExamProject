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

        return items.filter(user => user.firstname && user.firstname.toLowerCase().includes(search) || 
        user.city && user.city.toLowerCase().includes(search) || 
        user.lastname && user.lastname.toLowerCase().includes(search) ||
        user.locationOfEducation && user.locationOfEducation.toLowerCase().includes(search));
     }
}
