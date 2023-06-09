console.log('Hello World')
//single line comment
/*multi
line comment*/ 

//variable datatype string,number,undefined,null,bigInt,symbol(uniqueness)
 
//non-primitive array, object

//primitive
var name = "Sajan"
console.log(name)
console.log(typeof name)
var age = 22
console.log(typeof age)
var work = true
console.log(typeof work)
var abc;
console.log(typeof abc)
var bcd=null;//kind of bug // primitive datatype onject single value throws object then primitive
console.log(typeof bcd)
var ph=1234567888891987654322555555555221;
console.log(typeof ph)
console.log(BigInt(ph))
var a=Symbol('sas')//checks the uniqueness
var b=Symbol('sas')
  
console.log(typeof a == b) 
console.log(a==b);
var a='sas'
var b='sas'
console.log(a==b);
//non-primitive datatype

//array
var fr = ['ran', 'se', 'ta']
console.log(typeof fr);
var obj = {id:1, name:"ss", age:22}// non primitive type of object
console.log(typeof obj);


//can re assign value while using var can reassign can redeclare
//global scopic
var fname='sajan'
console.log(fname);
var fname = "arambha"
console.log(fname);
//cant redeclare the same variable while using let but can reassign
//blockscopic
let lname="hi"
console.log(lname);
lname = "hellloif"
console.log(lname);
//cant redeclare cant reassign in const
//blockscopic
const nn='rat'
console.log(nn);
// nn='cat'
// console.log(nn);

//var is global scopic so after reassigning the latest value is taken
var l = 33
if(true) {
    var l = 2
    console.log(l);
}
console.log(l);

//using let it is block scopic 
let ll = 33
if(true) {
    let ll = 2
    console.log(ll);
}
console.log(ll);
