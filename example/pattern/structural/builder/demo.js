/// <reference path="BuilderPattern.ts" />
var BuilderPattern;
(function (BuilderPattern) {
    var Demo;
    (function (Demo) {
        function show() {
            var user = new BuilderPattern.UserBuilder("Jancsi")
                .setAge(12)
                .setPhone("0123456789")
                .setAddress("asdf")
                .build();
            console.log('user.$name: ' + user.Name);
            console.log('user.$age: ' + user.Age);
            console.log('user.$phone: ' + user.Phone);
            console.log('user.$address: ' + user.Address);
        }
        Demo.show = show;
    })(Demo = BuilderPattern.Demo || (BuilderPattern.Demo = {}));
})(BuilderPattern || (BuilderPattern = {}));
