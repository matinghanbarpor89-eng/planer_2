const list=document.getElementById("productList");

products.forEach(p=>{
 list.innerHTML+=`
  <div class="card">
   <img src="${p.img}">
   <h4>${p.name}</h4>
   <div>${p.price.toLocaleString()} تومان</div>
   <button onclick="addToCart(${p.id})">افزودن</button>
  </div>
 `;
});
