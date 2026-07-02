
let cart=JSON.parse(localStorage.getItem('cart')||'[]');
function saveCart(){localStorage.setItem('cart',JSON.stringify(cart));}
function addToCart(item){
cart.push(item);
saveCart();
alert(item.name+' added to cart');
}
