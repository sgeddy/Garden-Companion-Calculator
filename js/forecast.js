function forecast() {

  // Get Forecast for provided Zip
  document.getElementById("forecast").innerHTML = "";
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);
       document.getElementById("forecast").innerHTML += "5 DAY FORECAST" + "<br>\n<br>\n";
      for (var i=0; i<myObj.list.length; i++) {
        var max = Math.round(convertK2F(myObj.list[i].main.temp_max));
        var min = Math.round(convertK2F(myObj.list[i].main.temp_min));
        document.getElementById("forecast").innerHTML += myObj.list[i].dt_txt + ": High = " + max + ", Low = " + min + "<br>\n";
      }
    }
  };
  xmlhttp.open("GET", "http://api.openweathermap.org/data/2.5/forecast?zip=27519,us&APPID=056737c979c0063fc4afb0d2570f7327", true);
  xmlhttp.send();
}

function convertK2F (kelvin) {
  var fahrenheit = (kelvin - 273.15) * 9/5 + 32;
  return fahrenheit;
}