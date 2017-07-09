

// class decorator definition
function ClassDecoratorParams(param1: number, param2: string) { 

        return function(target: Function) // The class the decorator is declared on) 
        {
            console.log("ClassDecoratorParams(" + param1 + ", '" + param2 + "') called on: ", target);    
        } 


    
}

//method decorator definition
function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    }

}    

//method decorator calling
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }

    @enumerable(false)
    greet() {
        return "Hello, " + this.greeting;
    }
}
 

//class decorator calling
@ClassDecoratorParams(1,"b")
@ClassDecoratorParams(2,"c")
export class ClassDecoratorParamEx {

    constructor() {

        console.log("ClassDecoratorparamEx is created")

    }
}


let obj1 = new ClassDecoratorParamEx();
let obj2 = new Greeter("Deepak");
obj2.greet();