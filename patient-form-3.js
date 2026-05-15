 /*
Name: Patient form Javascript
Date created: 2/27/26
Date last edited: 4/14/26
Version: 3.0
Description: Bill's Medical form JavaScript
*/ 

//Date & Time
const date = new Date();
let text = date.toLocaleDateString();
let hours = String(date.getHours()).padStart(2, '0');
let minutes = String(date.getMinutes()).padStart(2, '0');
let timeString = `${text} ${hours}:${minutes}`;
document.getElementById("Today").innerHTML = timeString;

//Slider
let slider = document.getElementById("range");
let output = document.getElementById("slider");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
};

//checking First Name
function validateFirstName()
{
    //Defines First Name Variable and Pattern
    firstN = document.getElementById("FirstN").value.trim();
    var nameFPattern = /^[a-zA-Z'-]+$/;

    //Checks if first name is empty
    if (firstN == "")
        {document.getElementById("First-Name-error").innerHTML = "Please enter your First name"
        return false;}

    //Ensures the character limit of 2 to 30 were entered
    if (firstN.length < 2 || firstN.length > 30) 
        {document.getElementById("First-Name-error").innerHTML = "First name must be between 2-30 characters";
        return false;}
    //Ensures proper characters are being used
    else if (!firstN.match(nameFPattern)) 
        {document.getElementById("First-Name-error").innerHTML = "Only Letters, dashes, and apostrophes are allowed";
        return false;}
    //If all other statements are passed, will clear error messages and allow a pass through
    else
        {document.getElementById("First-Name-error").innerHTML = "";
        return true;}
}

//check Middle Initial
function validateMInitial()
{
    middleInt =  document.getElementById("MiddleI").value;
    var Pattern = /^[a-zA-Z]$/;

    if (middleInt === "")
        {document.getElementById("Middle-Initial-error").innerHTML = "";
        return true;}
        if (!middleInt.match(Pattern)) 
            {document.getElementById("Middle-Initial-error").innerHTML = "Middle Initial can only be a letter";
            return false;}
}

//checking Last Name
function validateLastName() 
{
    //Defines First Name Variable and Pattern
    LastN = document.getElementById("LastN").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/;

    //Checks if Last name is empty
    if (LastN == "")
        {document.getElementById("Last Name-error").innerHTML = "Please enter your Last name"
        return false;}
    //Ensures the character limit of 2 to 30 were entered
    if (LastN.length < 2 || LastN.length > 30) 
        {document.getElementById("Last Name-error").innerHTML = "Last name must be between 2-30 characters";
        return false;}
    //Ensures proper characters are being used
    else if (!LastN.match(namePattern)) 
        {document.getElementById("Last Name-error").innerHTML = "Only Letters, dashes, numbers 3-5, and apostrophes are allowed";
        return false;}
    //If all other statements are passed, will clear error messages and allow a pass through
    else 
        {document.getElementById("Last Name-error").innerHTML = "";
        return true;}
}

//Checks Date of Birth
function validateDOB()
{   
    dob = document.getElementById("DOB");
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date().getFullYear() -120);

    //Checks if DOB is in the future
    if(date > new Date()) 
        {document.getElementById("dob-error").innerHTML = "Date of Birth cannot be in the future";
            return false;}
    //Checks if DOB is greater than 120 years
    else if(date < new Date(maxDate))
        {document.getElementById("dob-error").innerHTML = "Date of Birth cannot be greater than 120 years old";
            return false;}
    //If all other statements are passed, will clear error messages and allow a pass through
    else {document.getElementById("dob-error").innerHTML = "";
        return true;}
}

//Checks SSN
function validateSSN()
{
    const ssn = document.getElementById("SSN").value;
    const ssnP = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    //Checks for SSN Pattern
    if (!ssnP.test(ssn))
        {document.getElementById("ssn-error").innerHTML = "Enter a valid SSN in the 000-00-0000 format"
        return false;}
    else 
        {document.getElementById("ssn-error").innerHTML = "";
        return true;}
}

