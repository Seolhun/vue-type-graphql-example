// tslint:disable-next-line:no-namespace
var BuilderPattern;
(function (BuilderPattern) {
    var UserBuilder = /** @class */ (function () {
        function UserBuilder(name) {
            this.name = name;
        }
        Object.defineProperty(UserBuilder.prototype, "Name", {
            get: function () {
                return this.name;
            },
            enumerable: true,
            configurable: true
        });
        UserBuilder.prototype.setName = function (value) {
            this.name = value;
            return this;
        };
        Object.defineProperty(UserBuilder.prototype, "Age", {
            get: function () {
                return this.age;
            },
            enumerable: true,
            configurable: true
        });
        UserBuilder.prototype.setAge = function (value) {
            this.age = value;
            return this;
        };
        Object.defineProperty(UserBuilder.prototype, "Phone", {
            get: function () {
                return this.phone;
            },
            enumerable: true,
            configurable: true
        });
        UserBuilder.prototype.setPhone = function (value) {
            this.phone = value;
            return this;
        };
        Object.defineProperty(UserBuilder.prototype, "Address", {
            get: function () {
                return this.address;
            },
            enumerable: true,
            configurable: true
        });
        UserBuilder.prototype.setAddress = function (value) {
            this.address = value;
            return this;
        };
        UserBuilder.prototype.build = function () {
            return new User(this);
        };
        return UserBuilder;
    }());
    BuilderPattern.UserBuilder = UserBuilder;
    var User = /** @class */ (function () {
        function User(builder) {
            this.name = builder.$name;
            this.age = builder.$age;
            this.phone = builder.$phone;
            this.address = builder.$address;
        }
        Object.defineProperty(User.prototype, "$name", {
            get: function () {
                return this.name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(User.prototype, "$age", {
            get: function () {
                return this.age;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(User.prototype, "$phone", {
            get: function () {
                return this.phone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(User.prototype, "$address", {
            get: function () {
                return this.address;
            },
            enumerable: true,
            configurable: true
        });
        return User;
    }());
    BuilderPattern.User = User;
})(BuilderPattern || (BuilderPattern = {}));
