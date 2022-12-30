interface IUser{
  name : string;
  age: number;
  occupation : string;
}

const User : IUser[] = [
  {
    name : 'alice',
    age : 25,
    occupation : "user"
  },
  {
    name : 'bob',
    age : 16,
    occupation : "user"
  },
  {
    name : 'sus',
    age : 37,
    occupation : "user"
  },
]

 class User_Detail{
   user : IUser

  constructor(user : IUser ){
   this.user = user
  }

  
   set user_age(age : number) {
     this.user.age = age;
   }
   set user_occupation(occupation: string) {
     this.user.occupation = occupation;
   }
   set user_name(name : string) {
     this.user.name = name;
   }
   get user_name(): string {
    return this.user.name;
   }
   get user_age(): number {
    return this.user.age ;
   }
   get user_occupation(): string {
    return this.user.occupation;
   }
 }

let obj = new User_Detail({
    name : 'bob',
    age : 16,
    occupation : "user"
  })

console.log(obj.user.age);
