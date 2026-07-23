
console.log("Running t01_javascriptAndHtml.js")

//Variables
 let userName
 let day = [];
 let money
 let change
 let shoppingCart = [];
let prices = [];
let items = [];
let productNumber
let cartValue
let credit


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

    OUTPUT.innerHTML += "<b>Cart Contents:<br>";

    for (let i=0; i < shoppingCart.length; i++){
    OUTPUT.innerHTML += shoppingCart[i]+": $"+shoppingCart[i+1]+"<br><br>";
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
}else{
userName = NAME_FIELD.value;
 OUTPUT.innerHTML = "<p> Thank you for your order "+userName+"</p>"
}

/* FUNCTIONS UNDER DEVELOPMENT

if (items.length === 0){
      OUTPUT.innerHTML = "<p>You haven't added anything to your cart</p>"
}

const DAY_FIELD = document.getElementById("dayField");


day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

function addMonday(){
  visitDay.push(day[0]); 
}

function addTuesday(){
  day = "Tuesday";
}
function addWednesday(){
  day = "Wednesday";  
}
function addThursday(){
  day = "Thursday";  
}
function addFriday(){
  day = "Friday";  
}
 */
 const MONEY_FIELD = document.getElementById("moneyField");

if (MONEY_FIELD.checkValidity()=== false)  {
}else{
money = MONEY_FIELD.value;
/*credit = money;
*/
 OUTPUT.innerHTML += "<p>Your available credit is $"+money+"</p>"
}
OUTPUT.innerHTML += "<b>Cart Contents:<br>";

    for (let i=0; i < shoppingCart.length; i++){
    OUTPUT.innerHTML += shoppingCart[i]+": $"+shoppingCart[i+1]+"<br><br>";
 i=i+1;
}
/*
 if(shoppingCart){
    OUTPUT.innerHTML += "<p>You've requested "+visitDay+" for your visit.</p>"
}
    */
   const CHANGE_FIELD = document.getElementById("changeField");

/*
if (money <= prices){
 OUTPUT.innerHTML += "<p>You don't have enough money to buy these item(s)."
}
 */
 change = money - cartValue;
if (change > 0.0){
{ OUTPUT.innerHTML += "<p>Your change is $"+change.toFixed(2)+"</p>"}
}else{
OUTPUT.innerHTML += "<p>You don't have enough money to buy these item(s)."
} 
if (shoppingCart.length > 0){
if (money >= prices[0]){
    OUTPUT.innerHTML += "<p>You CAN afford Campbell.</p>"
}else{
    OUTPUT.innerHTML += "<p>You CAN'T afford Campbell.</p>"
}

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
}

}
