// Three modes for the level of difficulty: easy game, medium, difficult

// Attach event listener for each card on a board that invokes a function of displaying card
// Shuffle the order of the cards on the board
cards = document.querySelectorAll('.card')
//cards.forEach(card => card.addEventListener('click', handleClick))
function handleClick(){
     console.log("clicked")
 }
cards.forEach(card => card.addEventListener('click', flipCard))
function flipCard(){
    this.classList.toggle('hidden');
}

// Functions
// init()
// Initialize deck 1 with array of 52 cards 
// function init() {
//   deck1 = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]
// }
// Function to handle a button click:
// function handleClick(){
//   // Error handling
//   if (deck1.length > 0){
//     // Randomly select number from total cards remaining
//     let randIdx = Math.floor(Math.random() * deck1.length)
//     // Assign card with the random index to a variable
//     cardPicked = deck1.splice(randIdx, 1)
//     // Add card picked to deck 2
//     deck2.push(cardPicked[0])
//     // Pass card picked to render function to display
//     render(cardPicked)
//   }
// }
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
