var User = [
    {
        name: 'alice',
        age: 25,
        occupation: "user"
    },
    {
        name: 'bob',
        age: 16,
        occupation: "user"
    },
    {
        name: 'sus',
        age: 37,
        occupation: "user"
    },
    {
        name: 'bob',
        age: 16,
        occupation: "user"
    }
];
var User_Detail = /** @class */ (function () {
    function User_Detail(user) {
        this.user = user;
    }
    Object.defineProperty(User_Detail.prototype, "user_age", {
        get: function () {
            return this.user.age;
        },
        set: function (age) {
            this.user.age = age;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User_Detail.prototype, "user_occupation", {
        get: function () {
            return this.user.occupation;
        },
        set: function (occupation) {
            this.user.occupation = occupation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User_Detail.prototype, "user_name", {
        get: function () {
            return this.user.name;
        },
        set: function (name) {
            this.user.name = name;
        },
        enumerable: false,
        configurable: true
    });
    return User_Detail;
}());
for (var key in User) {
    var vat = "obj".concat(key);
    vat = new User_Detail({
        name: User[key].name,
        age: User[key].age,
        occupation: User[key].occupation
    });
    console.log(vat);
}
