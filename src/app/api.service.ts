import { User } from './entities/user';
import { Trip } from './entities/trip';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl: string = 'http://angular2api2.azurewebsites.net/api/internships';

  constructor(private http: HttpClient) { }

  getAllTrips(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  createTrip(trip: Trip) {
    trip.localFilter = 'Christian';
    return this.http.post(this.baseUrl, trip);
  }

  //User api functions start

  getAllUsers(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  createUser(user: User) {
    user.localFilter = 'kalkanApi';
    return this.http.post(this.baseUrl, user);
  }

  updateUser(user: User) {
    user.localFilter = 'kalkanApi';
    const url = `${this.baseUrl}/${user._id} `;
    return this.http.put(this.baseUrl, user);
  }

  deleteUser(id: string) {
    const url = `${this.baseUrl}/${id} `;
    return this.http.delete(url);
  }

}
