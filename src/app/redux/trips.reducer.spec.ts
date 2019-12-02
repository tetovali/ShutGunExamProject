import { DataService } from './../data.service';
const deepFreeze = require('deep-freeze');
import { tripsReducer } from './trips.reducer';
import * as types from './../find-a-lift/lift-actions';
import { type } from 'os';
import { Trip } from '../entities/trip';

describe('trips reducer', () => {
    it('should return the initial state', () => {
        const ds = new DataService();
        expect(tripsReducer(undefined, {})).toEqual({isLift: false, lifts: ds.tempData});
    });

     it('set isLift to true', () => {
         //Arrange
         const ds = new DataService();
         const inputState = {isLift: false, lifts: ds.tempData}; //Configuring my previous state
         const actionObject = {type: types.LiftActions.SET_TYPE, payload: true}; //Action object
         const expectedOutput = {isLift: true, lifts: ds.tempData}; // After test I want this!

         deepFreeze(inputState); //checking mutations for preventing them
        //Act
         const result = tripsReducer(inputState, actionObject); //Perform test
        //Assert
         expect(result).toEqual(expectedOutput); //If true it passes
     });

     it('set create checking ', () => {
         //add a new trip object by calling the reducer's  create_trip
         //Arrange
         const trip: Trip = { origin: "KEA", departureTime: new Date(2019, 0, 2) } as Trip;

         const inputState = {isLift: false, lifts: [] }; 
         const actionObject = {type: types.LiftActions.CREATE_TRIP, payload: trip}; 
         const expectedOutput = {isLift: false, lifts: [trip] }; 

         deepFreeze(inputState); //checking mutations for preventing them
        //Act
         const result = tripsReducer(inputState, actionObject); //Perform test
        //Assert
         expect(result.lifts.length).toEqual(1);
         expect(result).toEqual(expectedOutput); //If true it passes

     });

      it('set delete checking ', () => {
         //add a new trip object by calling the reducer's  create_trip
         //Arrange
         const trip: Trip = { _id:'1', origin: "KEA", departureTime: new Date(2019, 0, 2) } as Trip;

         const inputState = {isLift: false, lifts: [trip]} ; 
         const actionObject = {type: types.LiftActions.DELETE_TRIP, payload: '1'}; 
         const expectedOutput = {isLift: false, lifts: [] }; 

         deepFreeze(inputState); //checking mutations for preventing them
        //Act
         const result = tripsReducer(inputState, actionObject); //Perform test
        //Assert
         expect(result.lifts.length).toEqual(0);
         expect(result).toEqual(expectedOutput); //If true it passes

     });
});
