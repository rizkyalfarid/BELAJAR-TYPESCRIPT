var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(merk, color, maxSpeed) {
        this.merk = merk;
        this.color = color;
        this.maxSpeed = maxSpeed;
    }
    return Vehicle;
}());
var Mobil = /** @class */ (function (_super) {
    __extends(Mobil, _super);
    function Mobil(merk, color, maxSpeed, wheels, factory) {
        var _this = _super.call(this, merk, color, maxSpeed) || this;
        _this.wheels = wheels;
        _this.factory = factory;
        return _this;
    }
    return Mobil;
}(Vehicle));
var Hyundai = new Mobil("Hyundai", "Silver", 250, 4, "Daihatsu");
console.log(Hyundai);
