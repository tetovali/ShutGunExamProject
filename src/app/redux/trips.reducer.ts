import { Trip } from './../entities/trip';
import { DataService } from './../data.service';
import { LiftActions } from './../find-a-lift/lift-actions'; 
import { tassign } from 'tassign';
import { TripState } from './store';


//let ds = new DataService();
const INITIAL_STATE: TripState = {isLift: false, lifts: (new DataService).tempData };
//isLift ilk değeri önemli *hardcoded data*

export function tripsReducer(state: TripState = INITIAL_STATE, action: any) {
 switch (action.type) {
  case LiftActions.CREATE_TRIP: 
    //Should: Create a new state object
    //create a copy of the lifts-array / We don't want mutate state.
    //Add the new lift to the copy of the array.
    //Mutating state. NOT ALLOWED!
    //state.lifts.push(action.payload);
    //return state;
    //Tek satır kod yapmak zorunda değilsin. İstersen const newLifts = state.lifts.concat([action.payload]) gibi yapıp
    //2 satıra böleblirsin. return tassign(state, {lifts: newLifts }); gibi...
    // const newLifts = [...state.lifts, action.payload]; concat yerine javascript spread operator
    return tassign(state, { lifts: state.lifts.concat([action.payload]) });

  // case LiftActions.MyAction:

  case LiftActions.DELETE_TRIP:
       
    return tassign(state, { lifts: state.lifts.filter( trip => trip._id != action.payload) });  

  case LiftActions.SET_TYPE:
      //return Object.assign({}, state,{ isLifts: action.payload });
    return tassign(state, { isLift: action.payload });

  default:
    return state;
}
}