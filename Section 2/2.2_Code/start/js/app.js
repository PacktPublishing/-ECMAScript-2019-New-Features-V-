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
const RenderDayWise = attendance => {};

// Render a list of students who attended this week
const RenderWeek = attendance => {};

RenderDayWise(attendance);
RenderWeek(attendance);
