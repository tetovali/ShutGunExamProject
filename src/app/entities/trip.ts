import { User } from './user';

export class Trip {
    _id: string;
    localFilter?: string; //only used for because the api 
    origin: string;
    destination: string;
    availableSeats: number;
    departureTime: Date;
    owner: User;

}