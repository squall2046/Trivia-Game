// Isaac Wu Trivia Game

//-------------------------------------------------------
//             questions and Answers
//-------------------------------------------------------

// http://www.funtrivia.com/en/Movies/The-Matrix-8691.html
// http://www.wavlist.com/movies/043/index.html
// http://www.moviewavs.com/Movies/Matrix.html

// All questions array:
var questionArray = [
    "[Question 1] What color of pill that Neo picked from Morpheus?",
    "[Question 2] When Neo first entered the Matrix, he had a 'deja vu', and Morpheus discovered that they are in grave danger. Which creature of the 'deja vu' ?",
    "[Question 3] What is the item in the package that Neo received in his office ?",
    "[Question 4] The Matrix Quotes: 'I know kung fu.'",
    "[Question 5] Only one of these legendary lines is actually SPOKEN in Matrix. Which one is it?",
    "[Bonus] What is the training program that everyone misses the first time?"
];

// All options array:
var optaArray = [
    "A: Blue",
    "A: White Rabbit",
    "A: Glasses",
    "A: Morpheus",
    "A: 'Free my mind.'",
    "A: The Nunchucks Program"
];

var optbArray = [
    "B: Green",
    "B: Crow",
    "B: Cellphone",
    "B: Agent Smith",
    "B: 'Human beings are like a bad virus.'",
    "B: The Helicopter Operation Program"
];

var optcArray = [
    "C: Red",
    "C: Gold Fish",
    "C: Suit",
    "C: Neo",
    "C: 'Luke, I am your Father.'",
    "C: The Taekwondo Program"
];

var optdArray = [
    "D: Transparent",
    "D: Black Cat",
    "D: Shield",
    "D: Trinity",
    "D: 'Remember, there is no fork.'",
    "D: The Jump Program"
];

var answerArray = [
    "C: Red",
    "D: Black Cat",
    "B: Cellphone",
    "C: Neo",
    "A: 'Free my mind.'",
    "D: The Jump Program"
];

var gifArray = [
    "<img src='assets/images/giphy-23.gif' class='gifsize'>",
    "<img src='assets/images/Cat_matrix_deja_vu.gif' class='gifsize'>",
    "<img src='assets/images/matrixxxx.gif' class='gifsize'>",
    "<img src='assets/images/giphy.gif' class='gifsize'>",
    "<img src='assets/images/matrix1.gif' class='gifsize'>",
    "<img src='assets/images/og8z19i2fvk01.gif' class='gifsize'>"
];

var audioArray = [

];

var rollNumber = 0;
function qnaRoll() {
    $(".question").text(questionArray[rollNumber])
    $("#opta").text(optaArray[rollNumber])
    $("#optb").text(optbArray[rollNumber])
    $("#optc").text(optcArray[rollNumber])
    $("#optd").text(optdArray[rollNumber])

    $(".answer").text(answerArray[rollNumber]);
    $(".answer-gif").html(gifArray[rollNumber]);
};
qnaRoll();

var rightTimes = 0;
var wrongTimes = 0;
var timeOutTimes = 0;


//-------------------------------------------------------
//                   function start
//-------------------------------------------------------

// (page 1) Start page, HIDE everything else behind.
$(".question-page, .option-page, .answer-page, .result-page").hide();

// (page 2) Click START and turn to quiz page, all following code shouldn't be out of this function.
$(".start-button").on("click", function () {
    $(".start-button, .answer-page, .result-page").hide();
    $(".time-left, .question-page, .option-page").show();

    // Time decrement number start from:
    var dNumber = 21;

    // set up time interval rule and funInterval function:
    var interval = setInterval(funInterval, 1000);

    // time decrement start:
    function funInterval() {
        dNumber--;
        $(".time-left").html("Seconds: " + dNumber);

        ////////////////////////////////////////////
        ///////// if No Click and time up:: ////////
        ////////////////////////////////////////////
        if (dNumber === -1) {
            // Show "Time Out" instead of time decrement,
            $(".time-left").text("- TIME OUT -");
            // then check answer(check answer will turn time decrement back later).
            checkAnswer();
            console.log(rollNumber)
            console.log(answerArray.length)
            timeOutTimes++;
        }
    }

    ////////////////////////////////////////////
    ////////// if Clicked any options: /////////
    ////////////////////////////////////////////
    $("#opta").on("click", function () {
        if (optaArray[rollNumber] === answerArray[rollNumber]) {
            // Show you are "RIGHT or WRONG" instead of time decrement,
            $(".time-left").html("YOU'RE RIGHT");
            rightTimes++;
        } else {
            $(".time-left").html("YOU'RE WRONG");
            wrongTimes++;
        }
        // then check answer(check answer will turn time decrement back later).
        console.log(rollNumber);
        console.log(answerArray.length);
        checkAnswer();

    })
    $("#optb").on("click", function () {
        if (optbArray[rollNumber] === answerArray[rollNumber]) {
            $(".time-left").html("YOU'RE RIGHT");
            rightTimes++;
        } else {
            $(".time-left").html("YOU'RE WRONG");
            wrongTimes++;
        }
        console.log(rollNumber);
        console.log(answerArray.length);
        checkAnswer();

    })
    $("#optc").on("click", function () {
        if (optcArray[rollNumber] === answerArray[rollNumber]) {
            $(".time-left").html("YOU'RE RIGHT");
            rightTimes++;
        } else {
            $(".time-left").html("YOU'RE WRONG");
            wrongTimes++;
        }
        console.log(rollNumber);
        console.log(answerArray.length);
        checkAnswer();

    })
    $("#optd").on("click", function () {
        if (optdArray[rollNumber] === answerArray[rollNumber]) {
            $(".time-left").html("YOU'RE RIGHT");
            rightTimes++;
        } else {
            $(".time-left").html("YOU'RE WRONG");
            wrongTimes++;
        }
        console.log(rollNumber);
        console.log(answerArray.length);
        checkAnswer();
    })

    //---------------( X _ X )--------------------
    function checkAnswer() {
        // step1:Stop time decrement.
        clearInterval(interval);

        // step2:Meantime, hide option page, and show answer page.
        $(".option-page").hide();
        $(".answer-page").show();

        // step3:Meantime, set a 8 seconds answer-reading timer,
        var timeout = setTimeout(funTimer, 1000 * 8);

        // step4:After 8 seconds, restart time decrement.
        function funTimer() {
            dNumber = 20;
            // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!ATTENTION!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            // You have to clearinterval AGAIN before re-do setinterval, or the time will reduce double.
            clearInterval(interval);
            interval = setInterval(funInterval, 1000)

            // step5: Meantime, remove "you are RIGHT or WRONG" or "Time Out" and show time decrement.
            $(".time-left").html("Seconds: " + dNumber);

            // step6: Meantime, roll to the next question and answer, and reload the qna.
            rollNumber++;
            qnaRoll();

            // step7: Meantime, hide answer page, show question page.
            $(".option-page").show();
            $(".answer-page").hide();

            // (page 3) if all questions rolled, turn to the Result Page
            if (rollNumber > answerArray.length - 1) {
                $(".question-page, .option-page, .answer-page").hide();
                $(".time-left").html("- THE END -");
                $(".result-page").show();
                $(".right-times").text("Right Answers: " + rightTimes);
                $(".wrong-times").text("Wrong Answers: " + wrongTimes);
                $(".time-out").text("Time Out: " + timeOutTimes);
                $(".restart-button").on("click", function () {
                    location.reload();
                });

                clearInterval(interval);
                clearTimeout(timeout);
            }

        }
    } //---------------( ^ _ ^ )--------------------
})
