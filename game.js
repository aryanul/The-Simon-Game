alert("In this game the computer will show you the color to click and you have to click those but as your level increases you have to remember all the colors you have clicked in previous level in the respective pattern and then click on the color of current level. Enjoy :)");

var buttonColors = ["red","blue","green","yellow"];
var gamePattern= [];
var userClickedPattern= [];
var started = false;
var level = 0;
// if(started){
// $(document).keypress(function() {
//     if (!started) {  
//       $("#level-title").text("Level " + level);
//       nextSequence();
//       started = true;
//     }
//   });
// }
$(".btn").click(buttonClick);
$(".start").click(function () {
    if (!started) {  
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
        $(".start").addClass("hide").text("Restart").css("width","150px");
      }
})
function startOver(){
    gamePattern=[];
    userClickedPattern=[];
    started= false;
    level= 0;
    $(".start").removeClass("hide");
}

function buttonClick(){
    var userChosenColour = $(this).attr("id");
    // (userChosenColour);
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
        ("success");
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
        playSound("wrong");
        $("h1").text("Game Over, Press Any Key or the Button Below to Restart");
        $(".start").removeClass('hide').text("Restart").css("width","150px");

        //startOver();
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




































// function keyClick(){
//         var userClickeKey = $(this).attr("class");
//         $("."+userClickeKey).addClass("pressed");
//         setTimeout(function(){
//             $("."+userClickeKey).removeClass("pressed");
//         },100);
//         playSound(userClickeKey);
//         userClickedPattern.push(userClickeKey);
//     }
if (!started){
    document.addEventListener("keypress", function(event){
        // (event.key);
        var keyPressed = event.key;
        switch (keyPressed.toLowerCase()) {
            case "w":
                // ("yes");
                var userClickedKey = "green";
                $("."+userClickedKey).addClass("pressed");
                setTimeout(function(){
                    $("."+userClickedKey).removeClass("pressed");
                },100);
                playSound(userClickedKey);
                userClickedPattern.push(userClickedKey);
                checkAnswer(userClickedPattern.length-1);
                break;
            case "a":
                var userClickedKey = "red";
                $("."+userClickedKey).addClass("pressed");
                setTimeout(function(){
                    $("."+userClickedKey).removeClass("pressed");
                },100);
                playSound(userClickedKey);
                userClickedPattern.push(userClickedKey);
                checkAnswer(userClickedPattern.length-1);
                break;
            case "s":
                var userClickedKey = "yellow";
                $("."+userClickedKey).addClass("pressed");
                setTimeout(function(){
                    $("."+userClickedKey).removeClass("pressed");
                },100);
                playSound(userClickedKey);
                userClickedPattern.push(userClickedKey);
                checkAnswer(userClickedPattern.length-1);
                break;
            case "d":
                var userClickedKey = "blue";
                $("."+userClickedKey).addClass("pressed");
                setTimeout(function(){
                    $("."+userClickedKey).removeClass("pressed");
                },100);
                playSound(userClickedKey);
                userClickedPattern.push(userClickedKey);
                checkAnswer(userClickedPattern.length-1);
                break;
            case "r":
                nextSequence();
                startOver();
                $(".start").addClass('hide');
                break;
    
            default:
                
            $(document).keypress(function() {
                if (!started) {  
                  $("#level-title").text("Level " + level);
                  nextSequence();
                  started = true;
                }
                $(".start").addClass("hide").text("Restart").css("width","150px");
   
              });
                break;
        }
    });
}
