// This runs once for every row in the table.
//   row          the table row (<tr>)
//   cell         the deadline cell (<td>)
//   opportunity  the row's data, including days_left from the server
function showDeadline(row, cell, opportunity) {
  const d = opportunity.days_left;
  if (d < 0) {
    cell.textContent = "Overdue";
    row.classList.add("deadline-overdue");
  } else if (d === 0) {
    cell.textContent = "Due today";
    row.classList.add("deadline-soon");
  } else if (d <= 7) {
    cell.textContent = "Due in " + d + " day" + (d === 1 ? "" : "s");
    row.classList.add("deadline-soon");
  }
}
