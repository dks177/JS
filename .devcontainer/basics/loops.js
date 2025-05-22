for(let i=0;i<=10;i++){
    // console.log(i);
}

//             foreach loop 

const arr=[1,2,3,45,6,'Ind','Aus'];
arr.forEach((name) => {                           // arr.forEach(function (name){              
    // console.log(name);
})

//                              filter function

const arr1=[1,2,3,10,11,4,4.2,9.3,4.99];
const st=arr1.filter((num)=>(num>5));
// console.log(st);

//                              map function

const newnum=arr1.map((n)=>n+10);
// console.log(newnum);

//                              chaining 

const num2=arr1.map((n)=>n*10).filter((n)=>n>1000);
// console.log(num2);

//                              reduce function --> for accumulating values

const tot=arr1.reduce((accu,n)=>{                                           //arr1.reduce((acc,n)=>acc+n,0)
    console.log(`acc:${accu}  curr:${n}`);
    return accu+n;
},0)
console.log(tot);