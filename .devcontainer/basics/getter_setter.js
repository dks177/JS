// method 1

// class User{
//     constructor(name,email,pass){
//         this.name=name;
//         this.email=email;
//         this.pass=pass;
//     }
//     get name(){
//         return `name : ${this.x}`;
//     }
//     set name(value){
//         this.x=value;
//     }
//     get email(){
//         return `email : ${this.x}`;
//     }
//     set email(value){
//         this.x=value;
//     }
//     get pass(){
//         return `pass : ${this.x}`;
//     }
//     set pass(value){
//         this.x=value;
//     }
// }

// const dev=new User("Devansh","djfdh",1233);

// dev.name="Harsh";
// console.log(dev.name);
// dev.pass=1222;
// console.log(dev.pass);

//**********************************************************************

// Method 2

// function User(name,pass){
//     this.name=name;
//     this.pass=pass;
//     Object.defineProperty(this,name,{
//         get : function(){
//             return this.name;
//         },
//         set : function(value){
//             this.name=value;
//         }
//     })
// }
// const dev1=new User("Devansh",1233);
// dev1.name="Harsh";
// console.log(dev1.name)

//***********************************************************************

//Method 3 

