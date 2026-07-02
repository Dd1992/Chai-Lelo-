
const API={
async getMenu(){
return [];
},
async placeOrder(order){
console.log(order);
return {success:true};
},
async trackOrder(id){
return {status:'Preparing'};
}
};
