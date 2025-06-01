function setusername(username){{
    this.username=username;
    console.log("Username updated");
}}
function createuser(username,id,pass){
    setusername.call(this,username);
    this.id=id;
    this.pass=pass;
    console.log(this);
}
const user1=new createuser("Devansh",1223,1234);