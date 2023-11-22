
alert("In this game Simon will show you the color to click and you have to click those but as your level increases you have to remember all the colors you have clicked in preious level in the respective pattern and then click on the color of current level. Enjoy :)")

var buttonColors = ["red","blue","green","yellow"];
var gamePattern= [];
var userClickedPattern= [];
var started = false;
var level = 0;
$(document).keypress(function() {
    if (!started) {  
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });
$(".btn").click(buttonClick);
$(".start").click(function () {
    if (!started) {  
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
        $(".start").addClass("hide").text("Restart").css("width","150px");
      }
});
function startOver(){
    gamePattern=[];
    userClickedPattern=[];
    started= false;
    level= 0;
    $(".start").removeClass("hide");
}

function buttonClick(){
    var userChosenColour = $(this).attr("id");
    $("#"+userChosenColour).addClass("pressed")
    setTimeout(function(){
        $("#"+userChosenColour).removeClass("pressed");
    },100);
    playSound(userChosenColour);
    userClickedPattern.push(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
}
function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success");
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function () {
              nextSequence();
            }, 1000);
            }
    
    } else {
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over")
        },200);
        playSound("wrong")
        console.log("wrong");
        $("h1").text("Game Over, Press Any Key or the Button Below to Restart")
        startOver();
    }
}




function playSound(name){
    var audio = new Audio("./sounds/"+name+".mp3");
    audio.play();
}

function nextSequence(){
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor= buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}




































//function keyClick(){
    //     var userChosenColour = $(this).attr("class");
    //     $("."+userChosenColour).addClass("pressed");
    //     setTimeout(function(){
    //         $("."+userChosenColour).removeClass("pressed");
    //     },100);
    //     playSound(userChosenColour);
    //     userClickedPattern.push(userChosenColour);
    // }
    // document.addEventListener("keypress", function(event){
    //     switch (event.key) {
    //         case "w":
    //             var userChosenColour = $(this).attr("class");
    //             $("."+userChosenColour).addClass("pressed");
    //             setTimeout(function(){
    //                 $("."+userChosenColour).removeClass("pressed");
    //             },100);
    //             playSound(userChosenColour);
    //             userClickedPattern.push(userChosenColour);
    //             break;
    //         case "a":
                
    //             break;
    //         case "s":
                
    //             break;
    //         case "d":
                
    //             break;
    
    //         default: console.log(buttonInnerHTML);
    //             break;
    //     }
    // });
