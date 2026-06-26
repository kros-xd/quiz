// Kris Lee 6/24/2026
"use strict";

/* PLAN - PSEUDOCODE
1. Initialize score variable name will be 'currentScore' set to 0.
2. Question 1: What tech company do I want to work for?
    - let companyName = prompt("What tech company do I want to work for?") || "";
    - Correct answer: "GARMIN"
    - How I'll validate and check the answer: I will use these two statements:
        - if (companyName && companyName.trim() !== "" {...};
        - if (companyName.toUpperCase() == "GARMIN"){...};
3. Use that structure for all four questions.
6. Math: we can use the currentScore variable to divide by the sum of questions.
    Since we know we are only using 4 questions, I will store the value 4 in a const variable.
7. Final feedback logic (if / else if / else):
    if (currentScore == 1) 25% message
    else if (currentScore == 2) 50% message
    else if (currentScore == 3) 75% message
    else if (currentScore == 4) 100% message
    else 0% message
Logical operators I will use:
- && for checking companyName is not empty AND it has content.
- ! for returning the inverse of a boolean result.
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

if (companyName && companyName.trim() !== "") {
    if(companyName.toUpperCase() == "GARMIN") currentScore++;

} else alert("Invalid input.");

// Question 2
let knownLanguages = prompt("How many languages do I know? (use numbers)") || "";

if (parseInt(knownLanguages) !== NaN && knownLanguages.trim() !== "") {
    if (parseInt(knownLanguages) === 2) currentScore++;

} else alert("Invalid input.");

// Question 3
let codingLanguage = prompt("What is my favorite coding language?") || "";

if (codingLanguage && codingLanguage.trim() !== "") {
    if (codingLanguage.toUpperCase() == "C++") currentScore++;

} else alert("Invalid input.");

// Question 4
let mathSequence = prompt("Given this sequence: 70, 50, 35, 25, X. \nWhat is X's value?") || "";

if (parseInt(mathSequence) !== NaN && mathSequence.trim() !== "") {
    if (parseInt(mathSequence) === 20) currentScore++;

} else alert("Invalid input.");

// Calculate percentage using math
const finalScore = currentScore / QUESTIONS * 100;

// Final message based on user's score before showing score summary
if (currentScore == 1) {
    alert(`You got ${currentScore}/${QUESTIONS} right. That's kind of embarassing, but expected...`);
} else if (currentScore == 2) {
    alert(`You got ${currentScore}/${QUESTIONS} right. Y'know, you did better than I thought.`);
} else if (currentScore == 3) {
    alert(`You got ${currentScore}/${QUESTIONS} right. Impressive! Was it just luck though...?`);
} else if (currentScore == 4) {
    alert(`You got ${currentScore}/${QUESTIONS} Woah... you got them all right? Do you know me in real life?`);
} else {
    alert("Yeah... That makes sense, stranger.");
}

alert(`
    -=-=-=-=-=-= Score Summary =-=-=-=-=-=-
    Score: ${finalScore}%
    ---------------------------------------
    Question 1: ${question1}
    Your Answer: ${companyName.toUpperCase()}
    Correct Answer: GARMIN
    ---------------------------------------
    Question 2: ${question2}
    Your Answer: ${knownLanguages}
    Correct Answer: 2
    ---------------------------------------
    Question 3: ${question3}
    Your Answer: ${codingLanguage.toUpperCase()}
    Correct Answer: C++
    ---------------------------------------
    Question 4: ${question4}
    Your Answer: ${mathSequence}
    Correct Answer: 20
    ---------------------------------------
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
`);