function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var bouquetType = document.getElementById('bouquetType').value;

    if (name.trim() === '') {
        alert('Please enter your name');
        return false;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === '' || !emailPattern.test(email)) {
        alert('Please enter a valid email address');
        return false;
    }

    if (bouquetType === '') {
        alert('Please select a bouquet type');
        return false;
    }

    alert("Validation successful! Order placed.");
    return true;
}