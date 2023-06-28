//Create a prompt to enter the value "I am a string "
const input=prompt("Are you a string")
if (input === "I am a string"){
    console.log(`True`)
//if false state "The boolean vaue false is falsey"
} else if (input === `false`){
    console.log(`The boolean value false is falsy`)
//if null state `The null value is falsy`
}if(input === `null`){
    console.log(`The null value is falsy`)
//if undefined state undefined is falsy`
}if(input ===`undefined`){
    console.log(`undefined is falsy`)
//if 0 is stated `The number 0 is falsy(the only falsy number`
}if(input ===`0`){
    console.log(`The number 0 is falsy(the only falsy number)`)
//if nothing was inputed states The empty string is falsy(the only falsy string
}if(input ===``){
    console.log(`The empty string is falsy(the only falsy string)`)
}



