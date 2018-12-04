// Isaac Wu Trivia Game

// See QnA at the end...

function startgame() {
    $(".time-left, .question-page, .option-buttons, .answer-page, .result-page").hide();

    // Click Start and turn to quiz page
    $(".start-button").on("click", function () {
        $(".start-button").hide();
        $(".time-left, .question-page, .option-buttons").show();
        dNumber = 10;
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
            //show answer page
            $(".option-buttons").hide();
            $(".answer-page").show();

            // stop time decement
            clearInterval(interval);
            dNumber = 10;
            $(".time-left").html("Second: " + dNumber);

            // set 5-second read-answer-time then jump to next question
            setTimeout(function () {
                $(".option-buttons").show();
                $(".answer-page").hide();
                //restart time decement
                interval = setInterval(funDecement, 1000);
            }, 1000 * 5)
        } answercheck();
    }
} funDecement();

/////////////// if Click: ///////////////
$(".option-buttons").on("click", function () {

    //show answer page
    $(".option-buttons").hide();
    $(".answer-page").show();

    // stop time decement
    clearInterval(interval);
    dNumber = 10;
    $(".time-left").html("Second: " + dNumber);

    // set 5-second read-answer-time then jump to next question
    setTimeout(function () {
        $(".option-buttons").show();
        $(".answer-page").hide();
        //restart time decement
        interval = setInterval(funDecement, 1000);
    }, 1000 * 5)
});

// show Right Answer picture function:


// Score Page




/////////////// QnA //////////////////
// All questions array:
var questionArray = [
    "q1",
    "q2",
    "q3",
    "",
    "",
    "",
];

// All options array:
var optaArray = [
    "oa1",
    "oa2",
    "oa3",
    "",
    "",
    "",
];

var optbArray = [
    "ob1",
    "ob2",
    "",
    "",
    "",
    "",
];

var optcArray = [
    "oc1",
    "oc2",
    "",
    "",
    "",
    "",
];

var optdArray = [
    "od1",
    "od2",
    "",
    "",
    "",
    "",
];

var answerArray = [3, 2, 1, 3, 4];

var gifArray = [];

var audioArray = [];
