// console.log(Math.PI);
Math.PI=5;
// console.log(Math.PI);  // we cant change the value because its enumerable and non-writable

const ob=Object.getOwnPropertyDescriptor(Math,"PI");
// console.log(ob); 

const user={
    name:"Devansh",
    id:3708,
    pass:1234,
}

//setting own properties

Object.defineProperty(user,"name",{
    writable:false,
    enumerable:false
})
const ob1=Object.getOwnPropertyDescriptor(user,"name");
// console.log(ob1); 

user.name="Harsh";
// console.log(user.name)