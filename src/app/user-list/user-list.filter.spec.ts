import { FilterUser } from './user-list.filter';
import { User } from './../entities/user';
import { Trip } from './../entities/trip';
import { TestBed, async } from '@angular/core/testing';

//0.1: Return empty array if array of users is empty while searching on specific value

//1.0: Find lifts by searching firstname
//1.1: Find lifts by searching lastname
//1.2: Find lifts by searching city
//1.3: Find lifts by searching location of education

//2.0: Don't find lifts when searching for something not in the array
//2.1: Return all lifts when search is undefined 
//2.2: Return all lifts when search is empty string

//3.0: Search for destination but the data does not contain destination 
//3.1: Search for a negative number of seats

describe('User Filter', () => {


 beforeEach(() => {
   
   TestBed.configureTestingModule({
     declarations: [
       FilterUser
     ],
   });
  });

  const filter = new FilterUser();

  it('0.1: Return empty array if array of users is empty while searching on specific value', () => {
    //Arrange
    const data = [];
    const search = 'Emir';
    const expectedResult = [];

    //Act
    const result = filter.transform(data, search);

    //Assert
    expect(result).toEqual(expectedResult);
  });

  it('1.0: Find users by searching firstname', () => {
    //Arrange
    //const filter = new FilterLift();
    // const data = [{id: '123', destination: 'Copenhagen'}]
    const data = [{ _id: '1a',
    firstName: 'Emir',
    lastName: 'Kalkan',
    email: 'em@ka.com',
    password: 'asd',
    city: 'İstanbul',
    birthDate: new Date(1997, 3, 11),
    phoneNumber: 905392673453,
    driversLicense: 1234,
    locationOfEducation: 'Copenhagen' }];

    const search = 'Emir';

    const expectedResult = [{ _id: '1a',
    firstName: 'Emir',
    lastName: 'Kalkan',
    email: 'em@ka.com',
    password: 'asd',
    city: 'İstanbul',
    birthDate: new Date(1997, 3, 11),
    phoneNumber: 905392673453,
    driversLicense: 1234,
    locationOfEducation: 'Copenhagen' }];
    //Act
    const result = filter.transform(data, search);
    //Assert
    expect(result).toEqual(expectedResult);
  });

   it('1.1: Find users by searching lastname', () => {
     //Arrange
     //const filter = new FilterLift();

     const data = [{ _id: '1a',
     firstName: 'Emir',
     lastName: 'Kalkan',
     email: 'em@ka.com',
     password: 'asd',
     city: 'İstanbul',
     birthDate: new Date(1997, 3, 11),
     phoneNumber: 905392673453,
     driversLicense: 1234,
     locationOfEducation: 'Copenhagen' }];

     const search = 'Kalkan';

     const expectedResult = [{ _id: '1a',
     firstName: 'Emir',
     lastName: 'Kalkan',
     email: 'em@ka.com',
     password: 'asd',
     city: 'İstanbul',
     birthDate: new Date(1997, 3, 11),
     phoneNumber: 905392673453,
     driversLicense: 1234,
     locationOfEducation: 'Copenhagen' }];
     //Act
     const result = filter.transform(data, search);
     //Assert
     expect(result).toEqual(expectedResult);
   });

   it('1.2: Find users by searching city', () => {
     //Arrange
     //const filter = new FilterLift();
     // const data = [{id: '123', destination: 'Copenhagen'}]
     const data = [{ _id: '1a',
     firstName: 'Emir',
     lastName: 'Kalkan',
     email: 'em@ka.com',
     password: 'asd',
     city: 'İstanbul',
     birthDate: new Date(1997, 3, 11),
     phoneNumber: 905392673453,
     driversLicense: 1234,
     locationOfEducation: 'Copenhagen' }];

     const search = 'İstanbul';

     const expectedResult = [{ _id: '1a',
     firstName: 'Emir',
     lastName: 'Kalkan',
     email: 'em@ka.com',
     password: 'asd',
     city: 'İstanbul',
     birthDate: new Date(1997, 3, 11),
     phoneNumber: 905392673453,
     driversLicense: 1234,
     locationOfEducation: 'Copenhagen' }];
     //Act
     const result = filter.transform(data, search);
     //Assert
     expect(result).toEqual(expectedResult);
   });

   it('1.3: Find users by searching location of education', () => {
    //Arrange
    //const filter = new FilterLift();
    // const data = [{id: '123', destination: 'Copenhagen'}]
    const data = [{ _id: '1a',
    firstName: 'Emir',
    lastName: 'Kalkan',
    email: 'em@ka.com',
    password: 'asd',
    city: 'İstanbul',
    birthDate: new Date(1997, 3, 11),
    phoneNumber: 905392673453,
    driversLicense: 1234,
    locationOfEducation: 'Copenhagen' }];

    const search = 'Copenhagen';

    const expectedResult = [{ _id: '1a',
    firstName: 'Emir',
    lastName: 'Kalkan',
    email: 'em@ka.com',
    password: 'asd',
    city: 'İstanbul',
    birthDate: new Date(1997, 3, 11),
    phoneNumber: 905392673453,
    driversLicense: 1234,
    locationOfEducation: 'Copenhagen' }];
    //Act
    const result = filter.transform(data, search);
    //Assert
    expect(result).toEqual(expectedResult);
  });

   it('2.0: Don\'t find users when searching for something not in the array', () => {
    //Arrange
    //const filter = new FilterLift();
    // const data = [{id: '123', destination: 'Copenhagen'}]
    const data = [{ _id: '1a',
    firstName: 'Emir',
    lastName: 'Kalkan',
    email: 'em@ka.com',
    password: 'asd',
    city: 'İstanbul',
    birthDate: new Date(1997, 3, 11),
    phoneNumber: 905392673453,
    driversLicense: 1234,
    locationOfEducation: 'Copenhagen' }];

    const search = 'Ronaldo';
    const expectedResult = [];
    //Act
    const result = filter.transform(data, search);
    //Assert
    expect(result).toEqual(expectedResult);
  });

  it('2.1: Return all users when search is undefined ', () => {
    //Arrange
    //const filter = new FilterLift();
    // const data = [{id: '123', destination: 'Copenhagen'}]
    const data = [{ _id: '1a',
    firstName: 'Emir',
    lastName: 'Kalkan',
    email: 'em@ka.com',
    password: 'asd',
    city: 'İstanbul',
    birthDate: new Date(1997, 3, 11),
    phoneNumber: 905392673453,
    driversLicense: 1234,
    locationOfEducation: 'Copenhagen' }];

    const search = undefined;
    const expectedResult = [{ _id: '1a',
    firstName: 'Emir',
    lastName: 'Kalkan',
    email: 'em@ka.com',
    password: 'asd',
    city: 'İstanbul',
    birthDate: new Date(1997, 3, 11),
    phoneNumber: 905392673453,
    driversLicense: 1234,
    locationOfEducation: 'Copenhagen' }];
    //Act
    const result = filter.transform(data, search);
    //Assert
    expect(result).toEqual(expectedResult);
  });

   it('2.2: Return all users when search is empty string', () => {
     //Arrange
    const data = [{ _id: '1a',
    firstName: 'Emir',
    lastName: 'Kalkan',
    email: 'em@ka.com',
    password: 'asd',
    city: 'İstanbul',
    birthDate: new Date(1997, 3, 11),
    phoneNumber: 905392673453,
    driversLicense: 1234,
    locationOfEducation: 'Copenhagen' }];
 
    const search = '';
    const expectedResult = [{ _id: '1a',
    firstName: 'Emir',
    lastName: 'Kalkan',
    email: 'em@ka.com',
    password: 'asd',
    city: 'İstanbul',
    birthDate: new Date(1997, 3, 11),
    phoneNumber: 905392673453,
    driversLicense: 1234,
    locationOfEducation: 'Copenhagen' }];
    //Act
    const result = filter.transform(data, search);
    //Assert
    expect(result).toEqual(expectedResult);
   });

   it('3.0: Search for firstname but the data does not contain firstname', () => {
    //Arrange
   const data = [{ _id: '1a',
   firstName: undefined,
   lastName: 'Kalkan',
   email: 'em@ka.com',
   password: 'asd',
   city: 'İstanbul',
   birthDate: new Date(1997, 3, 11),
   phoneNumber: 905392673453,
   driversLicense: 1234,
   locationOfEducation: 'Copenhagen' }];

   const search = 'Emir';
   const expectedResult = [];
   //Act
   const result = filter.transform(data, search);
   //Assert
   expect(result).toEqual(expectedResult);
  });

});
