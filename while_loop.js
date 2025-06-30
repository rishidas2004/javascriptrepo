// program of when we enter a number greater then 50 then it asks the programmer to enter the number again

let number = parseInt(prompt("Enter a number"));
while(number>50){
    console.log(`${number} is greater then 50 enter it again`);
    number = parseInt(prompt("enter a number again"));
}

console.log(`${number} is valid`);


