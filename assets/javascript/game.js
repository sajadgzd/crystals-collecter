var wins = 0;
var losses = 0;
var crystalRandom = 0;
var computerRandom = 0;
var totalScore = 0;


var crystals = [
    $("#red"), $("#drop"), $("#yellow"), $("#blue")
]

function start() {
    computerRandom = Math.floor(Math.random() * 102) + 19;
    $("#random").text(computerRandom);
    $(".col-3").on("click", function() {
        crystalRandom = Math.floor(Math.random() * 12) + 1;
        $(this).text(crystalRandom);
    });

}

start();
$(document).ready(function() {
    $(".col-3").on("click", function() {
        // console.log("hello");
        totalScore += crystalRandom;

        $("#totalScore").text(totalScore);

        if (totalScore > computerRandom) {
            ++losses;
            $("losses").text(losses);
        } else if (totalScore === computerRandom) {
            ++wins;
            $("wins").text(wins);
        }
    });
});