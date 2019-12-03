import { User } from './../entities/user';
import { Trip } from './../entities/trip';
import { TestBed, async } from '@angular/core/testing';
import { FilterLift } from './lift.filter';

//0.1: Return empty array if array of lifts is empty while searching on specific value

//1.0: Find lifts by searching destination
//1.1: Find lifts by searching origin
//1.2: Find lifts by searching availableSeats

//2.0: Don't find lifts when searching for something not in the array
//2.1: Return all lifts when search is undefined 
//2.2: Return all lifts when search is empty string

//3.0: Search for destination but the data does not contain destination 
//3.1: Search for a negative number of seats

describe('Lift Filter', () => {


 beforeEach(() => {
   
   TestBed.configureTestingModule({
     declarations: [
       FilterLift
     ],
   });
  });

  const filter = new FilterLift();

  it('0.1: Return empty array if array of lifts is empty while searching on specific value', () => {
    //Arrange
    //const filter = new FilterLift();
    // const data = [{id: '123', destination: 'Copenhagen'}]
    const data = [];
    const search = 'Copenhagen';
    const expectedResult = [];

    //Act
    const result = filter.transform(data, search);

    //Assert
    expect(result).toEqual(expectedResult);
  });

  it('1.0: Find lifts by searching destination', () => {
    //Arrange
    //const filter = new FilterLift();
    // const data = [{id: '123', destination: 'Copenhagen'}]
    const data = [{_id: '2', 
    origin: 'Hillerød', 
    destination: 'Copenhagen', 
    availableSeats: 4, 
    departureTime: new Date(2019, 1, 1, 8, 0,0 ),
    owner: {_id: '1', firstName: 'Christian'} as User}];

    const search = 'Copenhagen';
    const expectedResult = [{_id: '2', 
    origin: 'Hillerød', 
    destination: 'Copenhagen', 
    availableSeats: 4, 
    departureTime: new Date(2019, 1, 1, 8, 0,0 ),
    owner: {_id: '1', firstName: 'Christian'} as User}];
    //Act
    const result = filter.transform(data, search);
    //Assert
    expect(result).toEqual(expectedResult);
  });

   it('1.1: Find lifts by searching origin', () => {
     //Arrange
     //const filter = new FilterLift();

     const data = [{_id: '2', 
     origin: 'Hillerød', 
     destination: 'Copenhagen', 
     availableSeats: 4, 
     departureTime: new Date(2019, 1, 1, 8, 0,0 ),
     owner: {_id: '1', firstName: 'Christian'} as User}];

     const search = 'Hillerød';
     const expectedResult = [{_id: '2', 
     origin: 'Hillerød', 
     destination: 'Copenhagen', 
     availableSeats: 4, 
     departureTime: new Date(2019, 1, 1, 8, 0,0 ),
     owner: {_id: '1', firstName: 'Christian'} as User}];
     //Act
     const result = filter.transform(data, search);
     //Assert
     expect(result).toEqual(expectedResult);
   });

   it('1.2: Find lifts by searching availableSeats', () => {
     //Arrange
     //const filter = new FilterLift();
     // const data = [{id: '123', destination: 'Copenhagen'}]
     const data = [{_id: '2', 
     origin: 'Hillerød', 
     destination: 'Copenhagen', 
     availableSeats: 4, 
     departureTime: new Date(2019, 1, 1, 8, 0,0 ),
     owner: {_id: '1', firstName: 'Christian'} as User}];

     const search = 4;
     const expectedResult = [{_id: '2', 
     origin: 'Hillerød', 
     destination: 'Copenhagen', 
     availableSeats: 4, 
     departureTime: new Date(2019, 1, 1, 8, 0,0 ),
     owner: {_id: '1', firstName: 'Christian'} as User}];
     //Act
     const result = filter.transform(data, search);
     //Assert
     expect(result).toEqual(expectedResult);
   });

   it('2.0: Don\'t find lifts when searching for something not in the array', () => {
    //Arrange
    //const filter = new FilterLift();
    // const data = [{id: '123', destination: 'Copenhagen'}]
    const data = [{_id: '2', 
    origin: 'Hillerød', 
    destination: 'Copenhagen', 
    availableSeats: 4, 
    departureTime: new Date(2019, 1, 1, 8, 0,0 ),
    owner: {_id: '1', firstName: 'Christian'} as User}];

    const search = 'Emir';
    const expectedResult = [];
    //Act
    const result = filter.transform(data, search);
    //Assert
    expect(result).toEqual(expectedResult);
  });

  it('2.1: Return all lifts when search is undefined ', () => {
    //Arrange
    //const filter = new FilterLift();
    // const data = [{id: '123', destination: 'Copenhagen'}]
    const data = [{_id: '2', 
    origin: 'Hillerød', 
    destination: 'Copenhagen', 
    availableSeats: 4, 
    departureTime: new Date(2019, 1, 1, 8, 0,0 ),
    owner: {_id: '1', firstName: 'Christian'} as User}];

    const search = undefined;
    const expectedResult = [{_id: '2', 
    origin: 'Hillerød', 
    destination: 'Copenhagen', 
    availableSeats: 4, 
    departureTime: new Date(2019, 1, 1, 8, 0,0 ),
    owner: {_id: '1', firstName: 'Christian'} as User}];
    //Act
    const result = filter.transform(data, search);
    //Assert
    expect(result).toEqual(expectedResult);
  });

   it('2.2: Return all lifts when search is empty string', () => {
     //Arrange
    const data = [{_id: '2', 
    origin: 'Hillerød', 
    destination: 'Copenhagen', 
    availableSeats: 4, 
    departureTime: new Date(2019, 1, 1, 8, 0,0 ),
    owner: {_id: '1', firstName: 'Christian'} as User}];
 
    const search = '';
    const expectedResult = [{_id: '2', 
    origin: 'Hillerød', 
    destination: 'Copenhagen', 
    availableSeats: 4, 
    departureTime: new Date(2019, 1, 1, 8, 0,0 ),
    owner: {_id: '1', firstName: 'Christian'} as User}];
    //Act
    const result = filter.transform(data, search);
    //Assert
    expect(result).toEqual(expectedResult);
   });

   it('3.0: Search for destination but the data does not contain destination', () => {
    //Arrange
   const data = [{_id: '2', 
   origin: 'Hillerød', 
   destination: undefined, 
   availableSeats: 4, 
   departureTime: new Date(2019, 1, 1, 8, 0,0 ),
   owner: {_id: '1', firstName: 'Christian'} as User}];

   const search = 'Copenhagen';
   const expectedResult = [];
   //Act
   const result = filter.transform(data, search);
   //Assert
   expect(result).toEqual(expectedResult);
  });

  it('3.1: Search for a negative number of seats', () => {
   //Arrange
   const data = [{_id: '2', 
   origin: 'Hillerød', 
   destination: undefined, 
   availableSeats: 4, 
   departureTime: new Date(2019, 1, 1, 8, 0,0 ),
   owner: {_id: '1', firstName: 'Christian'} as User}];

   const search = -4;
   const expectedResult = [];
   //Act
   const result = filter.transform(data, search);
   //Assert
   expect(result).toEqual(expectedResult);
  });

});
