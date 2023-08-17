let myage =22;
if(myage >=20)
    console.log("You can enter this room.");
else
    console.log("You can't enter this room.");
    const expression1 = 5 > 3;// true
    const expression2 = 10 === '10';// false
    const expression3 = true && false;// false
    const expression4 = !expression3;//true
    console.log(expression1);
    console.log(expression2);
    console.log(expression3);
    console.log(expression4);
 const age = 25;
const hasDriverLicense = true;
const hasCar = false;
let canDrive=false;
if(age>=18&&hasDriverLicense)
    canDrive=true;
let canRentCar=false;
if(age>=2&&hasDriverLicense&&!hasCar)
    canRentCar=true;
let needDriver=false;
if(age<18&&!hasDriverLicense&&!hasCar)
    needDriver=true;
var role="admin";
switch(role){
    case "admin":console.log("You have read and write access for the data.");
        break;
    case "user":console.log("You have only read access for the data");
        break;
    case "guest":console.log("You have no access for the data");
        break;
     default:console.log("User role is not recoginized");   
}

