//"use strict";

console.log("Hello Prakash");

// creating a vatiable using var keyword declaration and intilization
// both are done at same time
var name = "Developer";

// use the variable
console.log(name);

// now this variable can be re assigned again
name = "Java Script";

console.log(name);

// lets just declare a variable and see what it hold by default
var somevalue;

// we have decalred the variable but have not initalize it with any value 
// so lets see what comes out
console.log(somevalue);

// we will see the vaule for variable somevalue is undefined
// now what is undefine in JS and why the variable by default has this value

// if I just try to access something that I have not decalread or intilize what 
// will happen lets try
//console.log(trymeout);
// so we see in the console error refrenceerror trymeout is not defined.

// use strict can help in solving some unexpected behaviour

// Rules for naming a js variable

// 1. A js variable can not start with number like this
// this will break your all js code as  it fail to compile
// and rest of the code will also not work, means I won't
// be able to see any other variables output here after
// some comment this for now
//var 1incorect = "value";

// from special charater we can only use _ or $ to name a vriable
// like this
var $codeme;
var _codeMe;

// we can also use let keyword to define a js variable
// like this. let is strict defination of variable, don't 
// let you define the same name again in the same scope.
// but var can allow you to define and redefine same 
// vraible name in a scope multiple time.
let myName = "name";

// we can also declare constant using the keyword const
// like this
const myConst = "value";
//Note you need to define and intialize const at the same time
// you can not keep it unintialized

//string indexing
let balance = "some-money";
// we can access each charater of a string by an index numer
console.log(balance[4]);

