$(document).ready(function() {
    // add the functions as event listeners
    // to the forms in the HTML
    var clicks = 0;
    $("#clickCountButton").click(countClick);
    $("#birthYearButton").click(checkAge);
    $("#salesTaxButton").click(calcSalesTax);
    $("#catAgeButton").click(recommendFood);
    $("#drawCardButton").click(drawCard);

    function countClick(event) {
        // Increment a variable that tracks the
        // number of button clicks

        // Print the current number of clicks to the
        // <p> with ID "clickCountOutput"

        // When the count gets to 10, reset it to 0
        event.preventDefault();
        clicks++;

        if (clicks === 10) {
            clicks = 0;
        }
        $("#clickCountOutput").text(`You have clicked ${clicks} time(s)`);
    }


    function checkAge(event) {
        // Get the user's birth year from the text
        // box with ID of "birthYear"

        // If they are currently under 18, print "Child"
        // to the <p> with ID of "birthYearOutput"

        // If they are 18 or over, print "Adult" instead
        event.preventDefault();
        var output = "child";
        var age = $("#birthYear").val();
        if (age > 18) {
            output = "adult";
        }
        $("#birthYearOutput").text(`You are a(n) ${output}`);

    }

    function calcSalesTax(event) {
        // Get the purchase amount from the text
        // box with ID of "purchaseAmount"

        // Get the state from the text box with ID "state"

        // Tax rates are: WI 5%, IL 8%, MN 7.5%, MI 5.5%

        // Calculate the sales tax amount and print to
        // the <p> with ID of "salesTaxOutput"

        // If the user enters a state not listed above,
        // print "Error" instead
        event.preventDefault();
        var purchaseAmount = $("#purchaseAmount").val();
        var state = $("#state").val().toUpperCase();
        var tax;
        var error = false;
        switch (state) {
            case "WI":
                tax = 0.05;
                break;
            case "IL":
                tax = 0.08;
                break;
            case "MN":
                tax = 0.075;
                break;
            case "MI":
                tax = 0.055;
                break;
            default:
                error = true;
        }
        if (error) {
            $("#salesTaxOutput").text("Error");
        } else {
            $("#salesTaxOutput").text(`Your tax is: ${purchaseAmount*tax}`)
        }
    }

    function recommendFood(event) {
        // Get the cat's age from the text box with
        // ID of "catAge"

        // Cats under 2 get "kitten chow", between 2 and 10
        // get "adult chow", and over 10 get "senior chow"

        // Print the food recommendation to the <p> with
        // ID of "catAgeOutput"
        event.preventDefault();
        var catAge = parseInt($("#catAge").val());
        var output = "nothing";
        if (catAge < 2) {
            output = "kitten chow";
        } else if (catAge > 2 && catAge < 10) {
            output = "adult chow";
        } else {
            output = "senior chow";
        }
        $("#catAgeOutput").text(`Your cat should be eating ${output}.`);


    }

    function drawCard(event) {
        event.preventDefault();
        // Generate a random card face value (1 - 13)
        var face = Math.floor(Math.random() * 13) + 1;

        // Generate a random suit (1 - 4)
        var suit = Math.floor(Math.random() * 4) + 1;

        // Create the description of the card, for example
        // "King of Spades" or "2 of Hearts"
        var description = "of";

        // For face values 2 - 10, you can just print the number
        // Face value 1 is "Ace", 11 is "Jack", 12 is "Queen",
        // and 13 is "King"
        var faces = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];
        var faceFinal = faces[face - 1];

        // For the suits, 1 is "Clubs", 2 is "Spades",
        // 3 is "Hearts", 4 is "Diamonds"
        var suits = ["Clubs", "Spades", "Hearts", "Diamonds"];
        var suitFinal = suits[suit - 1];

        // Print the card's description to the <p> with
        // ID of "drawCardOutput"
        $("#drawCardOutput").text(`You rolled a ${faceFinal + ' ' + description + ' ' + suitFinal}`);
    }
});