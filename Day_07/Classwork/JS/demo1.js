//javascript object
    // with he help of (.) dot operator

const s1 = {}; // Empty object
s1.name = "John";     // name property
s1.age = 30;         // age property
s1.gender = "male"; // gender property
//console.log(s1);
console.log(`${JSON.stringify(s1)} type : ${typeof (s1)} `);


// with he help of '[]' square bracket 
const s2 = {}; // Empty object
s2["name"] = "Doe";     // name property
s2["age"] = 38;         // age property
s2["gender"] = "male"; // gender property
console.log(`${JSON.stringify(s2)} type : ${typeof (s)} `);


//JASON -  JavaScript Object Notation

const s3 = {
    "name" : "samruddhi",
    "age" : 20,
    "gender" : "female",
    "skills" : ["CPP", "HTML", "JS", "MySQL" ]
}
s3.mobile = 1234567890;
s3["city"] = "Pune";
console.log(`${JSON.stringify(s3)} type : ${typeof (s3)} `);