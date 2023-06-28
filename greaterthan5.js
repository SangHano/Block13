//Create a prompt asking for two numbers and make it num1 and num2

const input = prompt(`Enter the first number`);
const num1 = Number(input);
const input1 = prompt(`Enter the second number`);
const num2 = Number(input1);
// If num1 and num2 is both greater than 5 results in true
if(num1 >=5 && num2>=5){
    console.log(true);
// if both num1 and num2 are not greater than 5 result in false
}else if (num1 <= 5 && num2 <=5){
    console.log(false);
//if only num1 is greater than 5 and num2 is less than 5 results in false
}if(num1 >=5 && num2 <=5){
    console.log(false);
//if num1 is less than 5 and num2 is greater than 5 results in false
}if(num1 <=5 && num2>=5){
    console.log(false);
}
