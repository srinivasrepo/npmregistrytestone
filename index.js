"use strict";
const fetch = require("node-fetch");
fetch('https://jsonplaceholder.typicode.com/user/1')
    .then(resp => resp.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
exports.__esModule = true;
const requirePath = require('path');
var cowsay = require("cowsay");
console.log( ".......... requirePath.dirname(__filename) = " + requirePath.dirname(__filename));
//  console.log(".......... importPath.dirname(__filename) = " + importPath.dirname(__filename));
 console.log(".......... just __dirname = " + __dirname);
console.log(cowsay.say({text : "Haha__ All path fns are same idiot !!"}))
console.log(process.env);
var arr = [99, 1, 1, 1, 1, 3, 3, 3, 33, 5, 5, 5, 55, 6, 6, 6, 6, 6, 6, 6, 6, 7, 8, 8, 8, 9, 9, 8, 8, 7, 6, 6, 6, 65, 5];
var searchNum = 33;
var setVar = new Set();
arr.sort(function (a, b) { return a - b; }).forEach(function (n) { setVar.add(n); });
console.log(cowsay.say({ text: "Is " + searchNum + " present in " + Array.from(setVar) + " =>  " + setVar.has(searchNum) }));
console.log("🍕");
