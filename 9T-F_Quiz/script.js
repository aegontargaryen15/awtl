function checkAnswers() {
    var form = document.getElementById('quizForm');
    var resultDiv = document.getElementById('result');
    var correctAnswers = 0;

    // Define the correct answers for each question
    var correctResponses = {
        q1: 'true',
        q2: 'false',
        q3: 'false',
        q4: 'false',
        q5: 'false',
        q6: 'true',
        q7: 'true',
        q8: 'true',
        q9: 'false',
        q10: 'true'
    };

    // Check each question
    for (var i = 1; i <= 10; i++) {
        var selectedOption = form['q' + i].value;
        if (selectedOption === correctResponses['q' + i]) {
            correctAnswers++;
        }
    }

    // Display the result
    resultDiv.innerHTML = 'Total Correct Answers: ' + correctAnswers;
    resultDiv.classList.remove('hidden');
}
