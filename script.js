// Assignment Code
var generateBtn = document.getElementById("generate");
var mypass = document.getElementById('password');

var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"

var passwordLength;

var lowercaseCheck;
var uppercaseCheck;
var numberCheck;
var specialCheck;

var chapush = []
var password;


// This function is to futher shuffle the charaters pushed to the caspush[] based on the user preference

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

// function generatePassword() - This function will generate a password based on the user inputs


function generatePassword() {

  // prompted for the length of the password

  passwordLength = prompt('How many characters would you like in your password?  (Please Note!! Minimum Password length is 8)');

  //  convert string to a number

  passwordLength = Number(passwordLength);

  var i = 0;

  // Check validity of user inputs

  if (passwordLength < 8 || passwordLength > 128 || typeof passwordLength !== "number" || passwordLength === null) {
    alert("Your password must contain atleat 8 characters")
  }

  //  Proceed with ther user charater type selection

  else if (passwordLength >= 8 || passwordLength <= 128) {
    lowercaseCheck = confirm('Click "Ok" if you want to include a lowercase character or else click "Cancel"');
    uppercaseCheck = confirm('Click "Ok" if you want to include a uppercase character or else click "Cancel"');
    numberCheck = confirm('Click "Ok" if you want to include a number or else click "Cancel"');
    specialCheck = confirm('Click "Ok" if you want to include a special character or else click "Cancel"')
  }

// validatding use input - minimum password length of 8 characters

  if (passwordLength < 8 || passwordLength > 128) {
    lowercaseCheck=false
    uppercaseCheck=false
    numberCheck=false
    specialCheck=false

    alert ('Your password must contain atleat 8 characters!! Please Click "Generate Password" button to Start again')
  }
  
// Random password generating loop starts from here

  else if (lowercaseCheck || uppercaseCheck || numberCheck || specialCheck) {



    while (i < passwordLength) {


      if (lowercaseCheck) {


        chapush.push(lowercaseChar[Math.floor(Math.random() * lowercaseChar.length)]);
        i++;
        if (i === passwordLength) {
          break;
        }
      }



      if (uppercaseCheck) {


        chapush.push(uppercaseChar[Math.floor(Math.random() * uppercaseChar.length)]);
        i++;
        if (i === passwordLength) {
          break;
        }
      }


      if (numberCheck) {

        chapush.push(numberChar[Math.floor(Math.random() * numberChar.length)]);
        i++;
        if (i === passwordLength) {
          break;
        }
      }



      if (specialCheck) {

        chapush.push(specialChar[Math.floor(Math.random() * specialChar.length)]);
        i++;
        if (i === passwordLength) {
          break;
        }
      }




    }


  } else {
    alert('You must select atleast one type of charater and a valid Password length to continue. Please Click "Generate Password" button to restart the process!');
  }

// Futher shuffle generated password for more security

  shuffle(chapush);

// return generated password as a string

  return chapush.join('');

}


// writePassword function 

function writePassword() {
  event.preventDefault;

  password = generatePassword();
  mypass.textContent = password;
  
  chapush = [];

// This is to check the output and debuging purposes

  console.log("type of passwordLength variale - " + typeof(passwordLength));
  console.log("password length - "+passwordLength);
  console.log("uppercase - "+uppercaseCheck);
  console.log("number - "+numberCheck);
  console.log("specialChar - "+specialCheck);
  console.log("password - "+password);
  console.log(chapush);
  console.log(".....................");



}


// add a eventlister to the password generation button

generateBtn.addEventListener('click', writePassword);






