"use strict";
exports.__esModule = true;
var Person = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' }
];
function isAdmin(Person) {
    return Person.type === 'admin';
}
function isUser(Person) {
    return Person.type === 'user';
}
function logPerson(Person) {
    var additionalInformation = "";
    if (isAdmin(Person))
        additionalInformation = Person.role;
    if (isUser(Person))
        additionalInformation = Person.occupation;
    console.log(" ".concat(Person.name, " , ").concat(Person.age, " , ").concat(additionalInformation, " "));
}
console.log('Admins:');
Person.filter(isAdmin).forEach(logPerson);
console.log("");
console.log('Users:');
Person.filter(isUser).forEach(logPerson);
