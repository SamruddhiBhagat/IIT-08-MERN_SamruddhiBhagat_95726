function add(a,b) {
    let sum = a+b;
    console.log(`The sum is : ${sum}`);
} 

function sub(a,b) {
    let diff = a-b;
    console.log(`The difference is : ${diff}`);
} 

// add(10,5);
// sub(10,5);

module.exports = {
    add,
    sub
}