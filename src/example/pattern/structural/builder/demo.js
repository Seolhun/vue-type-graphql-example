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
            console.log('user.$name: ' + user.$name);
            console.log('user.$age: ' + user.$age);
            console.log('user.$phone: ' + user.$phone);
            console.log('user.$address: ' + user.$address);
        }
        Demo.show = show;
    })(Demo = BuilderPattern.Demo || (BuilderPattern.Demo = {}));
})(BuilderPattern || (BuilderPattern = {}));
