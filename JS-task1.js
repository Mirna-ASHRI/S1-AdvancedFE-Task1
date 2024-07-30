// Assignment 

//Create void function take an integer then print it then call this method in main.

function takeAndPrint(integer) {
    if (Number.isInteger(integer)) {
        console.log(integer);
    } else {
        console.log('The provided input is not an integer.');
    }
}
takeAndPrint(1)
takeAndPrint("blabla")

//Create function take three integers then return the average as float value then call this method in main. 

function takeAndPrintAll(x, y, z) {
    var sum = 0;
    if (Number.isInteger(x) && Number.isInteger(y) && Number.isInteger(z)) {
        sum += x + y + z
        var avg = sum / 3
        console.log(avg)
        return avg;
    }
    else console.log("All inputs must be Integers")
    return null
}
takeAndPrintAll(1, 2, 3)

//Create function take an integer then return true if this number is prime otherwise return false. 

function takeAndPrime(A) {
    if (!Number.isInteger(A)) {
        console.log("All inputs must be integers");
        return false;
    }

    if (A <= 1) {
        return false;
    }
    if (A <= 3) {
        return true; // 2 and 3 are prime numbers
    }
    if (A % 2 === 0 || A % 3 === 0) {
        return false;
    }

    for (let i = 5; i * i <= A; i += 6) {
        if (A % i === 0 || A % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}

console.log(takeAndPrime(3));
console.log(takeAndPrime(10));
console.log(takeAndPrime(17));
console.log(takeAndPrime(-5));
console.log(takeAndPrime(1.5));
console.log(takeAndPrime("blabla"));


//Create function take an integer then return it reversed. 
function reversedInteger(B) {
    if (!Number.isInteger(B)) {
        console.log("The provided input is not an integer.");
        return null;
    } else {
        let integStr = B.toString();
        let reversedStr = integStr.split('').reverse().join('');
        let reversedNumber = parseInt(reversedStr);
        if (B < 0) {
            reversedNumber = -reversedNumber;
        }
        return reversedNumber;
    }
}

console.log(reversedInteger(123));
console.log(reversedInteger(-567));
console.log(reversedInteger(100));
console.log(reversedInteger("blabla"));

//Create function take an array then return summation of its values. 
var myArray = [
    { gpa: 85 },
    { gpa: 60 },
    { gpa: 30 },
]

function sumArray(myArray) {
    var sum = 0
    for (var i = 0; i < myArray.length; i++) {
        sum += myArray[i].gpa
    } console.log(sum)
}

sumArray(myArray)

//Create function take array then return the max element in array. 
var myArray2 = [
    { gpa: 85 },
    { gpa: 60 },
    { gpa: 30 },
]

function getMaxOfArr(myArray2) {
    var max = myArray2[0].gpa;
    for (var i = 0; i < myArray2.length; i++) {
        if (myArray2.gpa > max)
            max = myArray2[i].gpa;
    }
    return max
}
console.log(getMaxOfArr(myArray2))

//Create function take char and return true if it is vowel char (a,e,I,o,u) otherwise return false
function returnVowel(input){
    let char = input.toLowerCase();
 
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
        return true;
    } else {
        return false;
    }
}
console.log(returnVowel('a'));
console.log(returnVowel('b'));

//Create function take two integers to swap them. 
function swapIntegers(o, k) {
    console.log("Before swap: o =", o, ", k =", k);
    
    // Using a temporary variable to swap
    var ok = o;
    o = k;
    k = ok;

    console.log("After swap: o =", o, ", k =", k);
}
swapIntegers(50, 100);

//Create function take array 2d then return the max element. 
let myA = [
    { age: 18, Grade: 85 },
    { age: 25, Grade: 60 },
    { age: 22, Grade: 30 },
]

function getMaxArr(myA) {
    var maxAge = myA[0].age;
    var maxGrade = myA[0].Grade;
    for (var i = 0; i < myA.length; i++) {
        if (myA[i].age > maxAge) {
            maxAge = myA[i].age;
        }
        if (myA[i].Grade > maxGrade) {
            maxGrade = myA[i].Grade;
        }
    }

    return { maxAge: maxAge, maxGpa: maxGrade };
}
console.log(getMaxArr(myA))

//Write an example for any function in cmath. 
function getAbsValue(x) {
    var val = Math.abs(x);
    console.log("The absolute value of " + x + " is " + val);
}
getAbsValue(-10);
getAbsValue(5); 


// Session's Task
var Students = [
    { name: "Ahmed", age: 18, gpa: 85, isActive: false, isAttend: true },
    { name: "Omar", age: 25, gpa: 60, isActive: false, isAttend: false },
    { name: "Aly", age: 22, gpa: 30, isActive: false, isAttend: true },
    { name: "Karim", age: 15, gpa: 90, isActive: false, isAttend: false },
    { name: "Mohamed", age: 19, gpa: 80, isActive: false, isAttend: false },
]
console.log(Students)

// function print all array data
function PrintAllStudents(myArray) {
    for (var i = 0; i < Students.length; i++) {
        console.log(myArray[i])
        // console.log(`This Data is for student ${i+1}`)
        // console.log(Students[i.name])
        // console.log(Students[i.age])
        // console.log(Students[i.gpa])
        // console.log(Students[i.isActive])
        // console.log(Students[i.isAttend])
    }
}
PrintAllStudents(Students)

//function print all student names with GPA 
function PrintAllStudentsAndGPA() {
    for (var i = 0; i < Students.length; i++) {
        console.log(`Student's Name : ${Students[i].name} : GPA ${Students[i].gpa}`)
    }
}
PrintAllStudentsAndGPA(Students)

// function  take studentName  => isAttend: true  log attend , not attend 
function studentsAttendance() {
    for (var i = 0; i < Students.length; i++) {
        if (Students[i].isAttend == true)
            console.log(`${Students[i].name} attends`);
        else
            console.log(`${Students[i].name} didn't attend`)
    }
}
studentsAttendance(Students)


// function return number of students where gpa >= 80 
function studentsHighGPA() {
    numberOfExcellentStuds = 0
    for (var i = 0; i < Students.length; i++) {
        if (Students[i].gpa >= 80)
            numberOfExcellentStuds++
    }
    return numberOfExcellentStuds;
}
var topStudents = studentsHighGPA()
console.log(topStudents)

// function get max gpa
function getMaxGpa() {
    var max = 0
    for (var i = 0; i < Students.length; i++) {
        if (Students[i].gpa > max)
            max = Students[i].gpa;
    }
    console.log("the max grade is =  " + max);
}
getMaxGpa(Students)
// function get min gpa
function getMinGpa() {
    var min = Students[0].gpa
    for (var i = 0; i < Students.length; i++) {
        if (Students[i].gpa < min)
            min = Students[i].gpa
    }
    console.log("The minimum GPA value is " + min)
}
getMinGpa(Students)
// function get average gpa  
function getAvgGPA() {
    var sum = 0;
    for (var i = 0; i < Students.length; i++) {
        sum += Students[i].gpa;
    }
    var avg = sum / Students.length;
    console.log("The GPA Avg is " + avg)
}
getAvgGPA(Students)

