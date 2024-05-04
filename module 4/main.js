//console.log("hello")


//this is single line comment



/* this 
is 
multiline 
comment */



/* vs code short cut comment is:
"shift+alt+a" */


//------------------------------------------------------------variables-----------------------------------

/* let x =30
let y=20
let z=x+y
console.log(z) */



/*-------------------------------------object data type-------------------------------------------------*/

/* let car = {
    Brand:"BMW",
    Model:"M3A",
    Type:"SUV",
    release:2018
}
console.log(car)
console.log(car.Model) */


/*--------------------------------------------ARRAY------------------------------------------------------*/

/* let city = ['Dhaka','Rajshahi','Khulna']
console.log(city)
console.log(city[1]) */


/* ---------------------------------if else condition-------------------------------------------------- */

/* let x=10,y=10

if(x>y){
    console.log("x is greater")
}
else if(x<y){
    console.log("y is greater")
}
else {
    console.log("both are equal")
} */


/* ------------------------------------------switch case----------------------------------------------- */

/* let marks = 55

switch(true){
    case(marks<=100 && marks>=80):
        console.log("A+")
    break

    case(marks<80 && marks>=70):
        console.log("A")
    break

    case(marks<70 && marks>=60):
        console.log("A-")
    break

    case(marks<=60 && marks>=50):
        console.log("B")
    break

    case(marks<50 && marks>=40):
        console.log("C")
    break

    case(marks<40 && marks>=33):
        console.log("D")
    break

    case(marks<33):
        console.log("F")
    break

} */


/* --------------------------------------------for loop--------------------------------------------- */

/* for(i=1;i<=100;i++){
    if(i==50){
        continue //continue statement************************************
    }
    if(i==80){
        break   //break statement*****************************************
    }
    console.log(i)
} */

/* -----------------------------------------while loop---------------------------------------------- */


/* let i = 0
while(i<=100){
    console.log(i)
    i++
} */

/* --------------------------------------do while loop---------------------------------------------- */


/* let i = 0
do{
    console.log(i)
    i++
}
while(i<=100) */

/* -----------------------------------------------function----------------------------------------- */


/* function addTwoNumber(){
    let x=  10
    let y=20
    let z=x+y
    console.log(z)
}

addTwoNumber() */

/* ------------------------------------------parameterize function--------------------------------- */


/* function addTwoNumber(x,y){
    let z=x+y
    console.log(z)
}

addTwoNumber(10,20) */


/* ---------------------------------------------function return---------------------------------- */

/* function addTwoNumber(x,y){
    return x+y
}

let newValue =addTwoNumber(10,20)+10
console.log(newValue) */


/* -------------------------------------------javascript Object----------------------------------- */

/* var MyPc={
    brand: "Dell",
    processor:"Intel",
    ram:"16GB",
    ssd:"512GB"
}
console.log(MyPc)
console.log(MyPc.ram) */

/* -------------------------------------------javascript array--------------------------------- */

/* var fruit=["Mango","Orange","Banana","Lichi"]
console.log(fruit)
console.log(fruit[2]) */

/* ------------------------------------for loop over array------------------------------------ */

/* var fruit=["Mango","Orange","Banana","Lichi"]

var i
for(i=0;i<fruit.length;i++){
    console.log(fruit[i])
} */

/* ------------------------------------for in loop over array------------------------------------ */

/* var fruit=["Mango","Orange","Banana","Lichi"]

for(var item in fruit){
    console.log(fruit[item])
} */

/* ------------------------------------for in loop over object------------------------------------ */

/* var MyPc={
    brand: "Dell",
    processor:"Intel",
    ram:"16GB",
    ssd:"512GB"
}
for(var item in MyPc){
    console.log(item)
    console.log(MyPc[item])
} */
/*------------------------------ Array Concate  ---------------------------------------------------*/

/* var arr1 = ['a','b','c','d']
var arr2 = ['A','B',"C"]
var arr3=arr1.concat(arr2)
console.log(arr3) */

 /*------------------------------  Array Form ---------------------------------------------------*/


/* var Title = "I am himel"
var TitleArray = Array.from(Title)
console.log(TitleArray)    */

/*-------------------- Array Filter------------------------------------------- */

/* 
var num = [1,2,3,4,7,995,34,74,452,46,63,2,16,55,50]
var result=num.filter(function(item){

    return item>50

})

console.log(result) 
*/

