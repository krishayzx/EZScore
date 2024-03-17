document.addEventListener('DOMContentLoaded', function() {
    const assignmentsTable = document.getElementById('assignments');
    loadAssignments(assignmentsTable);
});

function loadAssignments(assignmentsTable) {
    const assignments = JSON.parse(localStorage.getItem('assignments')) || [];
    assignmentsTable.innerHTML = ''; // Clear existing rows before adding new ones

    assignments.forEach(assignment => {
        const row = assignmentsTable.insertRow();
        row.insertCell(0).textContent = assignment.name;
        row.insertCell(1).textContent = assignment.status;
        row.insertCell(2).textContent = assignment.due;
        const pdfCell = row.insertCell(3);
        const pdfButton = document.createElement('button');
        pdfButton.textContent = 'Attach PDF';
        pdfButton.onclick = showPdfPopup;
        pdfCell.appendChild(pdfButton);
    });
}

function showPdfPopup() {
    document.getElementById('pdfAttachmentPopup').style.display = 'block';
}

function closePdfPopup() {
    document.getElementById('pdfAttachmentPopup').style.display = 'none';
}

document.getElementById('pdfUploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const fileInput = document.getElementById('pdfInput');
    
    if(fileInput.files.length > 0) {
        const file = fileInput.files[0];
        console.log('Uploading:', file.name);
        closePdfPopup();
    } else {
        alert("Please select a PDF file to upload.");
    }
});
