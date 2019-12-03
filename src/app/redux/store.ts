import { Trip } from './../entities/trip';
import { routerReducer } from '@angular-redux/router';
import { combineReducers } from 'redux';
import { tripsReducer } from './trips.reducer';

export class TripState {
  isLift: boolean;
  lifts: Trip[];
  isLoading: boolean;
}
export class AppState {
  trips?: TripState;
}
export const rootReducer = combineReducers<AppState>({
trips: tripsReducer,

router: routerReducer
}as any);