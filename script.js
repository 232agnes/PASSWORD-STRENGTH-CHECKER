var isVisible = false;

function see() {
    var input = document.getElementById("password");
    var see = document.getElementById("see");
    
    if (isVisible) {
        input.type = 'password';
        isVisible = false;
        see.style.color = 'gray';
    } else {
        input.type = 'text';
        isVisible = true;
        see.style.color = '#262626';
    }
}

function check() {
    var input = document.getElementById("password").value;
    document.getElementById("password").value = input;
    document.getElementById("count").innerText = "Length: " + input.length;

    if (input.length > 5) {
        document.getElementById("check0").style.color = "green";
    } else {
        document.getElementById("check0").style.color = "red";
    }

    if (input.length < 10) {
        document.getElementById("check1").style.color = "green";
    } else {
        document.getElementById("check1").style.color = "red";
    }

    if (/\d/.test(input)) {
        document.getElementById("check2").style.color = "green";
    } else {
        document.getElementById("check2").style.color = "red";
    }

    if (/[^A-Za-z0-9]/.test(input)) {
        document.getElementById("check3").style.color = "green";
    } else {
        document.getElementById("check3").style.color = "red";
    }

    if (/\s/.test(input)) {
        document.getElementById("check4").style.color = "green";
    } else {
        document.getElementById("check4").style.color = "red";
    }
}
