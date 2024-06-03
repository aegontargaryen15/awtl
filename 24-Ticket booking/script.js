function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let movie = document.getElementById("movie").value;
    let tickets = document.getElementById("tickets").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;

    if (!name || !email || !movie || !tickets || !date || !time) {
        alert("All fields must be filled out");
        return false;
    }

    if (tickets < 1 || tickets > 10) {
        alert("Number of tickets must be between 1 and 10");
        return false;
    }

    let currentDate = new Date();
    let selectedDate = new Date(date);

    if (selectedDate < currentDate) {
        alert("Date must be in the future");
        return false;
    }

    // If all validations pass
    alert("Your tickets have been successfully booked!");
    return true;
}
