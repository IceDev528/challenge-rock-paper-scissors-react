# Test task specification:

Your test task is to create a React app, using Typescript with strict typing.
The app is a scissors, rock, paper game, with the ability to bet on the winning position.

## Specifications

- Player starts with a balance of 5000.
- Each bet should be 500 (player can place several bets on any position: 500, 1000,
  1500 etc)
- Player can not bet more than 2 positions per one game
- Winning rate for bet on 1 position is 14
- Winning rate for bet on 2 positions is 3

## Requirements

- There should be three betting positions, rock, paper, scissors.
- Player can bet on rock, paper, or scissors, but not on all three at the same time.
- The bet is reduced from the balance.
- When betting done button is clicked, the computer runs a random paper, scissors,
  rock match.
- Player choice should be compared to computers choice and only one bet can win –
  every tie counts as loss
- If player bets on one of them and wins, the return is 14 times the bet.
- If player bets on two of them and wins the return is 3 times the bet.
- Loss bets are not returned to player
- Bets with tie result are returned to player
- After round ends the return adds to the balance
- Player cannot bet if player has less balance than available for bet.

NB please keep in mind that Title ROCK vs PAPER on the second screen means “computer choice ROCK versus player choice PAPER” — not ROCK bet vs PAPER bet.

## Acceptance criteria

Every point of task should be implemented

### Junior level

In general implementing every point is enough for junior. Optionally we pay attention to such things as concistency, variable naming, files and folders structure.

### Middle level

We pay attention to everything mentioned for Junior (optional part is mandatory for middle). Additionally we check UX and compare UI with mockups more thorough and we expect following clean code principles

### Senior level

We pay attention to everything mentioned for middle. Additionally we expect code to be flexible and maintainable. Changing of requirements should not lead to rewriting half of application. Changing of specifications should cause minimal changes.

## Used Technologies

- React.js
- Typescript
- Tailwind CSS
- framer-motion
- react-toastify
- Zustand

## Implementation

### Overview

This project is a React application using TypeScript with strict typing. It simulates a Scissors, Rock, Paper game where the player can place bets on the outcome. The player starts with a balance of 5000 and can place bets of 500 on either one or two positions (rock, paper, or scissors). The game includes animations and toast notifications for user feedback.

### Components

#### Bets.tsx

This component allows the player to place bets on Rock, Paper, or Scissors.

- ButtonAction.tsx
  This component contains the button that triggers the game outcome calculation.

- BetOutcome.tsx
  This component displays the outcome of the bet after the game round ends.

### Utility Functions

- calculateReturn.ts
  Calculates the return based on the bets and game outcome.

- determineOutcome.ts
  Determines the outcome of the game based on the player's choices and the computer's choice.

- formatNumber.ts
  Formats numbers into a compact, readable format.

### Store configuration

Sets up the Zustand store with initial state and actions.

### Problems and Solutions

#### Calculating Returns

Problem:
Calculate the amount won based on the bets placed and the outcome of the game. Different return rates apply based on whether the player bets on one or two positions.

Solution:
A function calculateReturn was created to calculate the return based on the game's outcome. The function takes in the bets, the game outcome, and whether a single position was bet on.

The function first calculates the total amount bet.
It then sets the appropriate multiplier based on whether the bet was on a single position or two positions.
The return is calculated based on the game outcome:
For a win, the return is the total bet amount multiplied by the appropriate multiplier.
For a tie (only if a single position was bet on), the return is the total bet amount.
For a loss, the return is zero.

#### Determining Game Outcomes

Problem:
Determine the outcome of the game based on the player's choices and the computer's randomly chosen position.

Solution:
A function determineOutcome was created to determine the outcome. This function takes in the player's choices and the computer's choice, and it returns the game result.

The function checks if the player's choices include the computer's choice.
If there is a match and the player bet on a single position, the outcome is a tie.
If there is a match and the player bet on two positions, the outcome is a loss.
If there is no match, the function checks if any of the player's choices beat the computer's choice based on predefined win conditions.
If a match is found, the outcome is a win.
Otherwise, the outcome is a loss.

#### Managing State with Zustand

Problem:
Manage the global state of the application, including the player's balance, bets, game results, and UI visibility.

Solution:
The Zustand library was used to create a global store with initial state and actions to update the state.

The initial state includes the player's balance, win amount, bets, computer's choice, game result, visibility flags, and game state.
Actions are defined to update the state, including placing bets, updating the balance, setting game results, toggling visibility flags, and resetting the game.
