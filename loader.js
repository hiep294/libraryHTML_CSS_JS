
includeHTML = id => {
  var z, file, xhttp;
  z = document.getElementById(id);

  /*search for elements with a certain atrribute:*/
  file = z.getAttribute("w3-include-html");
  if (file) {
    /*make an HTTP request using the attribute value as the file name:*/
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4) {
        if (this.status == 200) {
          z.innerHTML = this.responseText;
        }
        if (this.status == 404) {
          z.innerHTML = "Page not found.";
        }
      }
    };
    xhttp.open("GET", file, true);
    xhttp.send();
    /*exit the function:*/
    return;
  }
};



