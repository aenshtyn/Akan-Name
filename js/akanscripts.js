function akanName(){
  var bday = document.getElementById("birthday").value;
  var Bdate = bday.toString();
  var century = Bdate.substring (0,2);
  var year = Bdate.substring (2,4);
  var month = Bdate.substring (5,7);
  var day = Bdate.substring (8,9);
  var sex = document.getElementById("Gender").value;
  var boy = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
  var girl = ["Akosua", "Adwoa", "Abeena", "Akua", "Yaa", "Afua", "Ama"]
  var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  var date =
    ((((century/4) - 2 * century - 1) + ((5 * year/4))
              + ((26 * (month + 1) / 10) + day) % 7)-1;
            }
return date, sex;



if (date === 0 && sex === male ) {
  outputText = "Kwasi"
}
  var outputText = "your birthday is on " + date + ".";
  saySomething(outputText);


  document.getElementById('result').innerHTML = "<h1>Your name is:</h1><div class='alert alert-success'><h2>"akan name"</h2></div>"



  var theBday = document.getElementById('resultBday');
    theBday.innerHTML = multiply;
}
