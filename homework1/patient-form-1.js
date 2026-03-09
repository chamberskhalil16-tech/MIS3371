 /*
Name: Patient form Javascript
Date created: 2/27/26
Date last edited: 2/27/26
Version: 1.0
Description: Bill's Medical form JavaScript
*/ 

//Date & Time
const d = new Date();
let text = d.toLocaleDateString();
let te= d.getHours
document.getElementById("Today").innerHTML = text;
document.getElementById("hours").innerHTML = text;

//Slider
let slider = document.getElementById("range");
let output = document.getElementById("slider");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
};