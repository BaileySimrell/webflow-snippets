if (window.location.search !== "") {
    console.log('Params exist'); console.log(window.location.search); }
else {
    console.log('Params do not exist'); 
}
console.log('utm_source = ' + window.location.search.includes('utm_source'));
console.log('utm_medium = ' + window.location.search.includes('utm_medium'));
console.log('utm_campaign = ' + window.location.search.includes('utm_campaign'));
console.log('custom_attribute = ' + window.location.search.includes('ba=4a2c'));
if (window.location.search.includes('ba=4a2c')) {
    localStorage.setItem('queryString', window.location.search);
    console.log('local storage updated');
}