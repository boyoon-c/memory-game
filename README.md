# Memory Game
A description of your game. Background info about why you chose the game is a nice touch.

## Description of the game
The rule of the game is simple. Players should find a match from the cards. A player who finds the most matches wins.

## Motivation
Memory game has always been my childhood game and I occassionally play it with my nephew even these days. This has made me to build the memory game of my own. However, I have added some tweaks to make it more interesting: player of the turn flips three cards instead of two to find a match. 

# Getting Started
Include a link to your deployed game and any instructions you deem important.

## Link to the deployed game
https://boyoon-c.github.io/memory-game/

## Instructions to play the game
- Two players alternate turns.
- Each player is offered 10 seconds to make their move.
- Each player should flip three cards at a time to find a match.
- When the three cards are a match, that player who flipped the cards gets one point.
- When the cards that are flipped do not match, players do not get a point. Cards are automatically flipped down and the next player gets the turn.
- Scores accumulate until there are no more cards to flip.
- Player with a higher score wins and the game ends.

## Pseudo code 
```
1.  Will have 4 by 6 board with total of 8 matches (Each player needs to flip three cards) 
      - Create a board
      - Attach event listener for each card on a board that invokes a function of displaying card
2. Shuffle the order of the cards on the board 
   - Create shuffle button
   - Assign type to each card 
   - Attach event listener to the button that invokes a function that uses randomized number to create different combination of a card array
3. Each player flips three cards at a time
   - Create player turn that alternates turns when multiples-of-three clicks are made
4. See if there is a match
   - Compare the type of the flipped cards
   - If there is no match: Make all the cards flip downward
   - If there is a match: Remove the matched cards from the board
5. Track each player’s performance by counting the number of matches that a player found
6. Create restart button to allow players to reset the game or reshuffle the cards
7. If players found all the matches, show the message to reveals who is the winner
```
# Screenshot(s)

## Wireframe
![Image of wireframe](images/Memory-Game.png)


## Deployed game screenshots
![Image of deployed game1](images/memory-game_ss1.png)
![Image of deployed game2](images/memory-game_ss2.jpg)
![Image of deployed game3](images/memory-game_ss3.jpg)

# Technologies Used
- Javascript
- HTML
- CSS

# Next Steps
Planned future enhancements (icebox items).

# Resource and Credits
## Image source
- Emojis
- Bottle caps
## Sound source

