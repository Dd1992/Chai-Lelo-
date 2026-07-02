
const UI={
showMessage(msg){alert(msg);},
formatPrice(price){return '₹'+Number(price).toFixed(2);},
loading(show){console.log(show?'Loading...':'Done');}
};
