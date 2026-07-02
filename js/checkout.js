
function validateCheckout(form){
if(!form.name.value||!form.phone.value){
alert('Please fill all required fields');
return false;
}
return true;
}
