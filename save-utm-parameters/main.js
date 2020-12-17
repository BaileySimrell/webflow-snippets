// this script saves URL parameters and then inserts them into any form that has a name matching the parameter key
// mainly intended for hidden fields
// (if embedding in-line, place this snippet before the closing </body> inside of <script> </script> tags)

var queryForm = function(settings){
		var pageReferrer = document.referrer;
    var reset = settings && settings.reset ? settings.reset : false;
    var self = window.location.toString();
    var querystring = self.split("?");
    if (querystring.length > 1) {
      var pairs = querystring[1].split("&");
      for (i in pairs) {
        var keyval = pairs[i].split("=");
        if (reset || sessionStorage.getItem(keyval[0]) === null) {
          sessionStorage.setItem(keyval[0], decodeURIComponent(keyval[1]));
        }
      }
    }
    var hiddenFields = document.querySelectorAll("input[type=hidden], input[type=text]");
    for (var i=0; i<hiddenFields.length; i++) {
      var param = sessionStorage.getItem(hiddenFields[i].name);
      if (param) document.getElementsByName(hiddenFields[i].name)[0].value = param;
    }
    document.getElementById('document-referrer-field').value = document.referrer;
}

setTimeout(function(){ queryForm(); }, 2400);