// Total weekly goal (7 days × 10,000 steps)
const WEEKLY_GOAL = 70000;

// Array that stores the steps entered for each day
// Example after 3 days: [8000, 12000, 9500]
let stepsPerDay = [];


if (localStorage.getItem("steps")) {
    stepsPerDay = JSON.parse(localStorage.getItem("steps"));
    updateUI(); // Update the interface with stored data
}


// Add new Steps

function addSteps() {

    // Get the input element from the HTML
    const input = document.getElementById("stepsInput");

    // Convert input value (string) into a number
    const value = Number(input.value);

    // Validate input
    if (!value || value < 0) {
        alert("Please enter a valid number");
        return; // Stop execution if invalid
    }

    // Add the new daily steps to the array
    stepsPerDay.push(value);

    // Save updated array into localStorage
    // JSON.stringify converts array into a string
    localStorage.setItem("steps", JSON.stringify(stepsPerDay));

    // Clear input field after saving
    input.value = "";

    // Refresh the interface
    updateUI();
}


// calculate
function calculateDailyTarget() {

    const daysPassed = stepsPerDay.length;

    const stepsDone = stepsPerDay.reduce((a, b) => a + b, 0);

    // Remaining days in the week
    const remainingDays = 7 - daysPassed;

    // If the week is complete, no steps are required
    if (remainingDays <= 0) {
        return 0;
    }

    // Remaining steps needed to reach weekly goal
    const remainingSteps = WEEKLY_GOAL - stepsDone;

    return Math.max(0, Math.round(remainingSteps / remainingDays));
}


// update user interface
function updateUI() {

    const weeklySteps = stepsPerDay.reduce((a, b) => a + b, 0);

    const target = calculateDailyTarget();

    document.getElementById("weeklySteps").textContent =
        "Week total so far: " + weeklySteps + " steps";

    document.getElementById("dailyTarget").textContent =
        "New daily target: " + target + " steps";
}


// reset
function reset() {

    // Clear the array (removes all stored daily steps)
    stepsPerDay = [];

    // Remove saved data from localStorage
    localStorage.removeItem("steps");

    updateUI();
}
