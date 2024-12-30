let age =27;
if (age > 15){
    console.log("you are an adult")
}



let score =45;
if (score <= 50){
    console.log("you failed the test")
}




let name ="john";
if(name ==="john"){
    console.log("Hello, john");
}





let day = "monday";
if(day !== "saturday"  && day !== "saturday"){
    console.log("It's a weekday");
}





let num =4;
if (num % 2==0){
   console.log ( "the number is even");
}




let cher ="a";
if(cher .length === 1 && /[a-s-A-d]/.test(cher)){
    console.log("It's a letter");
}


let list =[1,2,3] ;
 if(typeof list === "object"&& list !== null && "length" in list &&   list.length === "number"){

 console.log("It's an array");

}
else{
    console.log("It's an array");
}




let x = 5;

if (x > 0){
    console.log("x is a positive number");
}




let y = -5;

if (y < 0){
    console.log("y is a positive number");
}



let z = 9;
if (z % 3 === 0){
    console.log("z is a multiple of 3");
}




let GPA = "A";

switch (GPA.toUpperCase()) {
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Very Good");
        break;
    case "C":
        console.log("Good");
        break;
    case "F":
        console.log("Failed");
        break;
    default:
        console.log("Invalid GPA");
}







// EX12




let password = "mypassword123";

if (password.length >= 8) {
    console.log("Your password is strong");

}






let email = "admin@admin.com";
let password = "12345Admin";

if (email !== "admin@admin.com") {
    console.log("Incorrect email");
} 
else if (password !== "12345Admin") {
    console.log("Incorrect password");
} 
else {
    console.log("Welcome");
}




// 15


