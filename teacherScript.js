// This code should be added to your existing teacherScript.js file

// Event listener for the Add Assignment form submission
document.getElementById('addAssignmentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const assignmentName = document.getElementById('assignmentName').value;
    const dueDate = document.getElementById('dueDate').value;
    const id = new Date().getTime(); // Using timestamp as a unique ID

    let assignments = JSON.parse(localStorage.getItem('assignments')) || [];
    assignments.push({ id, name: assignmentName, due: dueDate, status: 'Pending' });

    localStorage.setItem('assignments', JSON.stringify(assignments));
    addAssignmentToTable({ id, name: assignmentName, due: dueDate, status: 'Pending' });

    // Reset the form
});


function addAssignmentToTable(assignment) {
    const table = document.getElementById('assignments');
    const row = table.insertRow();
    row.insertCell(0).textContent = assignment.name;
    row.insertCell(1).textContent = assignment.status;
    row.insertCell(2).textContent = assignment.due;

    const deleteCell = row.insertCell(3);
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() { deleteAssignment(assignment.id); };
    deleteCell.appendChild(deleteButton);
}

function deleteAssignment(assignmentId) {
    let assignments = JSON.parse(localStorage.getItem('assignments')) || [];
    assignments = assignments.filter(assignment => assignment.id !== assignmentId);

    localStorage.setItem('assignments', JSON.stringify(assignments));
    refreshAssignmentsTable();
}

function refreshAssignmentsTable() {
    const table = document.getElementById('assignments');
    table.innerHTML = ''; // Clear the table
    const assignments = JSON.parse(localStorage.getItem('assignments')) || [];
    assignments.forEach(addAssignmentToTable);
}





document.addEventListener('DOMContentLoaded', function() {
    const roleSelect = document.getElementById('roleSelect');
    roleSelect.value = 'teacher.html'; // Set the dropdown to 'Teacher'

    // Populate assignments, attach events, and other initial setup...
});

function handleRoleChange(selectedValue) {
    if (selectedValue !== 'teacher.html') {
        window.location.href = selectedValue;
    }
    // Additional logic can go here if needed when switching roles
}
// Function to handle adding an assignment
function addAssignment(assignmentName, dueDate) {
    db.ref('assignments/').push({
        name: assignmentName,
        due: dueDate,
        status: 'Pending'
    });
}

function uploadRubric(assignmentName) {
    // Logic to handle rubric upload for a given assignment
    // Show a popup with a file input
}

// Add event listeners for Add Assignment button and Rubric Upload buttons
// Implement the logic for adding new assignments and uploading rubrics
document.getElementById('addAssignmentBtn').addEventListener('click', function() {
    document.getElementById('addAssignmentPopup').style.display = 'block';
});

function closeAddAssignmentPopup() {
    document.getElementById('addAssignmentPopup').style.display = 'none';
}

document.getElementById('addAssignmentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const assignmentName = document.getElementById('assignmentName').value;
    const dueDate = document.getElementById('dueDate').value;


    // Now, send this data to the server or local storage, so the Student's page can access it.
    // Since JavaScript in the browser doesn't have direct file I/O capabilities, you might need to use a server-side solution, a database, or local storage to store this data.
    // For demonstration, I'll just console.log the values.
    console.log('New Assignment:', assignmentName, 'Due:', dueDate);

    closeAddAssignmentPopup();
});