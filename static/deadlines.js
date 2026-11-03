// This runs once for every row in the table.
//   row          the table row (<tr>)
//   cell         the deadline cell (<td>)
//   opportunity  the row's data, including days_left from the server
function showDeadline(row, cell, opportunity) {
  const daysLeft = opportunity.days_left;
  let text = "";
  let colour = "";

  if (daysLeft < 0) {
    text = "Overdue";
    colour = "deadline-overdue";
  } else if (daysLeft === 0) {
    text = "Due today";
    colour = "deadline-soon";
  } else if (daysLeft <= 7) {
    text = daysLeft === 1 ? "Due in 1 day" : "Due in " + daysLeft + " days";
    colour = "deadline-soon";
  }

  // Deadlines more than 7 days away show no label.
  if (text === "") {
    return;
  }

  const label = document.createElement("div");
  label.className = "deadline-label " + colour;
  label.textContent = text;
  cell.appendChild(label);
}
