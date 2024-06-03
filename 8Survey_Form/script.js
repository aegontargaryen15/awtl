document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form data
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var email = document.getElementById('email').value;
    var rating = document.getElementById('rating').value;
    var recommend = document.querySelector('input[name="recommend"]:checked');
    var purchase = document.querySelector('input[name="purchase"]:checked');
    var service = document.querySelector('input[name="service"]:checked');
    var recommendProduct = document.querySelector('input[name="recommendProduct"]:checked');
    var navigate = document.querySelector('input[name="navigate"]:checked');

    // Check if all required fields are filled
    if (name && age && email && rating && recommend && purchase && service && recommendProduct && navigate) {
        // Display thank you message
        document.getElementById('surveyForm').style.display = 'none';
        document.getElementById('thankYouMessage').style.display = 'block';

        // Optionally, summarize responses
        console.log('Name:', name);
        console.log('Age:', age);
        console.log('Email:', email);
        console.log('Rating:', rating);
        console.log('Would recommend:', recommend.value);
        console.log('Purchase likelihood:', purchase.value);
        console.log('Service satisfaction:', service.value);
        console.log('Product recommendation likelihood:', recommendProduct.value);
        console.log('Website navigation feedback:', navigate.value);
    } else {
        alert('Please fill in all fields.');
    }
});
