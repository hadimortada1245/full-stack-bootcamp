console.log('I am linked now!');
const name="Hadi Mortada";
alert(name);
let age =22;//It's OK change the values of variables when we use var and let 
var lastName="Mortada";
const DOB="2002-08-04";
/*DOB="2002-08-03";script.js:7 Uncaught TypeError: Assignment to constant variable.
at script.js:7:4*/
console.log(age);
console.log(lastName);
console.log(DOB);
console.log(typeof("This is a text"));
console.log(typeof(true));
console.log(typeof(false));
console.log(typeof(1215));
console.log(typeof(999));
console.log(typeof(`{}`));
console.log(typeof(`[]`));
console.log(typeof(null));
console.log(undefined);
let n=12;
let gender="Male";
let isVAlid=true;
var tax=15.2;
var ch='t';
let array=[];
console.log(n+" is a "+typeof(n));
console.log(gender+" is a "+typeof(gender));
console.log(isVAlid+" is a "+typeof(isVAlid));
console.log(tax+" is a "+typeof(tax));
console.log(ch+" is a "+typeof(ch));
console.log(array+" is a "+typeof(array));
let myText="Hello this is Javascript";
let first="Here we go";
let second='Here we go';
let third=`Here we go`;
// interpolation is how to put a value into a string
let str="Hello "+name+ "DO YOU LOVE JS";
let secondway=`Hello ${name} WE KNOW THAT YOU LOVE JS`;
const counter = 3;
const backtick = `This is my text using backticks ${counter} times`;
const singleQuote =
  'This is my text using single quotations ${counter} times';
const doubleQuote =
  'This is my text using double quotations ${counter} times';
const tryThisAlso = `This is my new version, it’s the ${2 + 3}th version`;
console.log(backtick);
console.log(singleQuote);
console.log(doubleQuote );
// if you want to dispaly the value of counter you can do it only by using these `` 