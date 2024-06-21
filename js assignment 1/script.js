         ///JAVASCRIPT ASSIGNMENT-1
//Q1Write a script to greet your website visitor using JS alert box.(Welcome to Our Website)
alert("Welcome to Our Website!");
//Q2Write a script to display message on your web page.(Error!Please Enter avalid password)
alert("Error! Please Enter avalid password")
//Q3.Write a script to display message on your web page: (Hint : Use line break)
alert("Hint : Use line break")
//Q4Write a script to display messages in sequence (3 Alerts)
alert("First alert!");
alert("Second alert!");
alert("Third alert!");
//Q5Make use of alerts in your new/existing HTML & CSS project
//alert("New alert in Question 5")
alert("New alert in Question 5");
//Q6 Practice placement of element in following sections of your project in
//exercise 5:
//a. Head
//b. Body (before your page’s HTML)
//c. Body (inside your page’s HTML)
//d. Body (after your page’s HTML)


//Q7Declare a variable called username
let username = "";
//Q8Declare a variable called myName & assign to it a string that represents
//your Full Name
let myName = "fatima ali";
//Q9. Write script to
//a) Declare a JS variable, titled message.
//b) Assign “Hello World” to variable message
//c) Display the message in alert box.
let message;
message="Hello World";
 alert(message);
//Q10.Write a script to save student’s bio data in JS variables and show the data in
//alert boxes.
let studentName = "fatima ali";
let studentAge = 21;
let studentCity = "Karachi";
alert("Student Name: "+ studentName + ",  Student Age: " + studentAge + ",   Address: " + studentCity);

//Q11 Declare a variable called email and assign to it a string that represents your
//Email Address(e.g. example@example.com). Show the blow mentioned
//message in an alert box.(Hint: use string concatenation)
let email = "fatima.ali2476@gmail.com";
alert("My email address is " + email);
//12.Write a script to display this in browser through JS.
let myname = "FATIMA";
document.write(" my name is " + myName + ".");
//Q13.Store following string in a variable and show in alert and browser through JS
//“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”
let  storeString = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(storeString);
document.write(storeString);
//Q14.Declare a variable called age & assign to it your age. Show your age in an
//alert box.
// Replace 29 with your actual age
var age = 21;
alert("Your age is: " + age);
//Q15.Declare & initialize a variable to keep track of how many times a visitor has
//visited a web page. Show his/her number of visits on your web page. For
//example: “You have visited this site N times”.
// Declare and initialize a variable to store the number of visits
let numVisits = localStorage.getItem('numVisits') ||0 ;
// Increment the number of visits each time the page is loaded
numVisits++;
// Store the updated number of visits in local storage
localStorage.setItem('numVisits', numVisits);
// Display the number of visits on the web page
document.write(`You have visited this site ${numVisits} times`);
//Q16.Declare a variable called birthYear & assign to it your birth year. Show the
//following message in your browser:
let birthYear = 2003;
document.write("My birth year is " + birthYear + ".");
//Q17.A visitor visits an online clothing store www.xyzClothing.com . Write a script
//to store in variables the following information: a. Visitor’s name b. Product
//title c. Quantity i.e. how many products a visitor wants to order Show the
//following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ
//Clothing store”.
let visitorName = "John Doe";
let productTitle = "T-shirt";
let quantity = 5;
document.write(visitorName + " ordered " + quantity + "  " + productTitle + " ");
//Q18.Declare 3 variables in one statement.
let a = 32, b = 42, c =21;
//Q19.Declare 5 legal & 5 illegal variable names.
//Legal variable names
var age;
var firstName;
var user123;
var _isValid;
var $amount;

// Illegal variable names
varuser;
varmy-name;
vartrue;
varvar;
varbreak;

//Q20.Display this in your browser
//a) A heading stating “Rules for naming JS variables”
//b) Variable names can only contain ______, ______, ______ and ______. For
//example $my_1stVariable
//c) Variables must begin with a ______, ______ or _____. For example
//$name, _name or name
//d) Variable names are case ___
//e) Variable names should not be JS _________
document.write("<h1>Rules for naming JS variables</h1>");
document.write("<p>Variable names can only contain letters, numbers, underscores, and dollar signs. For example $my_1stVariable</p>");
document.write("<p>Variables must begin with a letter, underscore (_) or dollar sign ($). For example $name, _name or name</p>");
document.write("<p>Variable names are case-sensitive</p>");
document.write("<p>Variable names should not be JavaScript reserved keywords</p>");
//Q21.Write a program that take two numbers & add them in a new variable.
//Show the result in your browser.
//Q22.Repeat task21 for subtraction, multiplication, division & modulus.
 var num1 = parseFloat(prompt("Enter the first number:"));
 var num2 = parseFloat(prompt("Enter the second number:"));
 var sum = num1 + num2;
 var difference = num1 - num2;
 var product = num1 * num2;
 var quotient = num1 / num2;
 var remainder = num1 % num2;
 document.write("<p>Addition: " + num1 + " + " + num2 + " = " + sum + "</p>");
 document.write("<p>Subtraction: " + num1 + " - " + num2 + " = " + difference + "</p>");
 document.write("<p>Multiplication: " + num1 + " * " + num2 + " = " + product + "</p>");
 document.write("<p>Division: " + num1 + " / " + num2 + " = " + quotient + "</p>");
 document.write("<p>Modulus: " + num1 + " % " + num2 + " = " + remainder + "</p>");
//Q23.Do the following using JS Mathematic Expressions
//a. Declare a variable.
//b. Show the value of variable in your browser like “Value after variable
//declaration is: ??”.
//c. Initialize the variable with some number.
//d. Show the value of variable in your browser like “Initial value: 5”.
//e. Increment the variable.
//f. Show the value of variable in your browser like “Value after
//increment is: 6”.
//g. Add 7 to the variable.
//h. Show the value of variable in your browser like “Value after addition
//is: 13”.
//i. Decrement the variable.
//j. Show the value of variable in your browser like “Value after
//decrement is: 12”.
//k. Show the remainder after dividing the variable’s value by 3.
//l. Output : “The remainder is : 0”.
// a. Declare a variable

//24.Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a
//variable & calculate the cost of buying 5 tickets to a movie.

//Q25.write a script to display multiplication table of any number in your browseWr.
