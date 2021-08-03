function validateForm() {
    let fname = firstname();
    let lname = lastname();
    let mail = email();
    let dropdown = gender();
    let stream = course();
    if(validateForm==true){
        console.log({
            FirstName: fname, LastName: lname,
            Email: mail, gender: dropdown, course: stream
        });
    }
   return false;
}

function firstname() {
    let fname = document.forms["myForm"]["firstName"].value;
    if (fname.length == 0) {
        document.getElementById("err").innerHTML = "Firstname required";
        return false;
    } else {
        console.log(fname);
        document.getElementById("err").innerHTML = "";
        return fname;
    }
}
function lastname() {
    let lname = document.forms["myForm"]["lastName"].value;
    if (lname.length == 0) {
        document.getElementsByTagName("small")[1].innerHTML = "Lastname required";
        return false;
    } else {
        console.log(lname);
        document.getElementsByTagName("small")[1].innerHTML = "";
        return lname;
    }
}
function email() {
    let email = document.forms["myForm"]["enterEmail"].value;
    if (email.length == 0) {
        document.getElementsByTagName("small")[2].innerHTML = "Email required";
        return false;
    } else {
        console.log(email);
        document.getElementsByTagName("small")[2].innerHTML = "";
        return email;
    }
}
function gender() {
    let gender = document.forms["myForm"]["gender"].value;
    if (gender == "select") {
        document.getElementsByTagName("small")[3].innerHTML = "Gender required";
        return false;
    }
    else {
        console.log(gender);
        document.getElementsByTagName("small")[3].innerHTML = "";
        return gender;
    }
}
function course() {
    if(document.myForm.one.checked == true && document.myForm.two.checked == true){
        document.getElementsByTagName("small")[4].innerHTML = "";
        let first = document.getElementById("course1").value;
        
        let last = document.getElementById("course2").value;
        return Object({ch1:first,ch2:last});
    }
    else if (document.myForm.one.checked == true) {
        document.getElementsByTagName("small")[4].innerHTML = "";
        let first = document.getElementById("course1").value;
        return first;
    }else if (document.myForm.two.checked == true) {
        document.getElementsByTagName("small")[4].innerHTML = "";
        let last = document.getElementById("course2").value;
        return last;
    }
    else{

        document.getElementsByTagName("small")[4].innerHTML = "Please select required courses";
        return false;
        
    }
}