function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("1. What is the reccomended unit for text size in Android?", ["dp", "px","in", "sp"], "sp"),
    new Question("2. Acquiring the properties of one class to another is", [" Data Hiding", " Polymorphism", " Abstraction", " Inheritance"], " Inheritance"),
    new Question("3. Which of the following is NOT a compulsory attribute of a Linear Layout?", [" android:layout_height", "android:layout_width"," android:layout_gravity", " android:orientation"], " android:layout_gravity"),
    new Question("4. If we have to align an <ImageView/> below a <TextView/> in a Relative Layout, which of the following attributes would we use?", [" android:below", "andoid:below_layout", " android:layout_bottom", "android:layout_below"], "android:layout_below"),
    new Question("5.  This method is called when the activity is destroyed ", [" onCreate()", " onPause()", "  onDestroy()", "onStop()"], " onDestroy()"),
    new Question("6.The property where code and data are bound together is called:?", ["Encapsulation", "Polymorphism"," Abstraction", " Inheritance"], " Encapsulation"),
    new Question("7.  In which block do we receive the values passed as constructor parameters? ", ["static block", " init block","object block", " main function"], " init block"),
    new Question("8. For exception handling we would use a", ["for loop", " when expression"," if and else", "try and catch block"], "try and catch block"),
    new Question("9. You can't change a variable value if it is initialized as a val", ["TRUE", " FALSE"," Maybe", " not sure"], "FALSE"),
    new Question("10. A function can have how many parameters", ["as many as needed", "4","7", "11"], "as many as needed"),

];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();





