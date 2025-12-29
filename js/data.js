let products = JSON.parse(localStorage.getItem("products")) || [
 {id:1,name:"گوشی سامسونگ A54",price:12000000,img:"https://picsum.photos/200?1"},
 {id:2,name:"لپ‌تاپ لنوو",price:35000000,img:"https://picsum.photos/200?2"}
];

let orders = JSON.parse(localStorage.getItem("orders")) || [];

function saveProducts(){
 localStorage.setItem("products",JSON.stringify(products));
}