//Checks for Proper Address 1
function validateAddressLine1()
{
    ADL1 = document.getElementById("Address1").value.trim();

    //Checks if 2 to 30 characters were entered for address Line 1
    if (ADL1.length < 2 || ADL1.length > 30) 
        {document.getElementById("address1-error").innerHTML = "Address Line 1 must be between 2 to 30 characters";
        return false;}
    //If all other statements are passed, will clear error messages and allow a pass through
    else
        {document.getElementById("address1-error").innerHTML = "";
        return true;}
}

//Checks for city
function validateCity()
{
    city = document.getElementById("City").value.trim();

    //Checks if City is empty
    if (city == "")
        {document.getElementById("city-error").innerHTML = "Please enter your city name"
        return false;}

    //Checks that City field is between 2 to 30 characters
    if (city.length < 2 || city.length > 30) 
        {document.getElementById("city-error").innerHTML = "City must be between 2 to 30 characters";
        return false;}
    //If all other statements are passed, will clear error messages and allow a pass through
    else
        {document.getElementById("city-error").innerHTML = "";
        return true;}
}

//Check Zip Code
function validateZipCode()
{ 
    const zipInput = document.getElementById("Zip");
    let zip = zipInput.value.replace(/[^\d-]/g, "");

    //Checks if first name is empty
    if (zip == "")
        {document.getElementById("Zipcode-error").innerHTML = "Please enter your Zip Code"
        return false;}
    
    //If User inputs a zip code greater than 5, it will store the 4 after and slice them
    if (zip.length > 5)
    {zip = zip.slice(0,5) + "-" + zip.slice(5,9);}
    else {zip = zip.slice(0,5);}

    zipInput.value = zip;
    document.getElementById("Zipcode-error").innerHTML = "";
    return true;
}

//Check Email Address Field
function validateEmail()
{
    email = document.getElementById("Email").value;
    var emailP = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    //Check that email isn't empty
    if(email == "")
    {document.getElementById("email-error").innerHTML = "Enter an Email Address"
    return false;}

    //Matches Email to Email Pattern
    else if (!email.match(emailP))
    {document.getElementById("email-error").innerHTML = "Email Invalid, Enter a valid Email"
    return false;}

    else{document.getElementById("email-error").innerHTML = "";
    return true;}
}

//Check Phone Number
function validatePhoneNumber()
{
    const phoneN = document.getElementById("Phone");
    const phone = phoneN.value.replace(/\D/g,"");

    if (phone.length != 10)
    {document.getElementById("Phone Number-error").innerHTML = "Enter your phone number";
    return false;}

    const formattedPhone = phone.slice(0,3) +"-"+ phone.slice(3,6) +"-"+ phone.slice(6,10)
    phoneN.value = formattedPhone
    document.getElementById("Phone Number-error").innerHTML = "";
    return true;
}

//Check Username
function validateUserName()
{
    username = document.getElementById("UserID").value.trim();
    username = username.toLowerCase();
    let regex = /^[a-zA-Z0-9_-]+$/;

    //Ensures the character limit of 2 to 30 were entered
    if (username.length < 5 || username.length > 30) 
        {document.getElementById("User-Name-error").innerHTML = "Username must be between 5-30 characters";
        return false;}
    //Ensures proper characters are being used
        else if (!username.match(regex)) 
            {document.getElementById("User-Name-error").innerHTML = "Username can only contain letters, numbers, underscore, and dashes";
            return false;}
        else if (!isNaN(username.charAt(0)))
            {document.getElementById("User-Name-error").innerHTML = "Username can't begin with a number";
            return false;}
    //If all other statements are passed, will clear error messages and allow a pass through
        else
            {document.getElementById("User-Name-error").innerHTML = "";
            return true;}
}

