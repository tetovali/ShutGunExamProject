import { Trip } from './entities/trip';
import { Injectable } from '@angular/core';
import { User } from './entities/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  tempData: Trip[] = [
    {_id: 'df34t', origin: 'Albertslund', 
    destination: 'Copenhagen', 
    availableSeats: 4, 
    departureTime: new Date(2019,0,1,8,0,0), 
    owner: {_id: '21', firstName: 'Emir'} as User },

    {_id: '2', 
    origin: 'Hillerød', 
    destination: 'Copenhagen', 
    availableSeats: 4, 
    departureTime: new Date(2019, 1, 1, 8, 0,0 ), 
    owner: {_id: '1', firstName: 'Christian'} as User },

    {_id: '3', 
    origin: 'Roskilde', 
    destination: 'Copenhagen', 
    availableSeats: 3, 
    departureTime: new Date(2019, 1, 2, 9, 0,0 ), 
    owner: {_id: '2', firstName: 'Ozi'} as User }

  ]; 

  tempUser: User[] = [
    { _id: '1a',
      firstName: 'Emir',
      lastName: 'Kalkan',
      email: 'em@ka.com',
      password: 'asd',
      city: 'İstanbul',
      birthDate: new Date(1997, 3, 11),
      phoneNumber: 905392673453,
      driversLicense: 1234,
      locationOfEducation: 'Copenhagen' },

      { _id: '1b',
      firstName: 'Ekin',
      lastName: 'Yavaşca',
      email: 'ek@ya.com',
      password: 'asddfgh',
      city: 'Berlin',
      birthDate: new Date(1997, 7, 8),
      phoneNumber: 905456765443,
      driversLicense: 45677,
      locationOfEducation: 'İstanbul' },  

      { _id: '1c',
      firstName: 'Ozi',
      lastName: 'Altunseçen',
      email: 'o@a.com',
      password: 'deflmrglmf',
      city: 'Balıkesir',
      birthDate: new Date(1997, 6, 1),
      phoneNumber: 904567654353,
      driversLicense: 45676,
      locationOfEducation: 'Istanbul' },

  ];


  constructor() { }

  addTrip(trip: Trip) : void {
    //Generate an _id until we learn to call the web sevice
    //where an id will be generated for us.
    this.tempData.push(trip);
  }
  deleteTrip(id: string) : void {
    //filter might be helpful
    this.tempData = this.tempData.filter( trip => trip._id != id)
  }
}
