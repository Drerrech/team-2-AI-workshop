// This runs once for every row in the table.
//   row          the table row (<tr>)
//   cell         the deadline cell (<td>)
//   opportunity  the row's data, including days_left from the server
function showDeadline(row, cell, opportunity) {
  const daysLeft = opportunity.days_left;

  if (daysLeft < 0) {
    cell.classList.add("deadline-overdue");
    cell.textContent = "Overdue";
  } else if (daysLeft === 0) {
    cell.classList.add("deadline-today");
    cell.textContent = "Due today";
  } else if (daysLeft <= 7) {
    cell.classList.add("deadline-soon");
    const unit = daysLeft === 1 ? "day" : "days";
    cell.textContent = `Due in ${daysLeft} ${unit}`;
  }
}
