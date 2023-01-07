export interface IUser{
  type? : `user`
  name : string;
  age: number;
  occupation : string;
}

export interface Iadmin{
  type? : `admin`
  name : string ;
  age : number ;
  role : string;
}