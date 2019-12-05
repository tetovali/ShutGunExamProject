import { ApiService } from './api.service';
import { Component, OnInit } from '@angular/core';
import { LiftActions } from './find-a-lift/lift-actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title: string = 'shotgun';

  constructor( private liftActions: LiftActions, private apiService: ApiService) {  }

  ngOnInit(): void {
    //this.liftActions.getTrips();
    // wapi bağlantısı sağlıyor.
    //this.apiService.getAllUsers();
  }
}
