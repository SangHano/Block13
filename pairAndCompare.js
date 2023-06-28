//Create a prompt asking for the first word and make that input word1
const input= prompt(`type a first word`);
const word1= (input);
//Create a prompt asking for the second word and make that input word2
const input1= prompt(`type a second word`);
const word2 = (input1);
//Create a prompt asking for first number and make the input to num1
const input2= prompt(`Pick a number`);
const num1 =Number(input2);
//Create a prompt asking for second number and make the input to num2
const input3= prompt(`Pick another number`);
const num2 =Number(input3);
//make a if statement stating that if both words and both numbers and same it's true
if(word1 === word2 && num1 === num2){
    console.log(true);
//make a else if statement that if words are not same and numbers are same it's true
}else if(word1 != word2 && num1 === num2){
    console.log(true);
//make a if statement that if words are same but number aren't then it's true
}if(word1 === word2 && num1 != num2){
    console.log(true);
//make a if statement that if words are not same and numbers are not same it's false
}if(word1 != word2 && num1 != num2){
    console.log(true);
}