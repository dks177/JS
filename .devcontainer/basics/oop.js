const User = function(username,userid,pass){
    this.username=username;
    this.userid=userid;
    this.pass=pass;
    // return this;           //    needs to be returned else returns undefined if object is created without "new" keyword;
}

const user2=new User("Harsh",1235,4331);
const userone=new User("Devansh",1234,43332);
console.log(userone);
console.log(user2);