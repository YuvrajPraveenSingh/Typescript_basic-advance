import { IUser , Iadmin } from "./User_interface";


type person = IUser | Iadmin;

const Person : person[] = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' }
];

function isAdmin(Person : person) : Person is Iadmin {
  return Person.type === 'admin';
}

function isUser(Person : person) : Person is IUser {
  return Person.type === 'user'
}



function logPerson(Person : IUser | Iadmin): void{
  let additionalInformation = "";
  if(isAdmin(Person)) additionalInformation = Person.role;
  if(isUser(Person))   additionalInformation = Person.occupation;
  console.log( ` ${Person.name} , ${Person.age} , ${additionalInformation} `)
}

console.log('Admins:');
Person.filter(isAdmin).forEach(logPerson);

console.log( "");

console.log('Users:');
Person.filter(isUser).forEach(logPerson);

