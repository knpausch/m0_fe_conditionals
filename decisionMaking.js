// This exercise file is a little different from the others you have seen so far. Read carefully!
// Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
// Spend some time changing the variables and running the file to see how the story changes.


var doorChoice = 1;
var bearClothing = "";
var bearChoice = 1;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  "You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!";
} else if (bearChoice === 2) {
  "You tell the bear the " + bearClothing + " is too small and it starts to cry!";
} else if (bearChoice === 3) {
  "You run as fast as you can into the next room. It's full of snakes!";
} else {
  "You stay with the bear and become it's best friend!";
}


// Questions
// 1. In English, using technical vocabulary, describe what is happening between lines 12 and 16. Conditional is trying to
//determine if doorChoice is equal to 1. If so, it changes variable bearClothing to "hat". If doorChoice number it anything but
// one then it will change bearClothing to "scarf".
// 2. What variable has a new value assigned to it after the first if statement executes? bearClothing
// 3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be? scarf
// 4. In English, using technical vocabulary, describe what is happening between lines lines 25 and 33. Conditional is trying
//to determine if bearChoice equals 1, 2, 3 or is any other number. If it matches a number then it will make a string
//interpolation of a sentence mixed with/without the bearClothing value. I noticed however these strings will not be displayed
//in the console becasue it is lacking a console.log() function. Not sure if that's a trick question or if the author forgot
//to enter those lines of code.
// 5. If you changed the variable bearChoice to equal 3, what will be the final outcome be? It will only display "You enter a dark room with two doors. Do you go through #1 or #2?
//You see a bear putting on a hat
//It looks like that hat is too small for the bear, do you...
//1. Offer your own to the bear?
//2. Point it out to the bear?
//3. Make a dash for the next room?
//I'm assuming if you wanted the choices to print after utilizing console.log(), then the "output" would be "You run as fast
//as you can into the next room. It's full of snakes!";
// 6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome
//be? You see a bear putting on a hat
//It looks like that hat is too small for the bear, do you...
//1. Offer your own to the bear?
//2. Point it out to the bear?
//3. Make a dash for the next room?
//Again, assumming the author included console.log() then the finall line printed would be "You tell the bear the
// hat is too small and it starts to cry!"
// 7. What is your favorite ending? You stay with the bear and become its best friend
