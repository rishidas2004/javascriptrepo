// creating an array

let studentsName = ["Rishi","amit","harshit","anish"];

for(i=0;i<studentsName.length;i++){
    console.log(studentsName[i]);
}

// printing the name of arrays by "for(let newVariable of declaredVariable)"  of se character or in se index print honge 

let teacherName = ["sushma","neha","pooja","pawan"];

for(let name of teacherName){
    console.log(name);
}


// push and concatenation 

// let fruits = ["apple","mango","banana"];
// fruits.push("orange");                 // push statement
// console.log(fruits);


// 2. concatenation

let arr1 = [1,2,3];
console.log(arr1);

let arr2 = [4,5,6];
console.log(arr2);


arr3 = arr1.concat(arr2);
console.log(arr3);


// pop slice and splice

// pop :- used to remove the last element of array

let courses = ["js","html","css","cricket"];

 courses.pop();
 console.log(courses);

// slice method

let course = courses.slice(0,2);
console.log(course);


// splice(used for add,remove,replace)

course.splice(0,2,"mongodb");
console.log(course);

