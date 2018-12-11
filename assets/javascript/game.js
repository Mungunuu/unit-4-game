$(document).ready(function(){
         
    var wins = 0;
    var losses = 0;
    var comTotalValue = Math.floor((Math.random()*(120-19) + 19));
    var userTotal = 0 ;

    var crystal1Value = Math.floor((Math.random() * 12) + 1);
    var crystal2Value = Math.floor((Math.random() * 12) + 1);
    var crystal3Value = Math.floor((Math.random() * 12) + 1);
    var crystal4Value = Math.floor((Math.random() * 12) + 1);
    
    $("#comTotal").html("Random: " + comTotalValue);
    $("#wins").html("Wins: " + wins);
    $("#losses").html("Losses: " + losses);

    function clear () {
        comTotalValue = Math.floor((Math.random()*(120-19) + 19));
        userTotal = 0 ;
        $("#comTotal").html("Random: " + comTotalValue);
        $("#userTotal").html("Your Total: " + userTotal);
        crystal1Value = Math.floor((Math.random() * 12) + 1);
        crystal2Value = Math.floor((Math.random() * 12) + 1);
        crystal3Value = Math.floor((Math.random() * 12) + 1);
        crystal4Value = Math.floor((Math.random() * 12) + 1);
        $("#wins").html("Wins: " + wins)
        $("#losses").html("Losses: " + losses)
    }

    $(".btn").on("click", function() {
        
        console.log(this.id);

        if(this.id == "crystal1") {
            userTotal += crystal1Value;
        } else if(this.id == "crystal2") {
            userTotal += crystal2Value;
        } else if(this.id == "crystal3") {
            userTotal += crystal3Value;
        } else if(this.id == "crystal4") {
            userTotal += crystal4Value;
        }

        $("#userTotal").html("Your Total: " + userTotal);

        if (comTotalValue == userTotal) {
            wins++;
            clear();
        } else if(comTotalValue < userTotal) {
            losses++;
            clear();
        }
    })
})
