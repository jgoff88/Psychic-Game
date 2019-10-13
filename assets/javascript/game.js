var letters= ['a','b','c','d']
        var compGuess = letters[0];
        document.onkeyup = function(event){
            var userGuess= event.key.toLocaleLowerCase();
            console.log("keypressed:", userGuess);
            if(compGuess === userGuess){
                alert("You win!");
            } else {
                alert("You Lost!");
            }
        }