function checkName() {
    let name = document.getElementById("name").value;
    let regex = /^[a-zA-Z\s]{2,15}$/;

    if (regex.test(name)) {
        document.getElementById("name").style.backgroundColor="rgb(188, 241, 185)";
        document.getElementById("name_check").innerHTML = "";
        outputData();
        return true;
    }
    else {
        document.getElementById("name").style.backgroundColor="pink";
        document.getElementById("name_check").innerHTML = "Please, enter 2-15 characters"
        return false;
    }
}

function checkTel() {
    let tel = document.getElementById("tel").value;
    let regex = /^8-\d{3}-\d{3}-\d{2}-\d{2}$/;

    if (regex.test(tel)) {
        document.getElementById("tel").style.backgroundColor="rgb(188, 241, 185)";
        document.getElementById("tel_check").innerHTML = "";
        outputData();
        return true;
    }
    else {
        document.getElementById("tel").style.backgroundColor="pink";
        document.getElementById("tel_check").innerHTML = "Please, enter phone number (for example, 8-123-456-78-90)"
        return false;
    }
}

function checkQuantity() {
    let q = document.getElementById("quantity").value;
    let min = 1;
    let max = 100;

    if (q <min) {
        document.getElementById("quantity").style.backgroundColor="pink";
        document.getElementById("quantity_check").innerHTML = "Quantity cannot be less than 1";
        return false;
    }
    else if (q > max){
        document.getElementById("quantity").style.backgroundColor="pink";
        document.getElementById("quantity_check").innerHTML = "Quantity cannot be more than 100";
        return false;
    }
    else {
        document.getElementById("quantity").style.backgroundColor="rgb(188, 241, 185)";
        document.getElementById("quantity_check").innerHTML = "";
        outputData();
        return true;
    }
}

function outputData() {
    let p1 = document.getElementById("quantity_check").value;
    let p2 = document.getElementById("name_check").value;
    let p3 = document.getElementById("tel_check").value;
    let p4 = document.getElementById("date").value;
    let p5 = document.getElementById("quantity").value;
    let p6 = document.getElementById("name").value;
    let p7 = document.getElementById("tel").value;

    if (p1 != "" && p2 != "" && p3 != "" && p4 != "" && p5 != "" && p6 != "" && p7 != "") {
        document.getElementById("sender").disabled = false;
        document.getElementById("sender").style.backgroundColor = "#FFD429";
        return true;
    }
}

function send() {
    document.getElementById("send_check").innerHTML = "Заявка отправлена";
    return true;
}