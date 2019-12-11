import { ApiService } from './../api.service';
import { User } from './../entities/user';
import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../redux/store';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root'})
export class UserActions {
constructor (private ngRedux: NgRedux<AppState>, private apiService: ApiService, private router: Router) {} 
  
  static SET_TYPE: string = 'SET_TYPE'; 
  static MyAction: string = 'MY_ACTION';
  static CREATE_USER: string = 'CREATE_USER';
  static DELETE_USER: string = 'DELETE_USER';
  //static IS_LOADING: string = 'IS_LOADING'; 
  static GET_USERS: string = 'GET_USERS';

  getUsers() {
    this.apiService.getAllUsers().subscribe((result: any[]) => {
        const myUsers = result.filter( x => x.localFilter === 'kalkanApi');
        console.log(myUsers);
        //this.users = myUsers;

        this.ngRedux.dispatch({
            type: UserActions.GET_USERS,
            payload: myUsers
        });
      });
  }

//   createTrip(trip: Trip): void {
//     this.ngRedux.dispatch({
//       type: LiftActions.IS_LOADING,
//       payload: true
//     });

//     this.apiService.createTrip(trip).subscribe((tripObjFromApi: Trip) => {
      
//       this.ngRedux.dispatch({
//         type: LiftActions.CREATE_TRIP,
//         payload: tripObjFromApi
//       });
//       this.router.navigate(['/portal/findalift']);
//     });

//     console.log("Hi");
    
//   }

//   deleteTrip(id: string): void {
//     this.ngRedux.dispatch({
//       type: LiftActions.DELETE_TRIP,
//       payload: id
//     });
//   }
  
//   callMyAction(isLift: boolean): void {
//     this.ngRedux.dispatch({
//       type: LiftActions.MyAction,
//       payload: isLift
//     });
//   }

//   setType(isLift: boolean): void {
//     this.ngRedux.dispatch({
//       type: LiftActions.SET_TYPE,
//       payload: isLift
//     });
//   }
}