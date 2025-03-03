document.addEventListener("DOMContentLoaded", function () {
  const correctRate = localStorage.getItem('correctRate');
  const score = localStorage.getItem('score');
  const totalQuestions = localStorage.getItem('totalQuestions');
  const answers = JSON.parse(localStorage.getItem('answers'));
  const correctAnswers = JSON.parse(localStorage.getItem('correctAnswers'));

  // Display correct rate
  document.getElementById('correctRate').textContent = `${correctRate}% (${score}/${totalQuestions})`;

  const questions = [
    { 
      question: '1. 下列哪个数字最大？', 
      options: ['A', 'B', 'C', 'D'],
      userAnswer: answers.question1,
      correctAnswer: correctAnswers.question1
    },
    { 
      question: '2. 以下说法是否正确：xxx。',
      options: ['A.正确', 'B.不正确'],
      userAnswer: answers.question2,
      correctAnswer: correctAnswers.question2
    },{ 
      question: '3. 在《xxx》中，下面哪个选项是正确的？', 
      options: ['A', 'B', 'C', 'D'],
      userAnswer: answers.question3,
      correctAnswer: correctAnswers.question3
    },{ 
      question: '4. 在《xxx》中，下面哪个选项是正确的？', 
      options: ['A', 'B', 'C', 'D'],
      userAnswer: answers.question4,
      correctAnswer: correctAnswers.question4
    },{ 
      question: '5. 在《xxx》中，下面哪个选项是正确的？', 
      options: ['A', 'B', 'C', 'D'],
      userAnswer: answers.question5,
      correctAnswer: correctAnswers.question5
    },{ 
      question: '6. 在《xxx》中，下面哪个选项是正确的？', 
      options: ['A', 'B', 'C', 'D'],
      userAnswer: answers.question6,
      correctAnswer: correctAnswers.question6
    },

  ];

  const questionResults = document.getElementById('questionResults');

  questions.forEach((item, index) => {
    const questionElement = document.createElement('div');
    questionElement.classList.add('question-result');
    const questionTitle = document.createElement('p');
    questionTitle.textContent = item.question;
    const optionsList = document.createElement('div');
    optionsList.classList.add('options-list');

    item.options.forEach((option, i) => {
      const optionLabel = document.createElement('label');
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = `question${index + 1}`;
      input.disabled = true;
      input.checked = (item.userAnswer === option);
      const checkmark = document.createElement('span');
      checkmark.classList.add('checkmark');

      optionLabel.classList.add('option');

      console.log("answer:")
      console.log(item.userAnswer)
      console.log("correctAnswer:")
      console.log(item.correctAnswer)
      console.log("option:")
      console.log(option)
      
      if (item.userAnswer === option[0] && item.userAnswer === item.correctAnswer) {
        optionLabel.style.backgroundColor = 'rgb(156, 255, 89)';
        checkmark.style.backgroundColor = 'white';
      } else if (item.userAnswer === option[0] && item.userAnswer !== item.correctAnswer) {
        optionLabel.style.backgroundColor = 'rgb(255, 155, 155)';
        checkmark.style.backgroundColor = 'red';
      } else if (item.correctAnswer === option[0]) {
        optionLabel.style.backgroundColor = 'rgb(156, 255, 89)';
      }

      optionLabel.append(input, checkmark, option);
      optionsList.appendChild(optionLabel);
    });

    questionElement.append(questionTitle, optionsList);
    questionResults.appendChild(questionElement);
  });
});
