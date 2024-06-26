# Mahjong Game

A Mahjong matching game built with React. Players flip cards to find matching pairs. The game keeps track of the score and time, and includes sounds for different actions like flipping cards, matching, unmatching, starting, ending and exiting the game.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Rules](#rules)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Development](#development)
  - [File Structure](#file-structure)
  - [Key Functions](#key-functions)
  - [Adding Sounds](#adding-sounds)
  - [Example of Adding Sound](#example-of-adding-sound)
- [Contributing](#contributing)

## Demo

Check out the live demo of the application: [Live Demo](https://prasanth-mahjong-game.vercel.app/)

## Features

- User can start the game after entering their `name`.
- Card matching game with `Mahjong tiles`.
- Game having `Play Again` button to restart the game.
- Game having `Quit Game` button to exit from the game.
- Score tracking when matching and unmatching the cards.
- Timer tracking to display the result after game completion.
- Audio sounds for card flip, match, unmatch, game start, game end and game quit.
- Responsive design for various devices (desktop, tablet, mobile).

## Rules

1. Click on any tile to turn it over and see what's there.
2. Reveal matching tiles on the board in a timely manner.
3. If two tiles match, score is awarded with one (1) point.
4. If two tiles don't match, score is deducted by one (1) point.
5. Current score & timer are displayed at the top of the board.

## Tech Stack

- React
- Hooks
- CSS for styling

## Getting Started

### Prerequisites

Make sure you have the following installed on your local development machine:

- Node.js (>= 14)
- npm (>= 6)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/prasanth-p8/Mahjong-Game-App
   ```

2. Navigate to the project directory:

   ```bash
    cd Mahjong-Game-App
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:

   ```bash
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000`.

## Development

### File Structure

1. public/: Contains static assets like images (./Background_Images) and sounds (./Audio_Tracks).

   1. flipcard-sound.mp3: Sound for card flip.
   2. match_sound.mp3: Sound for matching cards.
   3. unmatch_sound.mp3: Sound for unmatching cards.
   4. game-start-sound.mp3: Sound for starting the game.
   5. game-over-sound.mp3: Sound for ending the game.
   6. game-quit-sound.mp3: Sound for quitting the game.

2. src/: Contains React components and main logic of the application.
   1. components/: Contains individual component files.
      1. BoardCards.js: Displays the game cards.
      2. GameApp.js: Display the game board.
      3. PopupButton.js: Contains the popup button logic.
      4. StatusBar.js: Displays the status bar with score and timer.
      5. WelcomePage.js: Displays the Welcome Message to start the game.
   2. App.js: Main application component
   3. index.js: Entry point for the React application
   4. index.css: Global Styles for the application

### Key Functions

1.  shuffleCard(arr): Shuffles the array of game cards.
2.  openGameCard(id): Handles logic for when a game card is clicked.
3.  resetGame(): Resets the game state.
4.  deleteUser(): Handles quitting the game.
5.  getUserName(): Get username from localStoarge.

### Adding Sounds

To add or change sounds, place your audio files in the `public/Audio_Tracks` directory and update the paths in the `GameApp` component accordingly.

### Example of Adding Sound

In `GameApp.js`, sounds are played using the `playSound` function:

```javascript
const playSound = (soundPath) => {
  const sound = new Audio(soundPath);
  sound.play().catch((error) => {
    console.error("Error playing sound:", error);
  });
};
```

> [!NOTE]
> Ensure sounds are triggered by user actions to comply with browser autoplay policies.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or new features to suggest.
