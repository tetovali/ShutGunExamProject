import { DataService } from './../data.service';
const deepFreeze = require('deep-freeze');
import { tripsReducer } from './trips.reducer';
import * as types from './../find-a-lift/lift-actions';
import { Trip } from '../entities/trip';
import { deepStrictEqual } from 'assert';

describe('trips reducer', () => {
    const ds = new DataService();

    it('should return the initial state', () => {
        const ds = new DataService();
        //expect(tripsReducer(undefined, {})).toEqual({isLift: false, lifts: ds.tempData});
        const expectedOutput = {isLift: false, lifts: ds.tempData, isLoading: false};

        // Act
        const result = tripsReducer(undefined, {});

        // Assert
        expect(result).toEqual(expectedOutput);
    });

     it('set isLift to true', () => {
         //Arrange
         
         const inputState = {isLift: false, lifts: ds.tempData, isLoading: false}; //Configuring my previous state
         const actionObject = {type: types.LiftActions.SET_TYPE, payload: true}; //Action object
         const expectedOutput = {isLift: true, lifts: ds.tempData, isLoading: false }; // After test I want this!

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

         const inputState = {isLift: false, lifts: [], isLoading: true }; 
         const actionObject = {type: types.LiftActions.CREATE_TRIP, payload: trip}; 
         const expectedOutput = {isLift: false, lifts: [trip], isLoading: true }; //false doğrusu

         deepFreeze(inputState); //checking mutations for preventing them
        //Act
         const result = tripsReducer(inputState, actionObject); //Perform test
        //Assert
         expect(result.lifts.length).toEqual(1);
         expect(result).toEqual(expectedOutput); //If true it passes

     });

     it('should Create a trip in the lifts with a non-empty lifts-array', () => {
        // Add a new trip object by calling the reducer's CREATE_TRIP. 
        // expect after that the state has a lift array one size larger and check the object as well.
        const trip: Trip = { origin:"KEA", departureTime: new Date(2019, 0, 2) } as Trip;// Create a trip obj.
    
        const inputState = { isLift: false, lifts: ds.tempData, isLoading: true }; // Configuring my previous state
        const actionObject = { type: types.LiftActions.CREATE_TRIP, payload: trip }; // Action object
    
        deepFreeze(inputState);
        // Act
        const result = tripsReducer(inputState, actionObject); // Perform test
    
        // Assert
        expect(result.lifts.length).toEqual(4);
      });

      it('set delete checking ', () => {
         //add a new trip object by calling the reducer's  create_trip
         //Arrange
         const trip: Trip = { _id:'1', origin: "KEA", departureTime: new Date(2019, 0, 2) } as Trip;

         const inputState = {isLift: false, lifts: [trip], isLoading: false } ; 
         const actionObject = {type: types.LiftActions.DELETE_TRIP, payload: '1'}; 
         const expectedOutput = {isLift: false, lifts: [], isLoading: false }; 

         deepFreeze(inputState); //checking mutations for preventing them
        //Act
         const result = tripsReducer(inputState, actionObject); //Perform test
        //Assert
         expect(result.lifts.length).toEqual(0);
         expect(result).toEqual(expectedOutput); //If true it passes

     });
});
