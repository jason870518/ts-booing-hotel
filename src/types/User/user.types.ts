export interface SignForm {
    name:     string | null;
    email:    string | null;
    password: string | null;
    checkPassword?: string | null;
    phone:    string | null;
    year?: string | number | null;
    month?: string | number | null;
    day?: string | number | null;
    birthday: string | null;
    city?: string | null;
    area?: string | null;
    address:  Address;
}

export interface Address {
    zipcode: string | null;
    detail:  string | null;
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
    zipcode: string | null;
    detail:  string | null;
    county:  string;
    city:    string;
}

