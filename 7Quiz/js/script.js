function submitQuiz() {
    const quizForm = document.getElementById('quiz-form');
    const resultContainer = document.getElementById('result-container');
    const scoreElement = document.getElementById('score');

    let score = 0;

    // Questions and correct answers
    const correctAnswers = {
        q1: 'Paris',
        q2: 'JavaScript',
        q3: 'Tokyo',
        q4: 'Jupiter',
        q5: 'Canberra',
        q6: 'Nitrogen',
        q7: 'William Shakespeare',
        q8: 'Pacific Ocean',
        q9: 'Joe Biden',
        q10: 'Au'
    };

    // Check user's answers
    for (let i = 1; i <= Object.keys(correctAnswers).length; i++) {
        const questionName = 'q' + i;
        const selectedAnswer = quizForm.elements[questionName].value;

        if (selectedAnswer === correctAnswers[questionName]) {
            score++;
        }
    }

    // Display results
    scoreElement.textContent = score;
    resultContainer.classList.remove('hidden');
}
