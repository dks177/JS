function calc(...num1){          //  ... -> spread operator
    return num1;
}
// console.log(calc(4,5,4,3,3));

const user=new Object();
user.username="Devansh";
user.age=21;
user.id="2022uee1040";

const arr=new Array();
arr[0]=1;
arr[1]=2;
arr[2]=200;
arr[3]=400;

function info(ob){
    console.log(`User named ${ob.name} with userId ${ob[3]} logged in`);
}
// info(arr);

//                    ARROW FUNCTION


const inf=(num1,num2)=>(num1+num2)
// console.log(inf(3,4));

//                   IMMEDIATELY INVOKED FUNCTION EXPRESSIONS

(()=> {
    console.log("Hello"); // ---------- ?????
})();
