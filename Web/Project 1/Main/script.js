function submit(){
    console.log("submitted");
    let name=document.getElementById("nameId").value;
    if(name=== ""){
        console.log("Error");
        document.getElementById("nameErr").innerHTML="Error";
    }
    else{
        document.getElementById("nameErr").innerHTML="";
        console.log("Name --> "+name);
    }

    let email=document.getElementById("emailId").value;
    if(email=== ""){
        console.log("Error");
        document.getElementById("emailErr").innerHTML="Error";
    }
    else{
        var atIndex=email.indexOf("@");
        var dotIndex=email.lastIndexOf(".");

        if(atIndex<=0 || dotIndex<= atIndex || dotIndex === email.length -1){
            console.log("error");
            document.getElementById("emailErr").innerHTML="Error";
        }
        else{
         console.log("Email-->"+email);    
         document.getElementById("emailErr").innerHTML="";
        }
    }
    let mobile=document.getElementById("mobileId").value;
            if(mobile=== ""|| mobile.length!==10){
        console.log("Error");
        document.getElementById("mobileErr").innerHTML="Error";
    }
    else{
        document.getElementById("mobileErr").innerHTML="";
        console.log("Mobile Number --> "+mobile);
    }
    let country=document.getElementById("countryId").value;
    console.log(country);
    if(country=== ""){
        console.log("Error");
        document.getElementById("countryErr").innerHTML="Error";
    }
    else{
        document.getElementById("countryErr").innerHTML="";
        console.log("Country --> "+country);
    }
    // console.log(document.getElementById("genderId").value);
    let gender=document.getElementsByName("gender");
    let genderval="";
    for(let i=0;i<gender.length;i++){
        // console.log(gender[i].checked);
        if(gender[i].checked===true){
            // console.log(gender[i].value);
            genderval=gender[i].value;
            
        }
    }
    if(genderval===""){
        console.log("Error");
        document.getElementById("genderErr").innerHTML="Error";
    }
    else{
            console.log("Gender-->"+genderval);
            alert(`Name --> ${name}
            Email--> ${email}
            Mobile Number--> ${mobile}
            Country--> ${country}
            Gender--> ${genderval}

            `);
            document.getElementById("genderErr").innerHTML="";
        }
    }
  
    
