function submit(){
    console.log("submitted");
    let name=document.getElementById("nameId").value;
    if(name=== ""){
        console.log("Error");
        document.getElementById("nameErr").innerHTML="Error";
    }
    else{
        console.log("Name --> "+name);
    }

    let email=document.getElementById("emailId").value;
    if(email=== ""){
        console.log("Error");
        document.getElementById("emailErr").innerHTML="Error";
    }
    else{
        console.log("Name --> "+name);
    }
    let mobile=document.getElementById("mobileId").value;
    if(mobile=== ""){
        console.log("Error");
        document.getElementById("mobileErr").innerHTML="Error";
    }
    else{
        console.log("Name --> "+name);
    }
    let country=document.getElementById("countryId").value;
    console.log(country);
    if(country=== ""){
        console.log("Error");
        document.getElementById("countryErr").innerHTML="Error";
    }
    else{
        console.log("Name --> "+name);
    }
    let gender=document.getElementById("countryId").value;
    console.log(gender);
    if(gender=== ""){
        console.log("Error");
        document.getElementById("genderErr").innerHTML="Error";
    }
    else{
        console.log("Name --> "+name);
    }
}