//Checks for all password requirements
function validatePassword()
{
    const password = document.getElementById("PassW").value;
    const username = document.getElementById("UserID").value;

    const errorMessage = [];

    // Clear previous error
    document.getElementById("Password-error").innerHTML = "";

    //Check that Password isn't empty
    if(password == "")
    {document.getElementById("Password-error").innerHTML = "Please create a password for your account"
    return false;}

    if(!password.match(/[a-z]/))
    {errorMessage.push("Password must contain at least one lowercase letter");}

    if(!password.match(/[A-Z]/))
    {errorMessage.push("Password must contain at least one uppercase letter");}

    if(!password.match(/[0-9]/))
    {errorMessage.push("Password must contain at least one number");}

    if(!password.match(/[!\@#\$%&*\-_\\.+\(\)]/))
    {errorMessage.push("Password must contain at least one special characters");}

    if(password == username || password.includes(username))
    {errorMessage.push("Password cannot be or contain any part of Username")}

    const errorContainer = document.querySelector(".password-message");
    errorContainer.innerHTML = errorMessage
    .map(msg => `<span>${msg}</span><br>`)
    .join("");
    
    if (errorMessage.length > 0) {
        errorContainer.style.display = "block";
    } else {
        errorContainer.style.display = "none";
    }
    
    if (errorMessage.length > 0)
        return false;
    else
        return true;
}

//Checks if Passwords Match
function validatePasswordCheck()
{
    password = document.getElementById("PassW").value;
    passwordC = document.getElementById("PassWCheck").value;

    if (password !== passwordC)
    {document.getElementById("Password-Check-error").innerHTML = "Passwords don't match";
    return false;}
        else {document.getElementById("Password-Check-error").innerHTML = "";
        return true;}
}

//Create the Review button
function reviewInput() {
    var formcontent = document.getElementById("signup");
    var formoutput = "<table class='output'><tr><th colspan='2'>Review Your Information:</th></tr>";

    for (var i = 0; i < formcontent.elements.length; i++) {
        var el = formcontent.elements[i];
        var datatype = el.type;
        var name = el.name;
        var value = el.value;

        // skip elements with no name
        if (!name) continue;

        switch (datatype) {
            case "checkbox":
                if (el.checked) {
                    formoutput += "<tr><td align='right'>" + name + "</td>";
                    formoutput += "<td class='outputdata'>&#x2713;</td></tr>";
                }
                break;

            case "radio":
                if (el.checked) {
                    formoutput += "<tr><td align='right'>" + name + "</td>";
                    formoutput += "<td class='outputdata'>" + value + "</td></tr>";
                }
                break;

            case "range":
                // Only show the slider if the user moved it off the default (0)
                if (value !== "0") {
                    formoutput += "<tr><td align='right'>" + name + "</td>";
                    formoutput += "<td class='outputdata'>" + value + "</td></tr>";
                }
                break;

            case "button":
            case "submit":
            case "reset":
                // skip
                break;

            default:
                if (value !== "") {
                    formoutput += "<tr><td align='right'>" + name + "</td>";
                    formoutput += "<td class='outputdata'>" + value + "</td></tr>";
                }
        }
    }

    formoutput += "</table>";
    document.getElementById("showInput").innerHTML = formoutput;
}

function removeReview()
{
    document.getElementById("showInput").innerHTML = "";
}

//Displays Alert for user to fix issues
function alertBox()
{
    var alertArea = document.getElementById("alert-container");
    var removeAlert = document.getElementById("remove-alert");

    alertArea.style.display = "block";
    removeAlert.onclick = function()
    {alertArea.style.display = "none";};
}

//Checks everything for Validation
function validation()
{
    let pass = true;

    if (!validateFirstName())
        {pass = false;}

    if (!validateMInitial())
        {pass = false;}

    if (!validateLastName())
        {pass = false;}

    if (!validateDOB())
        {pass = false;}

    if (!validateEmail())
        {pass = false;}

    if (!validateSSN())
        {pass = false;}

    if (!validateAddressLine1())
        {pass = false;}

    if (!validateCity())
        {pass = false;}

    if (!validateZipCode())
        {pass = false;}

    if (!validatePhoneNumber())
        {pass = false;}

    if (!validateUserName())
        {pass = false;}

    if (!validatePassword())
        {pass = false;}

    if (!validatePasswordCheck())
        {pass = false;}

    if(pass)
    {document.getElementById("submit").disabled = false;
    return true;}
        else{alertBox();
        return false;}
}
