// 1st method to create promise

const promise1=new Promise(function(resolve,reject){
    setTimeout(function(){
        // console.log("Async task 1");
        resolve();
    },1000);
})

promise1.then(function(){
    // console.log("Async 1 resolved");
})

//*************************************************************************

// 2nd method to create promise

new Promise(function(resolve,reject){
    setTimeout(function(){
        // console.log("Async task 2");                        //Reject corresponds with .catch()
        resolve();                                             //Resolve corresponds with .then()
    },1000);
}).then(function(){
    // console.log("Async 2 resolved");
})

//***************************************************************************

// Passing data in resolve();

const promise3=new Promise(function(resolve,reject){
    setTimeout(function(){
        reject({username:"Devansh" , email:"devansh@mail"});
    },1000);
})
promise3.catch(function(user){
    // console.log(user);
})

//****************************************************************************

// Chaining passes return values to next then and 

const promise4=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"Devansh",mail:"asdewq@qwerty"});
        }
        else{
            reject("Error!Something went wrong");
        }
    },1000)
})

promise4.then((user)=>{
    // console.log(user);
    return user.mail;
})
.then((username)=>{
    // console.log(username);
})
.catch((error)=>{
    // console.log(error);
})
.finally(()=>{
    // console.log("Something was done");
})

//***************************************************************************

//ASYNC AWAIT METHOD

const promise5=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"Devansh",mail:"asdewq@qwerty"});
        }
        else{
            reject("Error!Something went wrong");
        }
    },1000)
})

async function consumepromis5(){
    try{
        const response=await promise5;
        // console.log(response);
        // console.log(response.username);
    }
    catch(error){
        // console.log(error);s
    }
}
consumepromis5();

//*****************************************************************************

//FETCH METHOD

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    // console.log(response);
    return response.json()
})
.then((data)=>{
    console.log(data); 
})
.catch((error)=>{
    console.log(error);
})