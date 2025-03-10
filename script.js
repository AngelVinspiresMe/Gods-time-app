/* script.js */
const apiKey = 'dba5524b0fe66d049b56ee7f7584e134';
const fallbackVerse = "Psalm 23:1 - The Lord is my shepherd; I shall not want.";

const timeToVerse = {
    "3:16": "John 3:16 - For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
    "10:10": "John 10:10 - I have come that they may have life, and have it to the full.",
    "7:07": "Matthew 7:7 - Ask and it will be given to you; seek and you will find; knock and the door will be opened to you.",
    "6:33": "Matthew 6:33 - But seek first his kingdom and his righteousness, and all these things will be given to you as well."
};

let is24HourFormat = true;

function toggleTimeFormat() {
    is24HourFormat = !is24HourFormat;
    showBoth();
}

function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    minutes = minutes < 10 ? '0' + minutes : minutes;

    if (!is24HourFormat) {
        const amPm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        return `${hours}:${minutes} ${amPm}`;
    } else {
        return `${hours}:${minutes}`;
    }
}

function getVerseForTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const timeKey = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
    return timeToVerse[timeKey] || fallbackVerse;
}

function showTime() {
    document.getElementById("timeDisplay").textContent = getCurrentTime();
    document.getElementById("verseDisplay").style.display = "none";
}

function showVerse() {
    document.getElementById("verseDisplay").textContent = getVerseForTime();
    document.getElementById("timeDisplay").style.display = "none";
}

function showBoth() {
    document.getElementById("timeDisplay").textContent = getCurrentTime();
    document.getElementById("verseDisplay").textContent = getVerseForTime();
}

function generateVerseOfDay() {
    const randomIndex = Math.floor(Math.random() * Object.values(timeToVerse).length);
    document.getElementById("verseOfDayDisplay").textContent = "Verse of the Day: " + Object.values(timeToVerse)[randomIndex];
}

setInterval(showBoth, 60000);
showBoth();
