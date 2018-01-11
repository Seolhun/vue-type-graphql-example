"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Spread = /** @class */ (function () {
    function Spread() {
        this.items = [
            {
                id: 1,
                name: 'seolhun1',
            },
            {
                id: 2,
                name: 'seolhun2',
            },
            {
                id: 3,
                name: 'seolhun3',
            },
        ];
    }
    Spread.prototype.for = function () {
        this.items.forEach(function (item) {
            console.log(item);
        });
    };
    Spread.prototype.spread = function () {
        console.log.apply(console, this.items);
    };
    Spread.prototype.run = function () {
        this.for();
        this.spread();
    };
    return Spread;
}());
exports.default = Spread;
