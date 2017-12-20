$(document).ready(function(){
  // variables
  var questionBank = [
    {
      question: "The title role of the 1900's movie, &quot;Pretty Woman&quot;, was played by which actress?",
      answer: 'Julia Roberts',
      choices: ['Nicole Kidman', 'Julia Roberts', 'Michelle Pfieffer', 'Emma Thompson'],
      giphy: '<iframe src="https://giphy.com/embed/UhZOXSgWpcTxS" frameBorder="0"></iframe>'
    },
    {
      question: 'BB-8 is an astromech droid from what film?',
      answer:'Star Wars',
      choices: ['Starship Troopers', 'Star Trek','Star Wars', 'Galaxy Quest'],
      giphy: '<iframe src="https://giphy.com/embed/l4KhSqMmxJtCTP6Fy" frameBorder="0"></iframe>'
    },
    {
      question: 'In the movie "The Wizard of Oz", what did the Scarecrow want from the wizard?',
      answer: 'a brain',
      choices: ['a heart', 'a brain', 'courage', 'a new hat'],
      giphy: '<iframe src="https://giphy.com/embed/HqziRCuz34Tks" frameBorder="0"></iframe>'
    },
    {
      question: 'In what year was the original "Jurassic Park" film released?',
      answer: '1993',
      choices: ['1983', '1988', '1993', '1998'],
      giphy: '<iframe src="https://giphy.com/embed/3oEjI7REP1DB4KHJDi" frameBorder="0"></iframe>'
    },
    {
      question: 'Who does the voice over for Dory from "Finding Nemo" and "Finding Dory"?',
      answer: 'Ellen Degeneres',
      choices: ['Ellen Degeneres', 'Mila Kunis', 'Drew Barrymore', 'Kate Hudson'],
      giphy: '<iframe src="https://giphy.com/embed/l46CdoZqbJxQMOvjW" frameBorder="0"></iframe>'
    },
    {
      question: 'Which actress played Katniss Everdeen in "The Hunger Games"?',
      answer: 'Jennifer Lawrence',
      choices: ['Emma Watson', 'Hayden Panettiere', 'Margot Robbie', 'Jennifer Lawrence'],
      giphy: '<iframe src="https://giphy.com/embed/phlEbeymvCd1e" frameBorder="0"></iframe>'
    },
    {
      question: 'What was the name of the monkey in the Disney movie "Aladdin"?',
      answer: 'Abu',
      choices: ['Betsey', 'Caesar', 'George', 'Abu'],
      giphy: '<iframe src="https://giphy.com/embed/4sq3FxAcRmU24" frameBorder="0"></iframe>'
    },
    {
      question: 'What fictional city is the home of Batman?',
      answer: 'Gotham City',
      choices: ['Metropolis', 'Gotham City', 'Arkham', 'Grand City'],
      giphy: '<iframe src="https://giphy.com/embed/pt6k2y43NJ2fe" frameBorder="0"></iframe>'
    },
    {
      question: 'What fictional planet is the superhero, "Superman", from?',
      answer: 'Krypton',
      choices: ['Krypton', 'Ork', 'Zandor', 'Pandora'],
      giphy: '<iframe src="https://giphy.com/embed/cbnLaovyd6OJO" frameBorder="0"></iframe>'
    },
    {
      question: "What famous actor is known for the saying, &quot;I'll be back&quot;?",
      answer: 'Arnold Schwarzenegger',
      choices: ['Sylvester Stallone', 'Charles Bronson', 'Clint Eastwood', 'Arnold Schwarzenegger'],
      giphy: '<iframe src="https://giphy.com/embed/JDKxRN0Bvmm2c" frameBorder="0"></iframe>'
    }
  ];

  var currentQuestion = -1;
  var questionCountdown;
  // var questionTimer;
  var time = 20;
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

// function giphy() {
//   $('#playSpace').html('<iframe src="https://giphy.com/embed/26FLi7OMWrsjdKh9e" width="480" height="297" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>')
// }
//
// giphy()

  // function declarations

  function clearDiv() {
  $('#main').html($("<div>", {"id": "content", 'class': 'text'}));
};

  function displayQuestion() {
    currentQuestion++;
    var answer = questionBank[currentQuestion].answer;
    console.log('answer:', answer);
    $('#content').append('<div>' + questionBank[currentQuestion].question + '</div>');
    for (var i = 0; i < questionBank[currentQuestion].choices.length; i++) {
      var button = $('<button>', {"type": "button", 'class': 'btn btn-light choice', 'value': questionBank[currentQuestion].choices[i]}).text(questionBank[currentQuestion].choices[i]);
      $('#content').append(button);
    }
    $(".choice").on("click", checkAnswer);
  };

  function countdown() {
    time--;
    $("#countdown").text(time);
    console.log(time);
    if (time === 0) {
      skip()
    }
  };

  function stopCountdown() {
    clearInterval(questionCountdown);
    time = 20
  }

  function skip() {
    stopCountdown();
    skipped++;
    result = skipped;
    go()
  };

  function questionTimer() {
    clearInterval(questionCountdown);
    $('#content').html($("<div>", {"id": "remaining", "class": "text"}).text('Time remaining:'));
    $('#content').append($("<div>", {"id": "countdown", "class": "text"}).text(time));
    questionCountdown = setInterval(countdown, 1000);
    // questionTimer = setTimeout(skip, 1000 * 5)
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
    $('#content').append(questionBank[currentQuestion].giphy);
    setTimeout(go, 1000 * 5)
  };

  var checkAnswer = function() {
    stopCountdown();
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

  var go = function() {
    if (correct + incorrect + skipped === questionBank.length) {
      displayFinal()
    }
    else {
      newQuestion()
    }
  };

  function displayFinal() {
    clearDiv();
    $('#content').append("<p>You got " + correct + " answers correct.</p>");
    $('#content').append("<p>You got " + incorrect + " answers incorrect.</p>");
    $('#content').append("<p>You skipped " + skipped + " answers.</p>");
    endMessage();
    var restartBtn = $('<button>', {'id': 'restart', 'type': 'button', 'class': 'btn btn-warning'}).text('Play Again');
    $('#content').append(restartBtn);
    $("#restart").on("click", restart)
  };

  function endMessage() {
    if (correct < 4) {
      $('#content').append("<p>Maybe you don't watch many movies. That's okay, click below to try again.</p>");
    }
    else if (correct >=4 && correct < 8) {
      $('#content').append("<p>Pretty good. There's still some room for improvement, click below to try again.</p>");
    }
    else if (correct >=8 && correct < 10) {
      $('#content').append("<p>Excellent!. There's still a little room for improvement, click below to try again.</p>");
    }
    else {
      $('#content').append("<p>Amazing! You got them all correct. If you want to prove it wasn't a fluke, click below to try again.</p>");
    }
  }

  var restart = function() {
    currentQuestion = -1;
    time = 20;
    correct = 0;
    incorrect = 0;
    skipped = 0;
    result = '';
    newQuestion()
  }
// type="button" class="btn btn-light"  clearDiv,

    // when user clicks Action button
      // display a question
    $("#action").on("click", newQuestion);
    // $(".choice").on("click", checkAnswer);
    // $("#action").on("click", newQuestion);
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
