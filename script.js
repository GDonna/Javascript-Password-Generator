// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = ["A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z"]
var lowerCase = ["a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"]
var specialCharacter = ["(, ), !, @, #, $"]

//This is where the user will be prompted with criteria once button is clicked? 
var enterPassword = function() {
  var userChoice = window.prompt("Your Password must contain the following: Between 8 - 128 Characters, and at least one special character (,),=,!,@,#")
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
