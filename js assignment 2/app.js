//Write a program to take a number in a variable, do the required 
//arithmetic to display the following result in your browser: 
let num = 10;
document.write("<h2>Result:</h2>");
document.write("The value of  a is: " + num + "<br>");
document.write("-----------------------------------------------" + "<br><br><br>");
document.write("The value of ++a is: " + ++num + "<br>");
document.write("Now value of a is: 11" + "<br><br>");

document.write("The value of a+ is: " + num++ + "<br>");
document.write("Now value of a+ is: 12" + "<br><br>");

document.write("The value of --a is: " + --num + "<br>");
document.write("Now value of a is: 11" + "<br><br>");

document.write("The value of a- is: " + num-- + "<br>")
document.write("Now value of a is: 10" + "<br><br><br><br><br>");
// What will be the output in variables a, b & result after execution of 
//the following script: var a = 2, b = 1; var result = --a - --b + ++b + b-
//-; 
//Explain the output at each stage: 
//--a; 
//--a - --b; 
//--a - --b + ++b; 
//--a - --b + ++b + b--;

let a = 2, b = 1;
let result = --a - --b + ++b + b--;
document.write("<br><br><br><h2>Result:</h2>");
document.write("The value of a is a: 2 " + "<br>");
document.write("The value of a is b: 1 " + "<br>");
document.write("------------------------------------------" + "<br><br>");
document.write(" a is: " + a + "<br>");
document.write(" b is: " + b + "<br>");
document.write(" result is: " + result + "<br><br>");
//write a program that takes input a name from user & greet the 
//user. 
let name = prompt("Enter your name: ");
document.write("Hello " + name + "! <br><br><br>");

//Write a program to take input a number from user & display its 
//multiplication table on your browser. If user does not enter a new 
//number, multiplication table of 5 should be displayed by default. 




let sub_1 = prompt("Enter subject 1"); 
let sub_2 = prompt("Enter subject 2"); 
let sub_3 = prompt("Enter subject 3"); 

// b) Total marks for each subject is 100, store it in another variable.

let total = 100;

// c) Take obtained marks for first subject from user and stored it in different variable.
alert("Enter marks of subject 1");
let marks_1 = parseInt(prompt());

// d) Take obtained marks for remaining 2 subjects from user and store them in variables.

alert("Enter marks of subject 2");
let marks_2 = parseInt(prompt());

alert("Enter marks of subject 3");
let marks_3 = parseInt(prompt());

// e) Now calculate total marks and percentage and show the result in  browser like this. (Hint: user table)

let total_marks = marks_1 + marks_2 + marks_3;

document.write(`<br><br> <table style=" height="400" border="1" celpadding="6" celspacing="2"  ">
  
  <tr>
  
  <th>&nbsp;&nbsp;&nbsp;&nbsp;       Subject       &nbsp;&nbsp;&nbsp;&nbsp;</th>
  <th>&nbsp;&nbsp;&nbsp;&nbsp;         Total          &nbsp;&nbsp;&nbsp;&nbsp;</th>
  <th>&nbsp;&nbsp;&nbsp;&nbsp;          Obt Marks        &nbsp;&nbsp;&nbsp;&nbsp;</th>
  <th>&nbsp;&nbsp;&nbsp;&nbsp;            Percentage               &nbsp;&nbsp;&nbsp;&nbsp;</th>
  
  </tr>
  

  <tr align="center">
  <td>${sub_1}</td>
  <td>${total}</td>
  <td>${marks_1}</td>
  <td>${(marks_1 / total) * 100}%</td>
  
  </tr>
  
  <tr align="center">
  <td>${sub_2}</td>
  <td>${total}</td>
  <td>${marks_2}</td>
  <td>${(marks_2 / total) * 100}%</td>
  
  </tr>
  
  <tr align="center">
  <td>${sub_3}</td>
  <td>${total}</td>
  <td>${marks_3}</td>
  <td>${(marks_3 / total) * 100}%</td>
  
  </tr>
  <tr align="center">
  
  <td colspan="2">300</td>
  <td>${total_marks}</td>
  <td>${((total_marks / 300) * 100).toFixed(2)}</td>
  
  </tr>

  </table>`);

