function submitForm(e) {
    e.preventDefault();
    // let name = document.forms["welcome_form"]["name"].value;
  
    // sessionStorage.setItem("name", name);
    var a = document.getElementById("ii");
    if(a == " "){
      document.getElementById("para").innerHTML="* This is a required"
    }
  
    location.href = "quiz.html";
  }