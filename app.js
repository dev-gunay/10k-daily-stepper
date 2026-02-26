// Total weekly goal (7 days × 10,000 steps)
const WEEKLY_GOAL = 70000;

// Array that stores the steps entered for each day
// Example after 3 days: [8000, 12000, 9500]
let stepsPerDay = [];


// ---------------------------
// LOAD DATA FROM LOCAL STORAGE
// ---------------------------

// When the page loads, check if saved step data exists
// localStorage only stores strings, so we need JSON.parse
if (localStorage.getItem("steps")) {
    stepsPerDay = JSON.parse(localStorage.getItem("steps"));
    updateUI(); // Update the interface with stored data
}


// ---------------------------
// ADD NEW STEPS
// ---------------------------

function addSteps() {

    // Get the input element from the HTML
    const input = document.getElementById("stepsInput");

    // Convert input value (string) into a number
    const value = Number(input.value);

    // Validate input
    // Reject empty, zero, negative, or invalid values
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


// ---------------------------
// CALCULATE NEW DAILY TARGET
// ---------------------------

function calculateDailyTarget() {

    // Number of days already completed
    const daysPassed = stepsPerDay.length;

    // Total steps completed so far this week
    const stepsDone = stepsPerDay.reduce((a, b) => a + b, 0);

    // Remaining days in the week
    const remainingDays = 7 - daysPassed;

    // If the week is complete, no steps are required
    if (remainingDays <= 0) {
        return 0;
    }

    // Remaining steps needed to reach weekly goal
    const remainingSteps = WEEKLY_GOAL - stepsDone;

    // Evenly distribute remaining steps across remaining days
    // Math.max prevents negative targets
    return Math.max(0, Math.round(remainingSteps / remainingDays));
}


// ---------------------------
// UPDATE USER INTERFACE
// ---------------------------

function updateUI() {

    // Calculate total steps for display
    const weeklySteps = stepsPerDay.reduce((a, b) => a + b, 0);

    // Get new calculated daily target
    const target = calculateDailyTarget();

    // Update weekly progress text
    document.getElementById("weeklySteps").textContent =
        "Week total so far: " + weeklySteps + " steps";

    // Update new daily target text
    document.getElementById("dailyTarget").textContent =
        "New daily target: " + target + " steps";
}


// ---------------------------
// RESET WEEK
// ---------------------------

function reset() {

    // Clear the array (removes all stored daily steps)
    stepsPerDay = [];

    // Remove saved data from localStorage
    localStorage.removeItem("steps");

    // Refresh the UI to reflect empty state
    updateUI();
}