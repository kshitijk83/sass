$(document).ready(function(){
    $('.navigation__item').click(function(){
        $('.navigation__checkbox').prop('checked', false);
        
    })
    $('#roomsuite').click(function(){
        $('#room').prop('checked', true);
    })
    $('#cottagesuite').click(function(){
        $('#cottage').prop('checked', true);
    })

})

function Submit(e) {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var contact = document.getElementById("contact").value.trim();
    var startDate = document.getElementById("start-date").value.trim();
    var endDate = document.getElementById("end-date").value.trim();
    var people = document.getElementById("people").value.trim();
    var roomType="";

    if(document.getElementById("room").checked) {
        roomType = document.getElementById("room").value;
        document.getElementById("err").style.display="none";
    }else if(document.getElementById("cottage").checked) {
        roomType = document.getElementById("cottage").value;
        document.getElementById("err").style.display="none";
    }

    if(!(name && email && contact && startDate && endDate && people)) {
        return false;
    }
    if(!roomType) {
        e.preventDefault();
        $("#err").css('opacity', '1');
        // $('.checkreq').text("Plz select one option in Checkbox");
        // $('.blah')[0].click();
        return false;
    }

    var objectToSend = {
        "name": name,
        "email": email,
        "contact": contact,
        "startDate": startDate,
        "endDate": endDate,
        "people": people,
        "roomType": roomType
    };

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "/adduser");
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(JSON.stringify(objectToSend));

    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState == 4){
            var res = JSON.parse(xmlhttp.responseText);
            console.log(res);
            if(res==500){
                console.log("rooms not empty");
                document.getElementById("checkreq").innerHTML ="Rooms are not empty"
                document.getElementById("blah").click();
            }
            else{
                document.getElementById("myform").reset();
                document.getElementById("checkreq").innerHTML ="Thank you, you will be contact shortly";
                document.getElementById("blah").click();
            }
        }
    }
    e.preventDefault();
}