
/*-------State Variables-------*/
let firstCard = null
let secondCard = null
let thirdCard = null
let assignedEmoji = []
let clickedCard = false
let playerTurn 
let p1Turn=true
let numMatch=0
let p1Score=0
let p2Score=0
let numFlip=0
let flipped=0



/*-------Constants-------*/
const audioNope = new Audio('../audio/nope.mp3')
const audioYay = new Audio('../audio/matched.wav')
const audioApplause = new Audio('../audio/applause.wav')
const audioCardFlip = new Audio('../audio/Card-flip-sound-effect.mp3')



/*-------Cached Elements-------*/
cards = document.querySelectorAll('.card')
shuffleButton = document.querySelector('#reshuffleButton')
restartButton = document.querySelector('#restartButton')
p1Stat = document.getElementById("p1Score")
p2Stat = document.getElementById("p2Score")
pTurn = document.getElementById("turn")
minicontainer1=document.querySelector(".mini-container1")
commentBox=document.getElementById("instruction")
let countdownEl1 = document.getElementById('countdownP1')
let countdownEl2 = document.getElementById('countdownP2')



/*-------Event Listeners-------*/
// Attach event listener for each card on a board that invokes a function of displaying card
cards.forEach(card => card.addEventListener('click', handleClick))
// Shuffle the order of the cards on the board
shuffleButton.addEventListener('click', shuffleArray)
// Restart
restartButton.addEventListener('click', restart)



/*-------Functions-------*/
// Initiate
init()
function init(){
    emojis = ["emoji1", "emoji1", "emoji1", "emoji2", "emoji2", "emoji2", "emoji3", "emoji3", "emoji3", "emoji4", "emoji4", "emoji4", "emoji5", "emoji5", "emoji5", "emoji6", "emoji6", "emoji6", "emoji7", "emoji7", "emoji7", "emoji8", "emoji8", "emoji8"]
    setTimeout(function(){
        id=0
        cards.forEach(card =>{
            card.setAttribute("data-emoji", emojis[id])
            id+=1
        })
    }, 1000)

    setTimeout(function(){
        cards.forEach(card =>{
            card.removeAttribute("data-emoji")
        })
    }, 5000)

}

assignedEmoji = emojis

//Restart
function restart(){
    window.location.reload()
}

// Function to handle a button click:
function handleClick(e){

    //Flip sound
    setTimeout(function(){audioCardFlip.play();},0.0001)
    //Score board color update
    p1Stat.style.color= (numFlip%6==0||numFlip%6==1||numFlip%6==2) ? "crimson": ""
    p2Stat.style.color= (numFlip%6==3||numFlip%6==4||numFlip%6==5) ? "crimson": ""
    numFlip = numFlip+1

    
    target=e.target
    targetIdx=(parseInt(target.id.replace("sq","").trim())-1)
    this.classList.add("flipped")
    this.setAttribute("data-emoji", assignedEmoji[targetIdx])

    // Each player flips three cards at a time
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
            let matchStatus=isMatch(firstCard, secondCard, thirdCard)

            // If there is no match: Make all the cards flip downward
            if (!matchStatus){
                setTimeout(function(){audioNope.play();},0.5)

                setTimeout(()=>{
                    firstCard.removeAttribute("data-emoji")
                    firstCard.classList.remove("flipped")
                    secondCard.removeAttribute("data-emoji")
                    secondCard.classList.remove("flipped")
                    thirdCard.removeAttribute("data-emoji")
                    thirdCard.classList.remove("flipped")
                   }, 1000)
            } else if (matchStatus==true){
                setTimeout(function(){audioYay.play();},0.5)
                
                // If there is a match: Remove the matched cards from the board
                setTimeout(() =>{
                firstCard.removeAttribute("data-emoji")
                firstCard.classList.replace("card","card-done")
                secondCard.removeAttribute("data-emoji")
                secondCard.classList.replace("card","card-done")
                thirdCard.removeAttribute("data-emoji")
                thirdCard.classList.replace("card","card-done")
                }, 1000)
                numMatch +=1
            }
            //Update player scores
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
    
    render(p1Score, p2Score)

    
     if (p1Turn){   
         pTurn.innerText = `Player 1's Turn`
         /* Timer... (for later exercise)
        let timeLeft= 10;
        setInterval(function() {
            countdownEl1.textContent = timeLeft + ' seconds remaining.';
            timeLeft -= 1;
            if (timeLeft < 0) {
                countdownEl1.textContent = '0'
                countdownEl1.style.color="red"
            }}, 1000)*/
    } else {
        pTurn.innerText =`Player 2's Turn`
        /* Timer... (for later exercise)
        let timeLeft= 10;
        setInterval(function() {
            countdownEl2.textContent = timeLeft + ' seconds remaining.';
            timeLeft -= 1;
            if (timeLeft < 0) {
                countdownEl2.textContent = '0'
                countdownEl2.style.color="red"
            }}, 1000)
            */
        }
    // If players found all the matches, show the message to reveals who is the winner
    if (numMatch==8){
        if (p1Score===p2Score){
            commentBox.innerText="It's a tie! Hit restart button below to rematch!"
        } else if (p1Score>p2Score) {
            commentBox.innerText="Congratulation! You won, player 1!"
            confetti.start()
            setTimeout(function(){audioApplause.play();},0.25)

        } else if (p1Score < p2Score) {
            commentBox.innerText="Congratulation! You won, player 2!"
            confetti.start()
            setTimeout(function(){audioApplause.play();},0.25)

        }
    }
}

 // Track a player's performance
 function isMatch(first, second, third){
    let matched = false;

    // See if there is a match
     if (first.getAttribute("data-emoji")===second.getAttribute("data-emoji") && second.getAttribute("data-emoji")===third.getAttribute("data-emoji")){
         console.log("Cards do match")
         matched = true
         
     } else{
        console.log("Cards do not match")
        
     }
     return matched
 }

 // Track each player’s performance by counting the number of matches that a player found
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

 // Function that uses randomized number to create different combination of a card array
 function shuffleArray(){
     array=emojis
     for (let i=emojis.length-1; i>0; i--){
         let j = Math.floor(Math.random()*(i+1))
         let temp = array[i]
         array[i] = array[j]
         array[j] = temp
     }
     emojis=array
     setTimeout(function(){
        id=0
        cards.forEach(card =>{
            card.setAttribute("data-emoji", emojis[id])
            id+=1
        })
    }, 1000)

    setTimeout(function(){
        cards.forEach(card =>{
            card.removeAttribute("data-emoji")
        })
    }, 5000)
     return 
}



