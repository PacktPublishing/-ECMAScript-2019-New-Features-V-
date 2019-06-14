import studentIds from "./studentIds";
import attendance from "./attendance";

const dayWiseSel = document.getElementById("dayWise");
const studentsPresentSel = document.getElementById("studentsPresent");

// Reduces an Array to remove duplicates
const Unique = arr => arr.reduce((a, b) => (a.includes(b) ? a : [...a, b]), []);
// Returns a comma-separated list of student names from a given Array of studentIds
const RenderNames = students =>
  Unique(students.map(student => studentIds[student])).join(", ");

// Render day wise attendance - A list of students who attended lectures
const RenderDayWise = attendance => {
  const dayWiseList = attendance
    .map(day => `<li>${RenderNames(day.flat(1))}</li>`)
    .join("");

  dayWiseSel.innerHTML = dayWiseList;
};

// Render a list of students who attended this week
const RenderWeek = attendance => {
  const students = attendance.flat(2);
  studentsPresentSel.innerHTML = RenderNames(students);
};

RenderDayWise(attendance);
RenderWeek(attendance);

const FlattenTwoLevels = array => {
  const output = [];
  array.forEach(levelOne => {
    return levelOne.forEach(levelTwo => {
      return levelTwo.forEach(item => output.push(item));
    });
  });
  return output;
};

console.log(TwoLevelArray(array));
