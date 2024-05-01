// Game container
let game = document.querySelector(".game");
// 4 buttons
let buttonShow = document.querySelector(".show");
let buttonDouble = document.querySelector(".double");
let buttonShuffle = document.querySelector(".shuffle");
let buttonFlip = document.querySelector(".flip");
let audio = document.querySelector(".audio");
// Array containing image URLs
//let url = ["https://cdn.glitch.global/60bd42d1-6968-4e7c-943f-43253b93ba10/"];
let cards = ["https://cdn.glitch.global/60bd42d1-6968-4e7c-943f-43253b93ba10/omgggg-1.jpg?v=1710436927138",
    "https://cdn.glitch.global/60bd42d1-6968-4e7c-943f-43253b93ba10/Untitled-1.jpg?v=1710955363347",
    "https://cdn.glitch.global/60bd42d1-6968-4e7c-943f-43253b93ba10/yaaaaaa.jpg?v=1710436534100",
    "https://cdn.glitch.global/60bd42d1-6968-4e7c-943f-43253b93ba10/Untitled-1%20copy.jpg?v=1710436604280",
    "https://cdn.glitch.global/60bd42d1-6968-4e7c-943f-43253b93ba10/idk.jpg?v=1710436522485",
    "https://cdn.glitch.global/60bd42d1-6968-4e7c-943f-43253b93ba10/Duplicate%20State.jpg?v=1712596480923",
    "https://cdn.glitch.global/60bd42d1-6968-4e7c-943f-43253b93ba10/gomgyaaa.jpg?v=1712596460908",
    "https://cdn.glitch.global/60bd42d1-6968-4e7c-943f-43253b93ba10/poooop.jpg?v=1712597130197"
];
let clickedIds = [];
// Button to Show Deck
buttonShow.onclick = function() {
    // Log message
    console.log("Showing the deck...");
    // For of loop
    for (let card of cards) {
        game.insertAdjacentHTML("beforeend",
            "<div style='background-image: url(" +
            card +
            ")' class='card'>");
    }
    audio.play();
};

// Button to Double Deck
buttonDouble.onclick = function() {
    console.log("now the deck has" + cards.length + "cards.");
    for (let card of cards) {
        if (cards.length !== 16) {
            cards.push(card);
            game.insertAdjacentHTML("beforeend", "<div style='background-image: url(" + card + ")'class='card'>");
        }
            audio.play();

    }
    buttonDouble.style.color = "silver";
    console.log("Deck has" + cards.lengh + "cards.");
};
// Button to Shuffle Cards
buttonShuffle.onclick = function() {
    shuffle(cards);
    game.innerHTML = "";
    let i = 0;
    console.log("I'm shufflimg the cards!");
    for (let card of cards) {
        game.insertAdjacentHTML("beforeend",
            "<div style='background-image: url(" +
            card +
            ")' class='card' id= '" + i + "'>");
        i = i + 1;
    }
      audio.play();
};

/* ---------------------------------------------------
DON'T CHANGE THE Fisher-Yates SHUFFLE FUNCTION BELOW!
--------------------------------------------------- */
function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;
    // While there are elements to shuffle...
    while (currentIndex > 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex = currentIndex - 1;
        // Swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }
    return array;
}
// Button to Flip All Cards
buttonFlip.onclick = function() {
    let i = 0;
    for (card of cards) {
        document.getElementById(i).style.backgroundImage = "";
        i = i + 1;
    }
      audio.play();
};
// Here we need a function for clicking on individual cards.
// (It won't work until we finish writing it.)
    $(document).click(function(event){
        //grt the id property of the clicked thing.
        let clickedId = event.target.id;
        console.log(clickedId);
                    // If a card was clicked...
                       if (clickedId !== "") {
    		
            // Make the background image apper!
            document.getElementById(clickedId).style.backgroundImage="url('"+  cards [clickedId] + "')";
            //Also add the id to on an array (and log it0
            clickedIds.push(clickedId);
            console.log(clickedIds);
            //If 1 card was clicked...
            if(clickedIds.lengh === 2) {
                //get both image URLs9(and log them)
                let card1picture = document.getElementById(clickedIds[0]). style.backgroundImage;
 let card2picture = document.getElementById(clickedIds[0]).style.backgroundImage;
                console.log(card1picture);
                console.log(card2picture);
                //If they are the same,just empty the array!
                if(card1picture === card2picture){
                    console.log("match");
                    document.getElementById(clickedIds[0]).id="";
                    document.getElementById(clickedIds[1]).id="";
                    clickedIds = [];
                    console.log(clickedIds);
               }
                //If they are NOT the same...
                //reset both background image and empty the array
            }else if(clickedIds.length > 2){
                 document.getElementById(clickedIds[0]).id="";
                    document.getElementById(clickedIds[1]).id="";
                    clickedIds = [];
                clickedIds.push(clickedId);
                    console.log(clickedIds);
                
        }
    
    
    
    
    
    
                       }
    });