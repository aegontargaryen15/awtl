function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var servicePackage = document.getElementById('servicePackage').value;
    var num = document.getElementById("ph").value;

    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    var nameRegex = /^[a-zA-Z]+$/;

    if (name.trim() === '') {
        alert('Please enter your name');
        return false;
    } else if (!name.match(nameRegex)) {
        alert('Please enter a valid name with only alphabets');
        return false;
    } else if (atpos < 1 || (dotpos - atpos < 2)) {
        alert('Please enter a valid email address');
        return false;
    } else if (isNaN(num) || num.length !== 10) {
        alert('Please enter a valid 10-digit phone number');
        return false;
    } else if (servicePackage === '') {
        alert('Please select a service package');
        return false;
    } else {
        alert("Validation successful!!");
        window.location.href = "successful.html";
        return true;
    }
}
