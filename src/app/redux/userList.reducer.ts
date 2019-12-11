import { UserActions } from './../user-list/user-actions';
import { Trip } from './../entities/trip';
import { DataService } from './../data.service';
import { tassign } from 'tassign';
import { UserState } from './store';


let ds = new DataService();
const INITIAL_STATE: UserState = {isUser: false, users: [] };
//isLift ilk değeri önemli *hardcoded data*

export function userListReducer(state: UserState = INITIAL_STATE, action: any) {
 switch (action.type) {
  case UserActions.GET_USERS:
    return tassign(state, { users: action.payload });

//   case LiftActions.IS_LOADING:
//     return tassign(state, {isLoading: action.payload});  

//   case LiftActions.CREATE_TRIP: 
//     //Should: Create a new state object
//     //create a copy of the lifts-array / We don't want mutate state.
//     //Add the new lift to the copy of the array.
//     //Mutating state. NOT ALLOWED!
//     //state.lifts.push(action.payload);
//     //return state;
//     //Tek satır kod yapmak zorunda değilsin. İstersen const newLifts = state.lifts.concat([action.payload]) gibi yapıp
//     //2 satıra böleblirsin. return tassign(state, {lifts: newLifts }); gibi...
//     // const newLifts = [...state.lifts, action.payload]; concat yerine javascript spread operator
//     return tassign(state, { lifts: state.lifts.concat([action.payload]) });
//     const newLifts = [...state.lifts, action.payload]; // Javascript spread operator
//     //return tassign(state, { lifts: newLifts, isLoading: false });

//   // case LiftActions.MyAction:

//   case LiftActions.DELETE_TRIP:
       
//     return tassign(state, { lifts: state.lifts.filter( trip => trip._id !== action.payload) });  

//   case LiftActions.SET_TYPE:
//       //return Object.assign({}, state,{ isLifts: action.payload });
//     return tassign(state, { isLift: action.payload });

  default:
    return state;
}
}