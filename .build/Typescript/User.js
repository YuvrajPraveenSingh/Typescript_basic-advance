"use strict";
const User = [
  {
    name: "alice",
    age: 25,
    occupation: "user"
  },
  {
    name: "bob",
    age: 16,
    occupation: "user"
  },
  {
    name: "sus",
    age: 37,
    occupation: "user"
  }
];
function user_info(User2) {
  User2.forEach(function(User3) {
    console.log(User3.name);
  });
}
user_info(User);
//# sourceMappingURL=User.js.map
