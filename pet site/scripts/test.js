let names = ["Victoria","Mark","Derek", "Phil"];
console.log(names);

let mixed = [99,"Derek",true,null,45,"hello"];
console.table(mixed);

function displayNames(){
    for(let i=0;i<4;i++){
        console.log(names[0]);
    }
}

displayNames();

let ages = [55,45,35,12,65,12];
function displayAge(){
    for(let i=0;i<ages.length;i++){
        console.log(ages[i]);
    }
}

//object
let student={
    name:"joey",
    age:22,
    student:true,
    grade:"A-",
    music: ["Cheif Keef", "Coldplay","ACDC"],
    address:{
        city:"San Diego",
        country:"USA"
    }
}
console.log(student.address.country);//joey
console.log(student["music"][0]);

let students=[
    {
        name:"Jose",
        age:24,
        activeStudent:true
    },
    {
        name:"Daniel",
        age:22,
        activeStudent:true
    },
    {
        name:"Mark",
        age:44,
        activeStudent:false
    }
]
console.log(students);