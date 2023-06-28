//Create a 2 prompts asking for number each and assign it num1 and num2
const input1 = prompt(`Enter the first number`);
const num1 = Number(input1);
const input2 =prompt(`Enter the second number`);
const num2 = Number(input2);
//Create variable sum that is result of adding num1 and num2
const sum = (num1 + num2);
//If the sum of num1 and num2 is less than -100 states "${sum} is less than =1000"
if(sum < -1000){
    console.log(`is less than -1000`);
//If the sum of num1 and num2 is greater than 100 states "${sum} is greater than 100"
}else if(sum > 100){
    console.log(`${sum} is greater than 100`);
//If the sum of num1 and num2 is equal to 0 states "${sum} is equal to 0"
}if(sum === 0){
    console.log(`${sum} is equal to 0`);
//If the sum of num1 and num2 is larger than 0 states "${sum} is larger than 0"
}if(sum > 0){
    console.log(`${sum} is larger than 0`);
//If the sum of num1 and num2 is a negative number "${sum} is a negative number"
}if(sum < 0){
    console.log(`${sum} is a negative number`);
}