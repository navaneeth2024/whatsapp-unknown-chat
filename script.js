function chatRedirect(){
    var num = document.getElementById("wa-number").value.trim();
    if(num) {
    window.location.href = `https://wa.me/${num}`;
    } else {
        alert("Please enter a valid phone number.");
    }
}

function numCheck(){
    var num = document.getElementById("wa-number");
    num.value = num.value.replace(/[^0-9]/g, '');
}