// Three modes for the level of difficulty: easy game, medium, difficult
init()
function init(){
    colors = ["red", "blue", "pink", "purple", "black", "white", "green", "brown",
    "red", "blue", "pink", "purple", "black", "white", "green", "brown",
    "red", "blue", "pink", "purple", "black", "white", "green", "brown",]
}
// Attach event listener for each card on a board that invokes a function of displaying card
// Shuffle the order of the cards on the board
cards = document.querySelectorAll('.card')
//cards.forEach(card => card.addEventListener('click', handleClick))
//const colors=[]
function handleClick(e){
     targetId=e.target.id
     console.log(targetId)
     let randIdx = Math.floor(Math.random() * colors.length)
     // Assign card with the random index to a variable
     assignedColor = colors.splice(randIdx, 1)
     this.classList.add(assignedColor)
 }

cards.forEach(card => card.addEventListener('click', handleClick))
function flipCard(){
    this.classList.toggle('hidden');
}

// Functions
// init()
// Initialize deck 1 with array of 52 cards 
// Function to handle a button click:
// Create shuffle button


// Attach event listener to the button that invokes a function that uses randomized number to create different combination of a card array
// Each player flips three cards at a time
// Create player turn that alternates turns when multiples-of-three clicks are made
// See if there is a match
// Assign type to each card 
// Compare the type of the flipped cards
// If there is no match: Make all the cards flip downward
// If there is a match: Remove the matched cards from the board
// Track each player’s performance by counting the number of matches that a player found
// Create restart button to allow players to reset the game or reshuffle the cards
// If players found all the matches, show the message to reveals who is the winner
