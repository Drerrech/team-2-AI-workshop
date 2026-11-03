// This runs once for every row in the table.
//   row          the table row (<tr>)
//   cell         the deadline cell (<td>)
//   opportunity  the row's data, including days_left from the server
//
// The label only depends on days_left (team rule), not on the status.
// days_left comes from the server, so we never count days here.
function showDeadline(row, cell, opportunity) {
  const days = opportunity.days_left;
  let text = "";
  let colourClass = "";

  if (days < 0) {
    text = "Overdue";
    colourClass = "deadline-overdue";
  } else if (days === 0) {
    text = "Due today";
    colourClass = "deadline-soon";
  } else if (days === 1) {
    text = "Due in 1 day";
    colourClass = "deadline-soon";
  } else if (days <= 7) {
    text = "Due in " + days + " days";
    colourClass = "deadline-soon";
  } else {
    // More than 7 days away: no label, no colour.
    return;
  }

  cell.classList.add(colourClass);

  const label = document.createElement("span");
  label.className = "deadline-label";
  label.textContent = text;
  cell.appendChild(label);
}
