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
    trip.localFilter = 'Chrstian';
    return this.http.post(this.baseUrl, trip);
  }
}
