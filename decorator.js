"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// class decorator definition
function ClassDecoratorParams(param1, param2) {
    return function (target) {
        console.log("ClassDecoratorParams(" + param1 + ", '" + param2 + "') called on: ", target);
    };
}
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
//method decorator calling
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
__decorate([
    enumerable(false)
], Greeter.prototype, "greet", null);
var ClassDecoratorParamEx = (function () {
    function ClassDecoratorParamEx() {
        console.log("ClassDecoratorparamEx is created");
    }
    return ClassDecoratorParamEx;
}());
ClassDecoratorParamEx = __decorate([
    ClassDecoratorParams(1, "b"),
    ClassDecoratorParams(2, "c")
], ClassDecoratorParamEx);
exports.ClassDecoratorParamEx = ClassDecoratorParamEx;
var obj1 = new ClassDecoratorParamEx();
var obj2 = new Greeter("Deepak");
obj2.greet();
