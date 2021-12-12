
function validateForm() {
  
    if( document.myForm.date.value == "") {
       alert( "Please provide your day, month and year of birth." );
       document.myForm.date.focus() ;
       return false;
    } else if(document.myForm.gender.value == "") {
        alert("Oops!! You haven't selected gender.");
        return false;
    }   
    else{
      return true ;
    } 
}
var exactDay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

var myAkanForm= document.getElementById("myForm");
myAkanForm.addEventListener("submit",(e) =>{
    e.preventDefault();
    
    var birthDate = document.getElementById("date").value;
    birthDate = new Date(birthDate);
    gender = document.getElementById("gender").value;


    var birthYear= birthDate.getFullYear();
    var birthMonth= birthDate.getMonth() + 1;
    var  birthDay = birthDate.getDate();

    CC = birthYear.toString().substr(0,2);
    YY = birthYear.toString().substr(2,2);
    MM = birthMonth;
    DD = birthDay;

    weeksDay = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;
    weeksDay= parseInt(weeksDay);

    if (weeksDay == 0 && gender == "male") {
        alert("You were born on" + " "+ exactDay[0] + " and your Akan name is"+ " "+ maleNames[0]);
    } else if (weeksDay == 1 && gender == "male") {
        alert("You were born on" + " "+ exactDay[1] + " and your Akan name is"+ " "+ maleNames[1]);
    } else if (weeksDay == 2 && gender == "male") {
        alert("You were born on" + " "+ exactDay[2] + " and your Akan name is"+ " "+ maleNames[2]);
    } else if (weeksDay == 3 && gender == "male") {
        alert("You were born on" + " "+ exactDay[3] + " and your Akan name is"+ " "+ maleNames[3]);
    } else if (weeksDay == 4 && gender == "male") {
        alert("You were born on" + " "+ exactDay[4] + " and your Akan name is"+ " "+ maleNames[4]);
    } else if (weeksDay == 5 && gender == "male") {
        alert("You were born on" + " "+ exactDay[5] + " and your Akan name is"+ " "+ maleNames[5]);
    } else if (weeksDay == 6 && gender == "male") {
        alert("You were born on" + " "+ exactDay[6] + " and your Akan name is"+ " "+ maleNames[6]);
    } else if (weeksDay == 0 && gender == "female") {
        alert("You were born on" + " "+ exactDay[0] + " and your Akan name is"+ " "+ femaleNames[0]);
    } else if (weeksDay == 1 && gender == "female") {
        alert("You were born on" + " "+ exactDay[1] + " and your Akan name is"+ " "+ femaleNames[1]);
    } else if (weeksDay == 2 && gender == "female") {
        alert("You were born on" + " "+ exactDay[2] + " and your Akan name is"+ " "+ femaleNames[2]);
    } else if (weeksDay == 3 && gender == "female") {
        alert("You were born on" + " "+ exactDay[3] + " and your Akan name is"+ " "+ femaleNames[3]);
    } else if (weeksDay == 4 && gender == "female") {
        alert("You were born on" + " "+ exactDay[4] + " and your Akan name is"+ " "+ femaleNames[4]);
    } else if (weeksDay == 5 && gender == "female") {
        alert("You were born on" + " "+ exactDay[5] + " and your Akan name is"+ " "+ femaleNames[5]);
    } else if (weeksDay == 6 && gender == "female") {
        alert("You were born on" + " "+ exactDay[6] + " and your Akan name is"+ " "+ femaleNames[6]);
    }
    document.getElementById("myForm").reset();

});
