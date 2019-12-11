import { User } from './../entities/user';
import { Trip } from './../entities/trip';
import { routerReducer } from '@angular-redux/router';
import { combineReducers } from 'redux';
import { tripsReducer } from './trips.reducer';
import { userListReducer } from './userList.reducer';

export class TripState {
  isLift: boolean;
  lifts: Trip[];
  isLoading: boolean;
}

export class UserState {
  isUser: boolean;
  users: User[];
}

export class AppState {
  trips?: TripState;
  userList?: UserState;
}
export const rootReducer = combineReducers<AppState>({
trips: tripsReducer,
userList: userListReducer,

router: routerReducer
}as any);
