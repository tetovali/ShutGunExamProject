import { UserActions } from './user-list/user-actions';
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

  constructor( private liftActions: LiftActions, private apiService: ApiService, private userActions: UserActions) {  }

  ngOnInit(): void {
    //this.liftActions.getTrips();
    // wapi bağlantısı sağlıyor.
    this.userActions.getUsers();
  }
}
