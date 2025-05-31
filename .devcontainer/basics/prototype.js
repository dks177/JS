function createuser(username,pass){
    this.username=username;
    this.pass=pass;
}
 
createuser.prototype.increment=function(){
    this.pass++;
}

createuser.prototype.display=function(){
    console.log(`The password of ${this.username} is ${this.pass}`);
}

const dev=new createuser("Devansh",1234);
const hsh=new createuser("Harsh",4567);
// dev.increment();
// dev.display();

//***************************************************************************

let name="Devansh          ";
Object.prototype.devansh=function(){
    console.log("ALL object contains Devansh")
}
// console.log(`Trimmed length : ${name.truelength()}`);

let obj={
    username:"Devansh",
    id:1234,
    pass:1000
}
let mynum=[1,2,3,4,5];
mynum.devansh();
name.devansh();
obj.devansh();

//*****************************************************************************

/*
            Functions --
                         \
                         |                                     functions,arrays,strings all are ullimately object and process
                         \/                                    all properties of objects by inheritance but object doesnt contains 
                                                               their properties     
            Arrays -----> OBJECTS ---> null             

                         /\
                        /
            Strings ---
*/

// Prototype inheritance

// syntax ->  Object.setPrototypeOf(x,y) x gets properties of y


