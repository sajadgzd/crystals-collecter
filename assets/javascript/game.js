var wins = 0;
var losses = 0;
var redRandom = 0;
var dropRandom = 0;
var yellowRandom = 0;
var blueRandom = 0;
var computerRandom = 0;
var totalScore = 0;


var crystals = [
    $("#red"), $("#drop"), $("#yellow"), $("#blue")
]

function getCrystalRandom() {
    redRandom = Math.floor(Math.random() * 12) + 1;
    $("#red").text(redRandom);
    $("#red").attr("value", redRandom);
    dropRandom = Math.floor(Math.random() * 12) + 1;
    $("#drop").text(dropRandom);
    $("#drop").attr("value", dropRandom);
    yellowRandom = Math.floor(Math.random() * 12) + 1;
    $("#yellow").text(yellowRandom);
    $("#yellow").attr("value", yellowRandom);
    blueRandom = Math.floor(Math.random() * 12) + 1;
    $("#blue").text(blueRandom);
    $("#blue").attr("value", blueRandom);
}

function start() {
    totalScore = 0;
    computerRandom = Math.floor(Math.random() * 102) + 19;
    $("#random").text(computerRandom);

}
start();
getCrystalRandom();

$(document).ready(function() {
    $(".col-3").on("click", function() {
        // console.log("hello");
        totalScore += parseInt($(this).attr("value"));

        $("#totalScore").text(totalScore);

        if (totalScore > computerRandom) {
            ++losses;
            $("#losses").text(losses);
            start();
            getCrystalRandom();
        } else if (totalScore === computerRandom) {
            ++wins;
            $("#wins").text(wins);
            start();
            getCrystalRandom();
        }
    });
});