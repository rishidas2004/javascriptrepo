// declaring an function

function greet(){
    console.log("Good morning, lets study");
}

greet();


// anonymous function

function (){
    console.log("Hello..");  // we dont write any name in front of () results in creating an anonymous function
}

// lets see how we correct it

let greetings = function (){
    console.log("Namaskar...");   // writing an anonymous function inside an variable makes it a function expression
}

greetings();