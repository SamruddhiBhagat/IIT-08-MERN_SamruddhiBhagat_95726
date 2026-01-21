const student = {
    studentId : 101,
    fullName : "Samruddhi",
    email : "samruddhi@gmail.com",
    course : "BE",
    marks :[45,50,40,50]
}
//1.
console.log(student);

//2.
console.log(`${JSON.stringify(student)}`);

//3.
const temp =JSON.stringify(student);
const parsedObject = JSON.parse(temp);
console.log(parsedObject);