function akanName() {
  var bday = document.getElementById("birthday").value;
  if (bday % 4 == 0 )
}
{
    alert(bday+" is in a leap year");
  }
  else
  {
    alert(bday+" is not a leap year");  
  }
}
function leapYear(year){
   var result;
   year = parseInt(document.getElementById("isYear").value);
   if (years/400){
     result = true
   }
   else if(years/100){
     result = false
   }
   else if(years/4){
     result= true
   }
   else{
     result= false
   }
   return result
}
