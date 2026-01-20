let num = 20;
console.log(`Number is : ${num} type : ${typeof num}`);

let str = "samruddhi"
console.log(`String is : ${str} type : ${typeof str}`);

let bool = true;
console.log(`Boolean is : ${bool} type : ${typeof bool}`);

let undef;
console.log(`Undefined is : ${undef} type : ${typeof undef}`);


let nul = null;
console.log(`Null is : ${null} type : ${typeof null}`);

let arr = [1,2,3,4,5];
for(let i=0; i<arr.length; i++){
    console.log(`Array is : ${arr[i]} type : ${typeof arr[i]}`);
}


const s5 = {
    "name" : "samruddhi",
    "age" : 20,
}
console.log(`Object is : ${JSON.stringify(s5)} type : ${typeof s5}`);

