$(document).ready(function(){
  // variables
  var questionBank = [
    {
      question: 'BB-8 is an astromech droid from what film?',
      answer:'Star Wars',
      choices: ['Starship Troopers', 'Star Trek','Star Wars', 'Galaxy Quest']
    },
    {
      question: 'In the movie "The Wizard of Oz", what did the Scarecrow want from the wizard?',
      answer: 'a brain',
      choices: ['a heart', 'a brain', 'courage', 'a new hat']
    },
    {
      question: 'In what year was the original "Jurassic Park" film released?',
      answer: '1993',
      choices: ['1983', '1988', '1993', '1998']
    },
    {
      question: 'Who does the voice over for Dory from "Finding Nemo" and "Finding Dory"?',
      answer: 'Ellen Degeneres',
      choices: ['Ellen Degeneres', 'Mila Kunis', 'Drew Barrymore', 'Kate Hudson']
    },
    {
      question: 'Which actress played Katniss Everdeen in "The Hunger Games"?',
      answer: 'Jennifer Lawrence',
      choices: ['Emma Watson', 'Hayden Panettiere', 'Margot Robbie', 'Jennifer Lawrence']
    }
    // ,
    // {
    //   question: "The title role of the 1900's movie, &quot;Pretty Woman&quot;, was played by which actress?",
    //   answer: 'Julia Roberts'
    // },
    // {
    //   question: 'What is the name of the dog from "Wizard of Oz"?',
    //   answer: 'Toto'
    // },
    // {
    //   question: 'What fictional city is the home of Batman?',
    //   answer: 'Gotham City'
    // },
    // {
    //   question: 'What fictional planet is the superhero, "Superman", from?',
    //   answer: 'Krypton'
    // },
    // {
    //   question: "What famous actor is known for the saying, &qout;I'll be back&quot;?",
    //   answer: 'Arnold Schwarzenegger'
    // }
  ];

  var currentQuestion = -1;
  var questionInterval;
  var time = 30;
  var newQuestion = function() {
    clearDiv()
    questionTimer()
    displayQuestion()
  };
  var messsages = ['<p>It looks like you missed that one. The correct answer is ', "<p>That's right. The correct answer is ", '<p>Not quite. The correct answer is '];
  var result;
  var correct = 0;
  var incorrect = 0;
  var skipped = 0;
console.log('currentQuestion', currentQuestion);
  // pageload function calls

  // function declarations

  function clearDiv() {
  $('#main').html($("<div>", {"id": "content"}));
};

  function displayQuestion() {
    currentQuestion++;
    var answer = questionBank[currentQuestion].answer;
    console.log('answer:', answer);
    $('#content').append('<div>'+questionBank[currentQuestion].question+'</div>');
    for (var i = 0; i < questionBank[currentQuestion].choices.length; i++) {
      var button = $('<button>', {"type": "button", 'class': 'btn btn-light choice', 'value': questionBank[currentQuestion].choices[i]}).text(questionBank[currentQuestion].choices[i]);
      $('#content').append(button);
    }
    $(".choice").on("click", checkAnswer)
  };

  function countdown() {
    time--;
    $("#countdown").text(time);
    console.log(time)
  };

  function skip() {
    clearInterval(questionInterval);
    result = skipped;
    time = 30;
    displayResult()
  };

  function questionTimer() {
    $('#content').html($("<div>", {"id": "countdown"}).text(time));
    questionInterval = setInterval(countdown, 1000);
    setTimeout(skip, 1000 * 5)
  };

  var displayResult = function() {
    clearDiv();
    console.log('displayResult result', result);
    if (result === 'yes') {
      $('#content').html(messsages[1] + questionBank[currentQuestion].answer + '.</p>')
    }
    else if (result === 'no') {
      $('#content').html(messsages[2] + questionBank[currentQuestion].answer + '.</p>')
    }
    else {
      $('#content').html(messsages[0] + questionBank[currentQuestion].answer + '.</p>')
    };
    setTimeout(newQuestion, 1000 * 5)
  };

  var checkAnswer = function() {
    clearInterval(questionInterval);
    var userGuess = $(this).attr('value');
    var guessResult = (userGuess === questionBank[currentQuestion].answer);
    console.log('guessResult', guessResult);
    if (guessResult) {
      correct++;
      result = 'yes'
    }
    else {
      incorrect++;
      result = 'no'
    }
    console.log('checkAnswer result', result);
    console.log('correct', correct);
    console.log('incorrect', incorrect);
    displayResult()
}

// type="button" class="btn btn-light"  clearDiv,

    // when user clicks Action button
      // display a question
    $("#action").on("click", newQuestion);
    $(".choice").on("click", checkAnswer);
  // var btnValue = $(".choice").attr('value');
  // console.log(btnValue);
        // clear content div
        // display quest
        // display each choice in a button
      // start timer
      // display time remaining
    // when user clicks a choice button
      // stop timer
      // check answer
        // compare user selection with correct answer
        // record outcome in appropriate results var
        // display corret answer and appropriate message
      // after a waiting period automatically display a new question
    // if user doesn't click a choice button within allotted time
      // display appropriate notification
      // after a waiting period automatically display a new question
    // after all questions are completed, display final results
      // clear main div
      // display results
      // display appropriate conclusion message
      // display Play Again button
    // if user clicks Play Again
      // clear results variables
      // display first question

});
