var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function methodA() {
    console.log("methodA(): evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("methodA(): target", target);
        console.log("methodA(): propertyKey", propertyKey);
        console.log("methodA(): descriptor", descriptor.value = 3);
        console.log("methodA(): called");
    };
}
function classDecorator(constructor) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.newProperty = "new property";
            _this.hello = "override";
            return _this;
        }
        return class_1;
    }(constructor));
}
var Demo = /** @class */ (function () {
    function Demo(m) {
        this.property = "property";
        this.hello = m;
    }
    Demo.prototype.show = function (args) {
        console.log('hello', args);
    };
    __decorate([
        methodA()
    ], Demo.prototype, "show", null);
    Demo = __decorate([
        classDecorator
    ], Demo);
    return Demo;
}());
console.log(new Demo("world"));
