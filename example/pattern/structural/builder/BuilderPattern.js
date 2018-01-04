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
            this.name = builder.Name;
            this.age = builder.Age;
            this.phone = builder.Phone;
            this.address = builder.Address;
        }
        Object.defineProperty(User.prototype, "Name", {
            get: function () {
                return this.name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(User.prototype, "Age", {
            get: function () {
                return this.age;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(User.prototype, "Phone", {
            get: function () {
                return this.phone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(User.prototype, "Address", {
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
