export interface SignForm {
    name:     string;
    email:    string;
    password: string;
    checkPassword?: string;
    phone:    string;
    year?: string | number;
    month?: string | number;
    day?: string | number;
    birthday: string;
    city?: string;
    area?: string;
    address:  Address;
}

export interface Address {
    zipcode: number;
    detail:  string;
}

export interface User {
    status: boolean;
    token:  string;
    result: Result;
}

export interface Result {
    name:              string;
    email:             string;
    phone:             string;
    birthday:          string;
    address:           Address;
    verificationToken: string;
    _id:               string;
    createdAt:         string;
    updatedAt:         string;
    id:                string;
}

export interface Address {
    zipcode: number;
    detail:  string;
    county:  string;
    city:    string;
}

