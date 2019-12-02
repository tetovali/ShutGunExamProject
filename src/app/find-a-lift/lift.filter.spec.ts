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

  it('0.1: Return empty array if array of lifts is empty while searching on specific value', () => {
    //Arrange
    const filter = new FilterLift();
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
    const filter = new FilterLift();
    // const data = [{id: '123', destination: 'Copenhagen'}]
    const data = [{id: '1', destination: 'Copenhagen'}];
    const search = 'Copenhagen';
    const expectedResult = [];

    //Act
    const result = filter.transform(data, search);

    //Assert
    expect(result).toEqual(expectedResult);
  });

});
