let marks = [35, 67, 82, 49, 90, 58]; 
console.log(marks);

let pass = marks.filter(marks => marks >= 50);
console.log(pass);

let percent = marks.map(marks => marks + "%");
console.log(percent);

let above85 = marks.filter(marks => marks >= 85);
console.log(above85);