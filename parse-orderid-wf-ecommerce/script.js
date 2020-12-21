var url_string = window.location.href; 
var url = new URL(url_string);
var wfOrderId = url.searchParams.get("orderId");
console.log('Order ID is ' + wfOrderId);