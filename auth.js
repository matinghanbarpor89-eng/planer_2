function login(user){
 localStorage.setItem("loginUser",user);
}
function getUser(){
 return localStorage.getItem("loginUser");
}
