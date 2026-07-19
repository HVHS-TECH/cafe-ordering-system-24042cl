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
let prices = [];
let items = [];
let productNumber
let cartValue

/****************************
Main code
****************************/
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
/****************************
Functions
****************************/
items = ["Campbell Turner", "Ashley Bird", "Harold Howard", "Stephan Szabo"]
prices = [3.68, 5.50, 6.70, 5.05]
function addProduct_0(){
    productNumber = 0
shoppingCart.push(items[productNumber],prices[productNumber]);
    OUTPUT.innerHTML += "Added "+items[productNumber]+" to cart<br>";
}

function addProduct_1(){
    productNumber = 1
shoppingCart.push(items[productNumber],prices[productNumber]);
    OUTPUT.innerHTML += "Added "+items[productNumber]+" to cart<br>";
}
function addProduct_2(){
    productNumber = 2
shoppingCart.push(items[productNumber],prices[productNumber]);
    OUTPUT.innerHTML += "Added "+items[productNumber]+" to cart<br>";
}
function addProduct_3(){
    productNumber = 3
shoppingCart.push(items[productNumber],prices[productNumber]);
    OUTPUT.innerHTML += "Added "+items[productNumber]+" to cart<br>";
}
function showCart(){

    OUTPUT.innerHTML += "Cart Contents:<br>";

    for (let i=0; i < shoppingCart.length; i++){
    OUTPUT.innerHTML += shoppingCart[i]+": $"+shoppingCart[i+1]+"<br>";
 i=i+1;
}
}
function cartTotal(){
    cartValue = 0;

    OUTPUT.innerHTML += "Total Cost of Items in Cart:";

    for (let i=1; i < shoppingCart.length; i++){
        cartValue = cartValue + shoppingCart[i]
 i=i+1;
}
 OUTPUT.innerHTML += " $"+cartValue+"<br>";
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
 
if (money >= prices[0]){
    OUTPUT.innerHTML += "<p>You CAN afford Campbell.</p>"
}else{
    OUTPUT.innerHTML += "<p>You CAN'T afford Campbell.</p>"
}
if(shoppingCart)
if (money >= prices[1]){
    OUTPUT.innerHTML += "<p>You CAN afford Ashley.</p>"
}else{
    OUTPUT.innerHTML += "<p>You CAN'T afford Ashley.</p>"
}
if (money >= prices[2]){
    OUTPUT.innerHTML += "<p>You CAN afford Harold.</p>"
}else{
    OUTPUT.innerHTML += "<p>You CAN'T afford Harold.</p>"
}
if (money >= prices[3]){
    OUTPUT.innerHTML += "<p>You CAN afford Stephan.</p>"
}else{
    OUTPUT.innerHTML += "<p>You CAN'T afford Stephan.</p>"
}
const CHANGE_FIELD = document.getElementById("changeField");

cartTotal()
if (change >= 0.0){
 change = money - cartValue;
 OUTPUT.innerHTML += "<p>Your change is $"+change.toFixed(2)+"</p>"
}
else
{ OUTPUT.innerHTML += "<p>You don't have enough money to buy these."}

 const WEEK_FIELD = document.getElementById("weekField");
 let weekDay = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

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