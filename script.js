/****************************
Name of task: Validation
****************************/
console.log("Running t01_javascriptAndHtml.js")

//Variables
 let userName
 let age
 let money
 let change
 let shoppingCart = [];
let campbell
let ashley
let harold
let stephan
let prices = [];
let items = [];

/****************************
Main code
****************************/
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
displayWelcome(3.68 , 5.5 , 6.7, 5.05);
/****************************
Functions
****************************/


//shopping list
function displayWelcome(campbell, ashley, harold, stephan){
    OUTPUT.innerHTML += "<p>Campbell: $"+ campbell +"</p>";
    OUTPUT.innerHTML += "<p>Ashley: $"+ ashley +" </p>";
    OUTPUT.innerHTML += "<p>Harold: $"+ harold +" </p>";
    OUTPUT.innerHTML += "<p>Stephan: $"+ stephan +" </p>";
}
items = ["Campbell Turner", "Ashley Bird", "Harold Howard", "Stephan Szabo"]
prices = [3.68, 5.50, 6.70, 5.05]
function addCampbell(){
shoppingCart.push("Campbell");
    OUTPUT.innerHTML += "Added Campbell to cart<br>";
}
function addAshley(){
shoppingCart.push("Ashley");
    OUTPUT.innerHTML += "Added Ashley to cart<br>";
}
function addHarold(){
shoppingCart.push("Harold");
    OUTPUT.innerHTML += "Added Harold to cart<br>";
}
function addStephan(){
shoppingCart.push("Stephan");
    OUTPUT.innerHTML += "Added Stephan to cart<br>";
}
function showCart(){

    OUTPUT.innerHTML += "Cart Contents:<br>";

    for (let i=0; i < shoppingCart.length; i++){
    OUTPUT.innerHTML += shoppingCart[i]+"<br>";
  }
}
function getFormInput(){
    const NAME_FIELD = document.getElementById("nameField");
    if (NAME_FIELD.checkValidity()=== false)  {
    OUTPUT.innerHTML = "Please fill out the form correctly"
}else{
userName = NAME_FIELD.value;
 OUTPUT.innerHTML = "<p> Your name is "+userName+"</p>"
}
const AGE_FIELD = document.getElementById("ageField");
if (AGE_FIELD.value < 0){
    OUTPUT.innerHTML = "<p>How are you alive??</p>"
} else if (AGE_FIELD.value > 100){
    OUTPUT.innerHTML += "You are probably not alive anymore??"
} else if (AGE_FIELD.value == 0){
    OUTPUT.innerHTML += "You are a newborn??"
} else if (AGE_FIELD.value == 100){
    OUTPUT.innerHTML += "Congrats on being alive for a century!!"
}
if (AGE_FIELD.checkValidity()=== false)  {
    OUTPUT.innerHTML = "Please fill out the form correctly"
}else{
age = AGE_FIELD.value;
 OUTPUT.innerHTML += "<p> You are "+age+" years old"+"</p>"
}
 
 const MONEY_FIELD = document.getElementById("moneyField");
if (MONEY_FIELD.value < 0){
    OUTPUT.innerHTML += "You can't have negative money!!"
} else if (MONEY_FIELD.value > 1000){
    OUTPUT.innerHTML += "You are a millionaire!!"
} else if (MONEY_FIELD.value == 0){
    OUTPUT.innerHTML += "You are broke!!"
} else if (MONEY_FIELD.value == 1000){
    OUTPUT.innerHTML += "Congrats on being a millionaire!!"
}
if (MONEY_FIELD.checkValidity()=== false)  {
    OUTPUT.innerHTML = "Please fill out the form correctly"
}else{
money = MONEY_FIELD.value;
 OUTPUT.innerHTML += "<p> You have "+money+" dollars"+"</p>"
}

 displayWelcome(3.68 , 5.5 , 6.7, 5.05);
 
if (money >= 3.68){
    OUTPUT.innerHTML += "<p>You CAN afford Campbell.</p>"
}else{
    OUTPUT.innerHTML += "<p>You CAN'T afford Campbell.</p>"
}
if(shoppingCart)
if (money >= 5.5){
    OUTPUT.innerHTML += "<p>You CAN afford Ashley.</p>"
}else{
    OUTPUT.innerHTML += "<p>You CAN'T afford Ashley.</p>"
}
if (money >= 6.7){
    OUTPUT.innerHTML += "<p>You CAN afford Harold.</p>"
}else{
    OUTPUT.innerHTML += "<p>You CAN'T afford Harold.</p>"
}
if (money >= 5.05){
    OUTPUT.innerHTML += "<p>You CAN afford Stephan.</p>"
}else{
    OUTPUT.innerHTML += "<p>You CAN'T afford Stephan.</p>"
}
const CHANGE_FIELD = document.getElementById("changeField");
 change = money - 4;
 CHANGE_FIELD.value = change;
 OUTPUT.innerHTML += "<p>Your change is $"+change+"</p>"

 const WEEK_FIELD = document.getElementById("weekField");
 let weekDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

 let choice = Number(WEEK_FIELD.value);


 if (age < 20){
    console.log("prolly too young yo")
}
if (age > 20){
    console.log("unc")
}
if (age == 20){
    console.log("this is good")
}
}