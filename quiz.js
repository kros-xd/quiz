// Kris Lee 6/24/2026
"use strict";

/* PLAN - PSEUDOCODE
1. Initialize score variable name will be 'currentScore' set to 0.
2. Question 1: What tech company do I want to work for?
    - companyAnswer = prompt();
    - Correct answer: "Garmin"
    - How I'll validate and check the answer: I will use an if statement to compare companyAnswer == "Garmin";
3. Use that structure for all four questions.
6. Math: we can use the currentScore variable to divide by the sum of questions.
    Since we know we are only using 4 questions, I will store the value 4 in a const variable.
7. Final feedback logic (if / else if / else):
Logical operators I will use:
- && for ...
- || or ! for ...
*/

console.log("=== My Quiz Game ===");

let currentScore = 0;
const QUESTIONS = 4;
let question1 = "What tech company do I want to work for?";
let question2 = "How many languages do I know? (use numbers)";
let question3 = "What is my favorite coding language?";
let question4 = "Given this sequence: 70, 50, 35, 25, X. What is X's value?";

// Question 1
let companyName = prompt("What tech company do I want to work for?") || "";

if (companyName.toLowerCase() == "garmin" && companyName.trim() !== "") currentScore++;

// Question 2
let knownLanguages = prompt("How many languages do I know? (use numbers)") || "";

if (parseInt(knownLanguages) === 2) currentScore++;

// Question 3
let codingLanguage = prompt("What is my favorite coding language?") || "";

if (codingLanguage.toLowerCase() == "C++" && codingLanguage.trim() !== "") currentScore++;

// Question 4
let mathSequence = prompt("Given this sequence: 70, 50, 35, 25, X. \nWhat is X's value?") || 0;

if (parseInt(mathSequence) === 20) currentScore++;

// Calculate percentage using math
const finalScore = currentScore / QUESTIONS * 100;

// Final feedback using if / else if / else
if (currentScore === 3 || currentScore === 4) {
    alert(`Woah... You got ${currentScore}/${QUESTIONS} right!`);
} else if (currentScore <= 2) {
    alert(`You got ${currentScore}/${QUESTIONS} right. You should know better...`);
}

//If statement that uses and alert statement about their score

// Final summary alert
alert(`
    -=-=-=-=-=-= Score Summary =-=-=-=-=-=-
    Score: ${finalScore}%
    ---------------------------------------
    Question 1: ${question1}
    Your Answer: ${companyName}
    Correct Answer: "Garmin"
    ---------------------------------------
    Question 2: ${question2}
    Your Answer: ${knownLanguages}
    Correct Answer: 2
    ---------------------------------------
    Question 3: ${question3}
    Your Answer: ${codingLanguage}
    Correct Answer: C++
    ---------------------------------------
    Question 4: ${question4}
    Your Answer: ${mathSequence}
    Correct Answer: 20
    ---------------------------------------
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
`);