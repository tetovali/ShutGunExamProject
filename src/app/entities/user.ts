export class User {
    _id: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    city: string;
    birthDate: Date;
    phoneNumber: number;
    driversLicense?: number;
    locationOfEducation: string;
    localFilter?: string;
}