# Snake-Gun-Water Game

Welcome to the Snake-Gun-Water game! This web application allows you to play the Snake-Gun-Water variant against the computer. The game is implemented using HTML, CSS, and JavaScript.

## How to Play

1. Open the `index.html` file in your web browser.
2. You will see three buttons, each representing one of the game elements: 🐍 (Snake), 💦 (Water), and 🔫 (Gun).
3. Click on the button corresponding to your choice.
4. The computer will randomly select one of the elements.
5. The game will display the choices made by both you and the computer.
6. The scores will be updated based on the game rules:
   - Snake 🐍 wins against Water 💦
   - Water 💦 wins against Gun 🔫
   - Gun 🔫 wins against Snake 🐍

## Game Rules

- Each game session consists of multiple rounds.
- The first player to reach a score of 5 wins the game.
- Scores are updated based on the game rules mentioned above.

## Code Structure

The project is structured as follows:

- `index.html`: Contains the HTML structure for the game.
- `style.css`: Defines the styles and layout of the game interface.
- `script.js`: Implements the game logic using JavaScript.

## Game Logic

The JavaScript code in `script.js` handles the user's interactions and game outcomes. Here's a brief overview:

- The game keeps track of the user's score and the computer's score.
- Event listeners are added to each game element button.
- When a button is clicked, the computer randomly selects an element, and the game compares the choices.
- Scores are updated based on the game rules, and the results are displayed on the page.
- The game continues until one player reaches a score of 5.
- The final winner (user, computer, or a tie) is displayed, and the user is prompted to refresh the page to play again.

Feel free to explore, modify, and enhance the code to suit your preferences. Enjoy playing the Snake-Gun-Water game!
