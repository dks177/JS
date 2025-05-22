const mp=new Map();
mp.set(1,"India");
mp.set("America",2);
mp.set(3,[1,2,3,4]);
mp.set(1,'France');            // Value changed from India to France but no new key created
console.log(mp)