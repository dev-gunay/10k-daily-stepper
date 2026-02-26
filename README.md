<img width="547" height="435" alt="image" src="https://github.com/user-attachments/assets/d970501e-ed46-413e-b6b8-6b88fc648563" />
# 🏃 Weekly Step Tracker

A minimalistic web app to track weekly step goals.

This project was intentionally built with **pure HTML, CSS and JavaScript**  
without frameworks and without using `Date()` to keep the logic simple and beginner-friendly.

---

## 📌 Concept

- Weekly goal: **70,000 steps**
- Default daily target: **10,000 steps**
- 1 entry = 1 simulated day
- Multiple entries per real day are possible
- The daily target automatically recalculates based on remaining steps and remaining simulated days

---
<img width="449" height="959" alt="image" src="https://github.com/user-attachments/assets/4db5876f-8d3c-44cb-981b-8ec97b5c0e55" />

## How It Works

The user enters a number of steps and clicks save. The value is read from the DOM, converted into a number, and pushed into the `stepsPerDay` array. Each entry represents one simulated day. This means 1 entry = 1 day, even though multiple entries per real day are technically possible.

After each entry, the array is stored in `localStorage` using `JSON.stringify()` so the data persists after a page reload. When the app loads, saved data is restored using `localStorage.getItem()` and `JSON.parse()`.

The daily target is recalculated after every entry using:

(New Weekly Goal - Steps Done) / Remaining Days

The weekly goal is 70,000 steps. The app calculates how many steps are already completed and distributes the remaining steps evenly across the remaining simulated days of the 7-day cycle.

---

## ⚠️ Important Design Decision

This app does **NOT** use real calendar dates.

There is no `Date()` logic involved.

Instead:

- Each new entry is treated as one "day"
- `stepsPerDay.length` determines how many days have passed
- Remaining steps are evenly distributed across the remaining days of a 7-day cycle

This was done intentionally to:
- Keep the logic simple
- Make the code easy to understand for beginners
- Focus on JavaScript fundamentals

---

## 🧠 How It Works

The core idea is:
New Daily Target = (Weekly Goal - Steps Done) / Remaining Days

Where:

- `Weekly Goal` = 70,000
- `Steps Done` = Sum of all entries
- `Remaining Days` = 7 - number of entries

---

## 💾 Local Storage

The app uses `localStorage` to persist data.

### Methods used:

- `localStorage.setItem()` → Save data
- `localStorage.getItem()` → Load data
- `localStorage.removeItem()` → Reset data

Since localStorage only stores strings:
- Arrays are converted using `JSON.stringify()`
- Loaded back using `JSON.parse()`

---


---

## 🎯 Purpose of This Project

This project was built to practice:

- DOM manipulation
- Arrays
- Functions
- State management
- localStorage
- Clean and readable code
- Commenting for learning clarity

Attention ---> The code is intentionally fully commented to improve understanding.

---

## 🚀 Future Improvements (Optional Ideas)

- Real calendar integration using `Date()`
- True Monday–Sunday week tracking
- Editable daily entries
- Progress bar or ring animation
- Chart visualization

---

## 🧼 Clean Code Philosophy

This project prioritizes:

- Simplicity over complexity
- Readability over optimization
- Learning over perfection

The goal was not to build a production-grade fitness app, rather for educational purposes.

---

## 📜 License

This project was developed by Kuersat Ali Guenay.

You are free to view and learn from the code.  
Reusing or modifying parts of it is allowed for educational purposes.
