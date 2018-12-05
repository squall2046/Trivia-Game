// Isaac Wu Trivia Game

//-------------------------------------------------------
//             Set questions and Answers
//-------------------------------------------------------

// http://www.funtrivia.com/en/Movies/The-Matrix-8691.html
// http://www.wavlist.com/movies/043/index.html
// http://www.moviewavs.com/Movies/Matrix.html

// All questions array:
var questionArray = [
    "q1",
    "q2",
    "q3",
    "q4",
    "q5",
    "q6"
];

// All options array:
var optaArray = [
    "oa1",
    "oa2",
    "oa3",
    "oa4",
    "oa5",
    "oa6"
];

var optbArray = [
    "ob1",
    "ob2",
    "",
    "",
    "",
    ""
];

var optcArray = [
    "oc1",
    "oc2",
    "",
    "",
    "",
    ""
];

var optdArray = [
    "od1",
    "od2",
    "",
    "",
    "",
    ""
];

var answerArray = [
    "C",
    "B",
    "A",
    "C",
    "D"];

var gifArray = [
"<img src='assets/images/giphy-23.gif' class='gifsize'>",
"<img src='assets/images/bullet-time.gif' class='gifsize'>",
"<img src='assets/images/og8z19i2fvk01.gif' class='gifsize'>",
"<img src='assets/images/matrixxxx.gif' class='gifsize'>",

"<img src='assets/images/giphy.gif' class='gifsize'>",
"<img src='assets/images/matrix1.gif' class='gifsize'>"
];

var audioArray = [

];

var rollNumber = 0;
function qnaRoll() {
    $("#question").text(questionArray[rollNumber])
    $("#opta").text(optaArray[rollNumber])
    $("#optb").text(optbArray[rollNumber])
    $("#optc").text(optcArray[rollNumber])
    $("#optd").text(optdArray[rollNumber])

    $(".answer").text("The answer is: " + answerArray[rollNumber]);
    $(".answer-gif").html(gifArray[rollNumber]);
};
qnaRoll();


//-------------------------------------------------------
//                   function start
//-------------------------------------------------------
function startgame() {
    $(".time-left, .question-page, .option-buttons, .answer-page, .result-page").hide();

    // Click Start and turn to quiz page
    $(".start-button").on("click", function () {
        $(".start-button").hide();
        $(".time-left, .question-page, .option-buttons").show();
        dNumber = 11;
        funDecement();


    })
};
startgame();


// start number from:
var dNumber = 11;

// set time interval rule:
var interval = setInterval(funDecement, 1000)

// time decement function:
function funDecement() {
    dNumber--;
    $(".time-left").html("Second: " + dNumber);

    /////////////// if No Click: ///////////////
    //when time up:
    if (dNumber === -1) {
        function answercheck() {
            // stop time decement
            clearInterval(interval);
            dNumber = 10;
            $(".time-left").html("Second: " + dNumber);

            //show answer page
            $(".option-buttons").hide();
            $(".answer-page").show();
            $(".response").text("Time out!");

            // set 5-second read-answer-time then jump to next question
            setTimeout(function () {
                rollNumber++;
                qnaRoll();
                $(".option-buttons").show();
                $(".answer-page").hide();
                // restart time decement
                interval = setInterval(funDecement, 1000);
            }, 1000 * 8)
        } answercheck();
    }
} funDecement();

/////////////// if Click: ///////////////
$(".option-buttons").on("click", function () {
    // stop time decement
    clearInterval(interval);
    dNumber = 10;
    $(".time-left").html("Second: " + dNumber);

    //show answer page
    $(".option-buttons").hide();
    $(".answer-page").show();

    // set 5-second read-answer-time then jump to next question
    setTimeout(function () {
        rollNumber++;
        qnaRoll();
        $(".option-buttons").show();
        $(".answer-page").hide();
        // restart time decement
        interval = setInterval(funDecement, 1000);
    }, 1000 * 8)
});

// show Right Answer picture function:


// Score Page


