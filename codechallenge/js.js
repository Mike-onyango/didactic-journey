const readline = require('readline');

// Create interface for reading input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to prompt the user for input
function promptForMarks() {
    return new Promise((resolve, reject) => {
        rl.question("Enter student marks (between 0 and 100): ", (answer) => {
            resolve(parseInt(answer)); // Convert input to integer
        });
    });
}

// Function to determine grade based on marks
function calculateGrade(marks) {
    if (marks > 79) {
        return "A";
    } else if (marks >= 60 && marks <= 79) {
        return "B";
    } else if (marks >= 50 && marks <= 59) {
        return "C";
    } else if (marks >= 40 && marks <= 49) {
        return "D";
    } else {
        return "E";
    }
}

// Main function
async function main() {
    let marks = await promptForMarks();

    // Validate input
    if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log("Invalid input. Please enter marks between 0 and 100.");
    } else {
        let grade = calculateGrade(marks);
        console.log("Grade:", grade);
    }

    // Close readline interface
    rl.close();
}

// Call the main function
main();
const readline = require('readline');

// Create interface for reading input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to prompt the user for input
function promptForMarks() {
    return new Promise((resolve, reject) => {
        rl.question("Enter student marks (between 0 and 100): ", (answer) => {
            resolve(parseInt(answer)); // Convert input to integer
        });
    });
}

// Function to determine grade based on marks
function calculateGrade(marks) {
    if (marks > 79) {
        return "A";
    } else if (marks >= 60 && marks <= 79) {
        return "B";
    } else if (marks >= 50 && marks <= 59) {
        return "C";
    } else if (marks >= 40 && marks <= 49) {
        return "D";
    } else {
        return "E";
    }
}

// Main function
async function main() {
    let marks = await promptForMarks();

    // Validate input
    if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log("Invalid input. Please enter marks between 0 and 100.");
    } else {
        let grade = calculateGrade(marks);
        console.log("Grade:", grade);
    }

    // Close readline interface
    rl.close();
}

// Call the main function
main();