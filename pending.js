let pendingWorks = JSON.parse(localStorage.getItem("pendingWorks")) || [];
let completedWorks = JSON.parse(localStorage.getItem("completedWorks")) || [];

const loggedUser = localStorage.getItem("loggedUser") || "dhanumisal"; // fallback for testing
const tbody = document.querySelector("#pending-table tbody");
tbody.innerHTML = "";

// Render table
pendingWorks.forEach(work => {
  const canAct = (work.assignedTo === loggedUser || loggedUser === "dhanumisal");

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${work.id}</td>
    <td>${work.machine}</td>
    <td>${work.issue}</td>
    <td>${work.priority}</td>
    <td>${work.date}</td>
    <td>${work.assignedTo}</td>
    <td>
      <button class="progress-btn" ${!canAct ? "disabled" : ""}>In Progress</button>
      <button class="complete-btn" ${!canAct ? "disabled" : ""}>Completed</button>
    </td>
  `;

  // Attach event listeners safely
  row.querySelector(".progress-btn").addEventListener("click", () => {
    row.classList.add("in-progress");
  });

  row.querySelector(".complete-btn").addEventListener("click", () => {
    const index = pendingWorks.findIndex(w => w.id == work.id);
    if (index !== -1) {
      work.completedBy = loggedUser;
      work.completedDate = new Date().toISOString().split("T")[0];

      completedWorks.push(work);
      localStorage.setItem("completedWorks", JSON.stringify(completedWorks));

      pendingWorks.splice(index, 1);
      localStorage.setItem("pendingWorks", JSON.stringify(pendingWorks));

      row.remove(); // only this row is removed
    }
  });

  tbody.appendChild(row);
});

