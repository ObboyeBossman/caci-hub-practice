// console.log("CACI Hub — Day 1")

// CONST
// Cannot redeclare a variable with let or const
const name = "Kwame";

// name = "Kofi"; // Error

// LET
// When a variable may change in value, use [let]
// let age = 20;
// age = 21;


// JavaScript Data Types
const fullname = "Kwame Mensah"; // string
const age = 34; //number
const active = true; // boolean
const phoneNumber = null; // null (typeof returns "object" because of a historical JS bug)
let household; // undefined

console.log(typeof (fullname));
console.log(typeof (age));
console.log(typeof (active));
console.log(typeof (phoneNumber));
console.log(typeof (household));


// OPERATORS
// Arithmetic
console.log(10 + 5);
console.log(10 - 5);
console.log(10 * 5);
console.log(10 / 5);
console.log(10 % 3);

// Comparison
console.log(age >= 18);
console.log(age === 34);
console.log(age !== 50);

// Logical 
console.log(true && true);
console.log(true || false);
console.log(!true);

// TEMPLATE LITERALS
// Instead of:
console.log("Hello " + fullname);
// Use
console.log(`Hello ${fullname}`);

// STRING METHODS
const text = '   kwame asante   ';
// Length
text.length;
// Uppercase:
text.toUpperCase();
// Lowercase:
text.toLowerCase();
// Remove extra spaces:
text.trim();
// Check for text:
text.includes("kwame");
// Replace:
text.replace("Kwame", "kofi")


const memberName = "  kwame asante  ";
const memberAge = 34;
const isActive = true;
const phone = null;

// Clean the name
const cleanName = memberName
    .trim()
    .split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ");

    // Print a formatted summary
    console.log(`Name: ${cleanName}`);
    console.log(`Age: ${memberAge}`);
    console.log(`Active: ${isActive}`);
    console.log(`Phone: ${phone ?? "Not Provider"}`);
    console.log(`Over 18: ${memberAge >= 18}`);
    console.log(`Type of phone: ${typeof phone}`);