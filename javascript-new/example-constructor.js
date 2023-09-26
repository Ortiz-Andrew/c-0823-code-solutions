function ExampleConstructor() {}
console.log('value of prototype:', ExampleConstructor.prototype);
console.log('typeof prototype:', ExampleConstructor.prototype);

const instance = new ExampleConstructor();
console.log(instance);

const isInstanceOf = instance instanceof ExampleConstructor;
console.log(isInstanceOf);
