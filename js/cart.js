function getCart(){
 return JSON.parse(localStorage.getItem("cart"))||[];
}

function addToCart(id){
 const cart=getCart();
 cart.push(products.find(p=>p.id===id));
 localStorage.setItem("cart",JSON.stringify(cart));
 alert("اضافه شد");
}
