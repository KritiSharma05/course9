let firstName = "John";
let lastName = "Smith";
let age = 34;
let isMarried = true;
let city = "San Jose";
let state = "California";
let postalCode = "CA";

// Provide solution code here for Validating FirstName

if(firstName != null){
    console.log("First name is defined");
}else{
    console.log("First name value  not  defined");
}
if(typeof(firstName)=="string"){
    console.log("First name is type string");
}else{
    console.log("First name is not type string");
}
// Provide solution code here for Validating LastName
if(lastName != null){
    console.log("Last name is defined");
}else{
    console.log("Last name value  not  defined");
}
if(typeof(lastName)=="string"){
    console.log("Last name is type string");
}else{
    console.log("Last name is not type string");
}

// Provide solution code here for Validating Age

if(age != null){
    console.log("Age is defined");
}else{
    console.log("Age value  not  defined");
}
if(typeof(age)=="number"){
    console.log("Age is type number");
}else{
    console.log("Age is not type number");
}
if(age>= 18 || age <= 60){
    console.log("Age value between 18 and 60");
}else{
    console.log("Not a valid age");
}
// Provide solution code here for Validating isMarried
if(isMarried){
    console.log("Married");
}else{
    console.log("Not married");
}

// Provide solution code here for Validating City
if(typeof(city)=="string"){
    console.log("city is type string");
}else{
    console.log("city  is not type string");
}

// Provide solution code here for Validating State

if(typeof(state)=="string"){
    console.log("state is type string");
}else{
    console.log("state is not type string");
}
// Provide solution code here for Validating Postal Code
if(postalCode != null){
    console.log("postal code is defined");
}else{
    console.log("postal code  not  defined");
}
if(typeof(postalCode)=="string"){
    console.log("postal code is type string");
}else{
    console.log("postal code is not type string");
}
 
 