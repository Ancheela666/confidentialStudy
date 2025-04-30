document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById('submit-button');
  
  submitButton.addEventListener('click', function (event) {
    let score = 0;
    let totalQuestions = 50;
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
      question7: document.querySelector('input[name="question7"]:checked')?.value,
      question8: document.querySelector('input[name="question8"]:checked')?.value,
      question9: document.querySelector('input[name="question9"]:checked')?.value,
      question10: document.querySelector('input[name="question10"]:checked')?.value,
      question11: document.querySelector('input[name="question11"]:checked')?.value,
      question12: document.querySelector('input[name="question12"]:checked')?.value,
      question13: document.querySelector('input[name="question13"]:checked')?.value,
      question14: document.querySelector('input[name="question14"]:checked')?.value,
      question15: document.querySelector('input[name="question15"]:checked')?.value,
      question16: document.querySelector('input[name="question16"]:checked')?.value,
      question17: document.querySelector('input[name="question17"]:checked')?.value,
      question18: document.querySelector('input[name="question18"]:checked')?.value,
      question19: document.querySelector('input[name="question19"]:checked')?.value,
      question20: document.querySelector('input[name="question20"]:checked')?.value,
      question21: document.querySelector('input[name="question21"]:checked')?.value,
      question22: document.querySelector('input[name="question22"]:checked')?.value,
      question23: document.querySelector('input[name="question23"]:checked')?.value,
      question24: document.querySelector('input[name="question24"]:checked')?.value,
      question25: document.querySelector('input[name="question25"]:checked')?.value,
      question26: document.querySelector('input[name="question26"]:checked')?.value,
      question27: document.querySelector('input[name="question27"]:checked')?.value,
      question28: document.querySelector('input[name="question28"]:checked')?.value,
      question29: document.querySelector('input[name="question29"]:checked')?.value,
      question30: document.querySelector('input[name="question30"]:checked')?.value,
      question31: document.querySelector('input[name="question31"]:checked')?.value,
      question32: document.querySelector('input[name="question32"]:checked')?.value,
      question33: document.querySelector('input[name="question33"]:checked')?.value,
      question34: document.querySelector('input[name="question34"]:checked')?.value,
      question35: document.querySelector('input[name="question35"]:checked')?.value,
      question36: document.querySelector('input[name="question36"]:checked')?.value,
      question37: document.querySelector('input[name="question37"]:checked')?.value,
      question38: document.querySelector('input[name="question38"]:checked')?.value,
      question39: document.querySelector('input[name="question39"]:checked')?.value,
      question40: document.querySelector('input[name="question40"]:checked')?.value,
      question41: document.querySelector('input[name="question41"]:checked')?.value,
      question42: document.querySelector('input[name="question42"]:checked')?.value,
      question43: document.querySelector('input[name="question43"]:checked')?.value,
      question44: document.querySelector('input[name="question44"]:checked')?.value,
      question45: document.querySelector('input[name="question45"]:checked')?.value,
      question46: document.querySelector('input[name="question46"]:checked')?.value,
      question47: document.querySelector('input[name="question47"]:checked')?.value,
      question48: document.querySelector('input[name="question48"]:checked')?.value,
      question49: document.querySelector('input[name="question49"]:checked')?.value,
      question50: document.querySelector('input[name="question50"]:checked')?.value
    };

    // Correct answers
    const correctAnswers = {
      question1: 'B',
      question2: 'C',
      question3: 'C',
      question4: 'C',
      question5: 'C',
      question6: 'A',
      question7: 'D',
      question8: 'C',
      question9: 'C',
      question10: 'B',
      question11: 'B',
      question12: 'B',
      question13: 'A',
      question14: 'D',
      question15: 'C',
      question16: 'A',
      question17: 'C',
      question18: 'A',
      question19: 'D',
      question20: 'B',
      question21: 'A',
      question22: 'C',
      question23: 'B',
      question24: 'C',
      question25: 'C',
      question26: 'A',
      question27: 'A',
      question28: 'C',
      question29: 'B',
      question30: 'C',
      question31: 'A',
      question32: 'B',
      question33: 'B',
      question34: 'B',
      question35: 'C',
      question36: 'A',
      question37: 'A',
      question38: 'C',
      question39: 'A',
      question40: 'B',
      question41: 'A',
      question42: 'A',
      question43: 'B',
      question44: 'A',
      question45: 'B',
      question46: 'A',
      question47: 'A',
      question48: 'A',
      question49: 'B',
      question50: 'B'
    };


    // Compare answers
    for (let i = 1; i <= 50; i++) {
      if (answers[`question${i}`] === correctAnswers[`question${i}`]) {
        score++;
      }
    }

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