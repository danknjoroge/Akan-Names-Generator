var CC, YY, MM, DD;
let maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
let femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];


function validateForm() {
    var genders = document.getElementsByName("gender");
  
    if( document.myForm.day.value == "") {
       alert( "Please provide your day of birth." );
       document.myForm.day.focus() ;
       return false;
    }else if( document.myForm.month.value == "") {
        alert( "Please, provide your month of birth." );
       document.myForm.month.focus() ;
       return false;
    }
    else if( document.myForm.year.value == "") {
        alert( "Please provide your year of birth." );
        document.myForm.year.focus() ;
        return false;
    }
    else if(genders[0].checked==false && genders[1].checked==false ) {
        alert("Oops!! You haven't selected gender.");
        return false;
    }   
    else{
      return true ;
    } 
}