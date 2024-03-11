function showInfo()
{
    //name
    var name = document.getElementById("name").value;

    //gender 
    var gender = document.getElementsByName("gender");

    //tao 1 array rong de chua cac gia tri duoc check cua gender
    var genderArr = [];

    for(var i = 0; i < gender.length; i++)
    {
        if(gender[i].checked)
        {
            //them vao array
            genderArr.push(gender[i].value);
        }
    }

    //address
    var address = document.getElementById("address").value;

    //email
    var email = document.getElementById("email").value;

    //phone
    var phone = document.getElementById("phone").value;

    //qualification
    var quali = document.getElementById("qua").value;

    alert("\n Name: " + name
        + "\n Gender: " + genderArr
        + "\n Adress: " + address
        + "\n Email: " + email
        + "\n Phone: " + phone
        + "\n Qualification: " + quali);

    //luu thong tin vao localStorage
    //localStorage.setItem("uname", name);
    localStorage.uname = name;
    localStorage.gender = genderArr;

}