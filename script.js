'use strict';

let numbers =[-11,-22,-33,0,1,,1,1,1,1,2,2,2,2,2,4,4,4,4,4,11,-5,3,15,-8,4,6,7,8]
let letters = ['e','l','s','e','n']
let persons = [{fullName:'John',age:30,gender:'male'},{fullName:'Sarah',age:17,gender:'female'},{fullName:'Jessica',age:15,gender:'female'},{fullName:'Josh',age:20,gender:'male'}]


// Task 46

// numbers.forEach((value,index) => console.log(value))

// Task 47

// const str = letters.join('')

// console.log(str);

// Task 48

// let multiply = 1;
// const multiplyResult = numbers.map((value) => {if(value!==0){multiply*=value} return multiply})
// console.log(multiplyResult);

// Task 49

// let numbers2= []
// numbers.map((value) => {
//     if(value<0){
//         value*= -1
//     }
//     return numbers2.push(value)
// })

// console.log(numbers2);

// Task 50

// const artan = numbers.sort((a,b) => a-b)

// console.log(artan);

// Task 51

// const xd = numbers.sort((a,b) => {
//     if(a>b){
//         return -1
//     }else if(a<b){
//         return 1
//     }else{
//         console.log('Beraberdirler');
//     }
// })

// Task 52


// let number2 = []
// const arr = numbers.map(value => {
//     if(value>=0){
//         number2.push(value)
//     }
// })

// console.log(number2);

// Task 53

// const only = numbers.filter((value,index,arr) => {
//     return arr.indexOf(value) === index
// })
// console.log(only);

// Task 54

// const onlyName = persons.map(value => value.fullName)
// console.log(onlyName);

// Task 55

// let male = []
// let female = []

// const gender = persons.filter(value => {
//     if(value.gender === 'male'){
//         male.push(value)
//     }else if(value.gender ==='female'){
//         female.push(value)
//     }
// })

// console.log(male,female)

// Task 56

// const age = persons.filter(value => value.age>=20)
// console.log(age);

// Task 57

// const sirala = persons.sort((a,b) => {
//     return a.age - b.age
// })

// console.log(sirala);