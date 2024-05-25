
   function fun(){

    //let name = document.getElementById("form");
    
    let name1 = document.getElementById("userfname").value;
    let phone = document.getElementById("userphone").value;
    let email = document.getElementById("usermail").value;
    let message = document.getElementById("usermessage").value;



    if(name1 == ""){
       text1 = "username is required";
        
    }
    else{
        text1 = "";
    }
    
    if(phone == ""){
        text2 = "phone number is required";
    
    }
    else{
        text2 = "";    }
    

    if(email == ""){
        text3 = "email is required";
    
    }
    else{
        text3 = "";
    }
    
     if(message == ""){
        text4 = "message is required";
        
    }
    else{
        text4 = "";
    }
    

    document.getElementById("error").innerHTML = text1;
    document.getElementById("error1").innerHTML = text2;
    document.getElementById("error2").innerHTML = text3;
    document.getElementById("error3").innerHTML = text4;


   }



   