/* ---------------------------------- Array Find  -----------------------------------------------------*/

/* var num = [1,2,3,4,7,995,34,74,452,46,63,2,16,55,50]
var result=num.find(function(item){

    return item>50

})

console.log(result) 
 */

/* ---------------------------------- Array Find Index -----------------------------------------------------*/

/* var num = [1,2,3,4,7,995,34,74,452,46,63,2,16,55,50]
var result=num.findIndex(function(item){

    return item>50

})

console.log(result)  */

/* ---------------------------------- Array ForEach Method -----------------------------------------------------*/

/* var num = [1,2,3,4,7,995,34,74,452,46,63,2,16,55,50]
num.forEach(function(item){

    console.log(item, "\n")

})
 */


/* ---------------------------------- Array Includes  -----------------------------------------------------*/

/* var num = [1,2,3,4,7,995,34,74,452,46,63,2,16,55,50]
var result =num.includes(34)
console.log(result) */

/* ---------------------------------- Array IndexOF  -----------------------------------------------------*/

/* var num = [1,2,3,4,7,995,34,74,452,46,63,2,16,55,50]
var result =num.indexOf(34)
console.log(result) */

/* ---------------------------------- Array  Reverse  -----------------------------------------------------*/

/* var num = [1,2,3,4,7,995,34,74,452,46,63,2,16,55,50]

var ressult=num.reverse()

console.log(ressult) */

/* ---------------------------------- Array  push  -----------------------------------------------------*/

/* var num = [1,2,3,4,7,995,34,74,452,46,63,2,16,55,50]

num.push(100)
num.push(110)

console.log(num) */

/* ---------------------------------- Array  pop  -----------------------------------------------------*/

/* var num = [1,2,3,4,7,995,34,74,452,46,63,2,16,55,50]

num.pop()
num.pop()

console.log(num) */

/* ---------------------------------- Array  Sort  -----------------------------------------------------*/

/* var num = [1,2,3,4,7,995,34,74,452,46,63,2,16,55,50]

var assending=num.sort()
var dissending=num.reverse()

console.log(assending,"\n",dissending) */

/* ---------------------------------- Array  Slice  -----------------------------------------------------*/

/* var num = [1,2,3,4,7,995,34,74,452,46,63,2,16,55,50]

var result=num.slice(3,6)

console.log(result) */


/* ---------------------------------- Array  Splice  -----------------------------------------------------*/
/* 
var num = [1,2,3,4,7,995,34,74,452,46,63,2,16,55,50]

//num.splice(index,removeCount,item)

num.splice(1,2)
num.splice(2,0,3000)

console.log(num) */


/* ---------------------------------- strinng method  -----------------------------------------------------*/

/* var country1= "bangladesh"
var country2 ="   india   "

console.log(country1.charAt(5))
console.log(country1.concat(country2))
console.log(country1.indexOf("l"))
console.log(country1.lastIndexOf("a"))
console.log(country1.replace("desh","deshi!"))
console.log(country1.substr(6,4))
console.log(country1.substring(6,10))
console.log(country1.toUpperCase())
console.log(country1.toLowerCase())
console.log(country2.trim()) */

/* ---------------------------------- JavaScript Date Object  -----------------------------------------------------*/

/* var obj=new Date()

console.log(obj.getDate())
console.log(obj.getDay())
console.log(obj.getFullYear())
console.log(obj.getHours())
console.log(obj.getMinutes())
console.log(obj.getSeconds())
console.log(obj.getTime())
console.log(obj.getMilliseconds())
 */


/* ---------------------------------- JavaScript Math Object  -----------------------------------------------------*/

/* var num =-7.2

console.log(Math.abs(num))
console.log(Math.ceil(num))
console.log(Math.floor(num))
console.log(Math.max(12,441,1,23,63,62,22))
console.log(Math.min(12,441,1,23,63,62,22))
console.log(Math.random())
console.log(Math.round(num)) */


/* ---------------------------------- JavaScript Numbers  -----------------------------------------------------*/

/* var num =-7.2984369528976
var num1 ="1.121212121212121221534235436"

console.log(Number.isFinite(num))
console.log(Number.isInteger(num))
console.log(Number.parseFloat(num1))
console.log(Number.parseInt(num))
console.log(num.toFixed(4))
console.log(num.toString()) */