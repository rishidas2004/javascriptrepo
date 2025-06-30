// printing string with index

stringName = "Rishi";
for(i=0;i<stringName.length;i++){
        console.log(i +"=>"+ stringName[i]);
}

// star printing exercise

forward

const symboll="*";
for(let i=1;i<=5;i++){
        console.log(symboll.repeat(i));
}

// reverse
const symbol = "*";
for(i=5;i>=1;i--){
        console.log(symbol.repeat(i));
}

// printing odd and even number

for(let i=0;i<=50;i++){
        if(i%2===0){
                console.log(`${i} is an even number`);
        }

        else{
                console.log(`${i} is an odd number`);
        }
}


// finding vowels in a string

let string_1 = "I Love GKG";
let string_2 = "aeiou";

for (let i = 0; i < string_1.length; i++) {
    if (string_2.includes(string_1[i].toLowerCase())) {
        console.log(`${i} is a vowel`);
    } else {
        console.log(`${i} is not a vowel`);
    }
}
