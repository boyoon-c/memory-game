

cards = document.querySelectorAll('.card')
shuffleButton = document.querySelector('#reshuffleButton')
restartButton = document.querySelector('#restartButton')
let firstCard = null
let secondCard = null
let thirdCard = null
let assignedEmoji = []
let clickedCard = false



// Three modes for the level of difficulty: easy game, normal, hard
// Alter the number of grids to adjust the level of difficulty
// initiation function
init()
function init(){
    emojis = ["emoji1", "emoji2", "emoji3", "emoji4", "emoji5", "emoji6", "emoji7", "emoji8","emoji1", "emoji2", "emoji3", "emoji4", "emoji5", "emoji6", "emoji7", "emoji8","emoji1", "emoji2", "emoji3", "emoji4", "emoji5", "emoji6", "emoji7", "emoji8"]
}
// Attach event listener for each card on a board that invokes a function of displaying card
// Shuffle the order of the cards on the board
//cards.forEach(card => card.addEventListener('click', handleClick))
//const colors=[]
reshuffleButton.addEventListener('click', shuffleArray)
restartButton.addEventListener('click', restart)
assignedEmoji = shuffleArray(emojis)
function restart(){
    window.location.reload()
}
let flipped=0

function handleClick(e){
    //clickedCard = true
    //this.classList.add('flip')
    //console.log("This", this)
     target=e.target
     //console.log(target)
     targetIdx=(parseInt(target.id.replace("sq","").trim())-1)
     this.classList.add(assignedEmoji[targetIdx])
     
     this.classList.add("flipped")
     if (flipped==0){
        firstCard = this
        flipped +=1
        return
    } else if (flipped==1){
        secondCard=this
        flipped +=1
    } else if (flipped==2){
        flipped=0
    }
    thirdCard=this
    console.log("firstcard", firstCard)
    console.log("secondcard", secondCard)
    console.log("thirdCard", thirdCard)

    isMatch()
    //alternating turns
    //when three cards that are flipped are not identical, flip them down
    
    //if three cards that are flipped are identical, switch their color from the original background to pink and make them disappear
    if (flipped%3!=0){
        setTimeout(()=>{
            this.classList.remove(assignedEmoji[targetIdx])
           }, 1000)
           //clicked+=1

        
    } else{
        return
    }
 }

 // function to track a player's performance
 function isMatch(firstcard, secondcard, thirdcard){
     if (firstcard===secondCard && secondCard==thirdCard){
         console.log("Cards do match")
         return
     } else{
        console.log("Cards do not match")
     }
     console.log("isMatch function")
 }
 function shuffleArray(array){
     for (let i=emojis.length-1; i>0; i--){
         let j = Math.floor(Math.random()*(i+1))
         let temp = array[i]
         array[i] = array[j]
         array[j] = temp
     }
     return array
 }

cards.forEach(emoji => emoji.addEventListener('click', handleClick))

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
