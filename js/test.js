document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById('submit-button');
  
  submitButton.addEventListener('click', function (event) {
    let score = 0;
    let totalQuestions = 6;
    // Prevent form submission and collect answers
    event.preventDefault();

    // Collect answers from the quiz
    const answers = {
      question1: document.querySelector('input[name="question1"]:checked')?.value,
      question2: document.querySelector('input[name="question2"]:checked')?.value,
      question3: document.querySelector('input[name="question3"]:checked')?.value,
      question4: document.querySelector('input[name="question4"]:checked')?.value,
      question5: document.querySelector('input[name="question5"]:checked')?.value,
      question6: document.querySelector('input[name="question6"]:checked')?.value,
    };

    // Correct answers
    const correctAnswers = {
      question1: 'A',
      question2: 'A',
      question3: 'A',
      question4: 'A',
      question5: 'A',
      question6: 'A',
    };


    // Compare answers
    if (answers.question1 === correctAnswers.question1) score++;
    if (answers.question2 === correctAnswers.question2) score++;
    if (answers.question3 === correctAnswers.question3) score++;
    if (answers.question4 === correctAnswers.question4) score++;
    if (answers.question5 === correctAnswers.question5) score++;
    if (answers.question6 === correctAnswers.question6) score++;

    // Calculate percentage
    const correctRate = (score / totalQuestions) * 100;

    // Store results in localStorage
    localStorage.setItem('score', score);
    localStorage.setItem('totalQuestions', totalQuestions);
    localStorage.setItem('correctRate', correctRate.toFixed(2));
    localStorage.setItem('answers', JSON.stringify(answers));
    localStorage.setItem('correctAnswers', JSON.stringify(correctAnswers));
    console.log('score:', score);
console.log('totalQuestions:', totalQuestions);
console.log('correctRate:', correctRate.toFixed(2));
console.log('answers:', answers);
console.log('correctAnswers:', correctAnswers);

    // Redirect to result page
    window.location.href = "test_result.html";
  });
});