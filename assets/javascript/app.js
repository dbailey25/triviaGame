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
      answer: 'A brain',
      choices: ['A heart', 'A brain', 'Courage', 'A new hat']
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
  var correct;
  var incorrect;
  var skipped;
console.log('currentQuestion', currentQuestion);
  // pageload function calls

  // function declarations
// var clearDiv = function() {
//   $('#main').html($("<div>", {"id": "content"}));
// };
//
//   var displayQuestion = function() {
//     currentQuestion++,
//     $('#content').append('<div>'+questionBank[currentQuestion].question+'</div>');
//     for (var i = 0; i < questionBank[currentQuestion].choices.length; i++) {
//       var button = $('<button>', {"type": "button", 'class': 'btn btn-light choice'}).text(questionBank[currentQuestion].choices[i]);
//       $('#content').append(button)
//     }
//   };
//
//   var countdown = function() {
//     time--;
//     $("#countdown").text(time);
//     console.log(time);
//   };
//
//   var skip = function() {
//     clearInterval(questionInterval);
//     displayQuestion;
//   };
//
//   var questionTimer = function() {
//     $('#content').html($("<div>", {"id": "countdown"}).text(time));
//     questionInterval = setInterval(countdown, 1000);
//     setTimeout(skip, 1000 * 30);
//   };

  function clearDiv() {
  $('#main').html($("<div>", {"id": "content"}));
};

  function displayQuestion() {
    currentQuestion++,
    $('#content').append('<div>'+questionBank[currentQuestion].question+'</div>');
    for (var i = 0; i < questionBank[currentQuestion].choices.length; i++) {
      var button = $('<button>', {"type": "button", 'class': 'btn btn-light choice'}).text(questionBank[currentQuestion].choices[i]);
      $('#content').append(button)
    }
  };

  function countdown() {
    time--;
    $("#countdown").text(time);
    console.log(time)
  };

  function skip() {
    clearInterval(questionInterval);
    time = 30;
    newQuestion()
  };

  function questionTimer() {
    $('#content').html($("<div>", {"id": "countdown"}).text(time));
    questionInterval = setInterval(countdown, 1000);
    setTimeout(skip, 1000 * 5)
  };

// type="button" class="btn btn-light"  clearDiv,

    // when user clicks Action button
    $("#action").on("click", newQuestion);
      // display a question
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
