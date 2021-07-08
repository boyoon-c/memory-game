

cards = document.querySelectorAll('.card')
shuffleButton = document.querySelector('#reshuffleButton')
restartButton = document.querySelector('#restartButton')
p1Stat = document.getElementById("p1Score")
p2Stat = document.getElementById("p2Score")
pTurn = document.getElementById("turn")
minicontainer1=document.querySelector(".mini-container1")
//console.log(p1Stat)
let firstCard = null
let secondCard = null
let thirdCard = null
let assignedEmoji = []
let clickedCard = false
let playerTurn 
let p1Turn=true
p1Score=0
p2Score=0
numFlip=0
let countdownEl1 = document.getElementById('countdownP1')
let countdownEl2 = document.getElementById('countdownP2')

// Three modes for the level of difficulty: easy game, normal, hard
// Alter the number of grids to adjust the level of difficulty
// initiation function
init()
function init(){
    emojis = ["emoji1", "emoji2", "emoji3", "emoji4", "emoji5", "emoji6", "emoji7", "emoji8","emoji1", "emoji2", "emoji3", "emoji4", "emoji5", "emoji6", "emoji7", "emoji8","emoji1", "emoji2", "emoji3", "emoji4", "emoji5", "emoji6", "emoji7", "emoji8"]
}
// Attach event listener for each card on a board that invokes a function of displaying card
// Shuffle the order of the cards on the board
assignedEmoji = emojis
cards.forEach(card => card.addEventListener('click', handleClick))
//const colors=[]
shuffleButton.addEventListener('click', shuffleArray)
restartButton.addEventListener('click', restart)
//assignedEmoji = shuffleArray(emojis)
//console.log(assignedEmoji)
function restart(){
    window.location.reload()
}
let flipped=0

function handleClick(e){
    console.log("clicked")
    console.log(numFlip)
    p1Stat.style.color= (numFlip%6==0||numFlip%6==1||numFlip%6==2) ? "salmon": ""
    p2Stat.style.color= (numFlip%6==3||numFlip%6==4||numFlip%6==5) ? "salmon": ""
    numFlip = numFlip+1
    console.log(numFlip)

    //firstCard=null
    //secondCard=null
    //thirdCard=null
    //clickedCard = true
    //this.classList.add('flip')
    //console.log("This", this)
     target=e.target
     //console.log(target)
     targetIdx=(parseInt(target.id.replace("sq","").trim())-1)
     //this.classList.add(assignedEmoji[targetIdx])
     this.classList.add("flipped")
     this.setAttribute("data-emoji", assignedEmoji[targetIdx])
    //console.log(this.removeAttribute)
     if (flipped===0){
         firstCard = this
         flipped +=1
         playerTurn = 1
         return
        } else if (flipped===1){
            secondCard=this
            
            flipped +=1
        } else if (flipped===2){
            thirdCard=this
            //p1Turn = (!p1Turn) ? true : false
            let matchStatus=isMatch(firstCard, secondCard, thirdCard)
            //console.log(matchStatus)
            if (!matchStatus){
                setTimeout(()=>{
                    //firstCard.classList.remove("emoji*");
                    firstCard.removeAttribute("data-emoji")
                    firstCard.classList.remove("flipped")
                    //secondCard.classList.remove(assignedEmoji[targetIdx]);
                    secondCard.removeAttribute("data-emoji")
                    secondCard.classList.remove("flipped")
                    //thirdCard.classList.remove(assignedEmoji[targetIdx]);
                    thirdCard.removeAttribute("data-emoji")
                    thirdCard.classList.remove("flipped")
                   }, 2000)
         
            } else if (matchStatus==true){
                setTimeout(() =>{
                firstCard.removeAttribute("data-emoji")
                firstCard.classList.replace("card","card-done")
                
                secondCard.removeAttribute("data-emoji")
                secondCard.classList.replace("card","card-done")
                
                thirdCard.removeAttribute("data-emoji")
                thirdCard.classList.replace("card","card-done")
                }, 2000)
            }
            if (p1Turn){
                
                if (matchStatus==true){
                    p1Score+=1
                }
                p1Turn = false
            } else {
                if (matchStatus==true){
                    p2Score+=1
                }
                p1Turn = true
            }
        flipped=0
        
    }
    
    //console.log("firstcard", firstCard)
    //console.log("secondcard", secondCard)
    //console.log("thirdCard", thirdCard)
    //console.log("p1Turn", p1Turn)

    //alternating turns
    //when three cards that are flipped are not identical, flip them down
    
    //if three cards that are flipped are identical, switch their color from the original background to pink and make them disappear
    //        //clicked+=1

        
    // } else{
    //     return
    // }
    render(p1Score, p2Score)

        //keepScore(matchStatus, p1Turn)
     if (p1Turn){
        let timeLeft= 10;

       pTurn.innerText = `Player 1's Turn`
        setInterval(function() {
            countdownEl1.textContent = timeLeft + ' seconds remaining.';
            timeLeft -= 1;
            if (timeLeft < 0) {
                countdownEl1.textContent = '0'
                countdownEl1.style.color="red"
            }}, 1000)
    } else {
        let timeLeft= 10;

        pTurn.innerText =`Player 2's Turn`
        setInterval(function() {
            countdownEl2.textContent = timeLeft + ' seconds remaining.';
            timeLeft -= 1;
            if (timeLeft < 0) {
                countdownEl2.textContent = '0'
                countdownEl2.style.color="red"
            }}, 1000)}
    
}

 // function to track a player's performance
 function isMatch(first, second, third){
    let matched = false;
    console.log('first attribute is', first)
    console.log('second attribute is', second)
    console.log('third attribute is', third)

     if (first.getAttribute("data-emoji")===second.getAttribute("data-emoji") && second.getAttribute("data-emoji")===third.getAttribute("data-emoji")){
         console.log("Cards do match")
         matched = true
         
     } else{
        console.log("Cards do not match")
        //make the matched cards disappear
        
     }
     return matched
 }
 function keepScore(winStatus, p1Turn){
     if (winStatus==true && p1Turn ==true){
         p1Score+=1
         
     } else if (winStatus ==true && p1Turn ==false){
         p2Score+=1
     }
 }
 function render(p1Score, p2Score){
    p1Stat.innerText=`Player 1 Score \n ${p1Score}`
    p2Stat.innerText=`Player 2 Score \n ${p2Score}`
 }
 function shuffleArray(){
     array=emojis
     for (let i=emojis.length-1; i>0; i--){
         let j = Math.floor(Math.random()*(i+1))
         let temp = array[i]
         array[i] = array[j]
         array[j] = temp
     }
     return emojis=array
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
