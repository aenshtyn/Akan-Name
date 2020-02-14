function akanName(){


  var bday = document.getElementById("birthday").value;
  var century = parseInt(bday(str.substring 0,1))
  var year = parseInt(bday(str.substring 2,3))
  var month = parseInt(bday(str.substring 5,6))
  var day = parseInt(bday(str.substring 8,9))
  var sex = document.getElementById("Gender").value;
  var date = function {
    ((((century/4) - 2 * century - 1) + ((5 * year/4))
              + ((26 * (month + 1) / 10)) + day) % 7)
            }
return date, century, year, month, day, sex;


  var outputText = "your birthday is on " + date + ".";
  saySomething(outputText);


  document.getElementById('result').innerHTML = "<h1>My name is:</h1><div class='alert alert-success'><h2>"akan name"</h2></div>"
