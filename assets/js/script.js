// Create a variable that is linked to the generate ID
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//Returns a random alphabetic character
function randomizeAlphabet() {
  var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  var random = alphabet[Math.floor((Math.random() * alphabet.length))];
  return random;
}
//Returns a random number
function randomizeNumber() {
  var numbers = "0123456789".split("");
  var random = numbers[Math.floor((Math.random() * numbers.length))];
  return random;
}
//Returns a random special character
function randomizeSpecialCharacter() {
  var specialCharacters = "~`!@#$%^&*()-_=+\\|[{]};:'\",<.>/?".split("");
  var random = specialCharacters[Math.floor((Math.random() * specialCharacters.length))];
  return random;
}
//Generates a password
function generatePassword() {
  //Value that will be returned
  var password = "";
  //Flag variable that prevents the code from not giving at least one of the characters requested
  var characterIsPresent = [false, false, false, false];
  //Variable that we use to store a random number
  var randomizerElement = 0;

  //Variable that stores the values that the user inputs from the window prompts and confirms
  var passwordInput = [0, false, false, false, false]; //Length, lowercase, uppercase, numerical, special
  //The following two variables are used to give back the used a recap of the options they chose
  var passwordInputString = [" characters long", " lowercase", " uppercase", " numerical", " special characters"];
  var passwordRecap = "Your password will be generated following the next rules:\n";

  //Asks the users the size and elements they want in the password
  window.alert("Please select which elements you want in your password");
  while (passwordInput[0] < 8 || passwordInput[0] > 128) {
    passwordInput[0] = window.prompt("Choose the length of you password (Minimum of 8, maximum of 128");
  }
  passwordInput[1] = window.confirm("Confirm whether you want lowercase characters or not");
  passwordInput[2] = window.confirm("Confirm whether you want uppercase characters or not");
  passwordInput[3] = window.confirm("Confirm whether you want numeric characters or not");
  passwordInput[4] = window.confirm("Confirm whether you want special characters or not");

  //Loop that creates the message that will be shown to the user as a recap
  for (var i = 0; i < passwordInput.length; i++) {
    if (i === 0) {
      passwordRecap = passwordRecap + passwordInput[i] + passwordInputString[i] + "\n";
    } else if (passwordInput[i] === true) {
      passwordRecap = passwordRecap + "✅" + passwordInputString[i] + "\n";
    } else {
      passwordRecap = passwordRecap + "❌" + passwordInputString[i] + "\n";
    }
  }
  //Display the recap message
  window.alert(passwordRecap);

  //If the user chooses to not have any character in their password, prevents the password form being generated
  //and tells the user that the password cant be generated, otherwise, create the password
  if (!passwordInput[1] && !passwordInput[2] && !passwordInput[3] && !passwordInput[4]) {
    window.alert("Can't generate a password that contains no character, please try again");
  } else {
    //Create the password once, if the password doesnt contain at least 1 character of each requeste type, erase and create
    //the password again
    do {
      characterIsPresent.fill(false);
      password="";
      //Create a password of "passwordInput[0]" size, this size was taken from the prompt that the user filled
      for (var i = 0; i < passwordInput[0]; i++) {
        //Create a random number from 0 to 3, where 0 is a lowercase, 1 is an uppercase, 2 is a number and 
        //3 is a special character. If we get a random number that is linked to a type of character that we do not want
        //in our password, then get another random number
        do {
          randomizerElement = Math.floor((Math.random() * 4));
        } while (passwordInput[randomizerElement + 1] === false)
        if (randomizerElement === 0) { //Get a random lowercase character
          password += randomizeAlphabet();
          characterIsPresent[0] = true;
        }
        else if (randomizerElement === 1) {//Get a random uppercase character
          password += randomizeAlphabet().toUpperCase();
          characterIsPresent[1] = true;
        } else if (randomizerElement === 2) {//Get a random numeric character
          password += randomizeNumber();
          characterIsPresent[2] = true;
        } else if (randomizerElement === 3) {//Get a random special character
          password += randomizeSpecialCharacter();
          characterIsPresent[3] = true;
        }
      }
    //If the password we generated doesnt have at least 1 character of each character type the user requested
    //Then generate the password again
    } while (passwordInput[1] != characterIsPresent[0] || (passwordInput[2] != characterIsPresent[1])
    || passwordInput[3] != characterIsPresent[2] || passwordInput[4] != characterIsPresent[3])
  }
  //Returns the password
  return password;
}

// Add event listener to generate password button
generateBtn.addEventListener("click", writePassword);
