 export interface user {
  name : string;
  age? : number; // use ? to make a property optional ....
  id : number;
  email : String;
}

 export interface address {
  street : string ;
  city : string ;
  state : string;
  pin : number;
}

export interface Employees extends user {
  department : string;
  teamNo? : number;
  salary : number;
}


