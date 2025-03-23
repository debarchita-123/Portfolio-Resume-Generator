// Load the selected PDF template into the viewer
function loadPDF(pdfFile) {
    var pdfViewer = document.getElementById('pdf-viewer');

    // PDF.js to load and display the PDF
    var loadingTask = pdfjsLib.getDocument(pdfFile);
    loadingTask.promise.then(function(pdf) {
        pdf.getPage(1).then(function(page) {
            var scale = 1.5;
            var viewport = page.getViewport({ scale: scale });

            var canvas = document.createElement('canvas');
            var context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            pdfViewer.innerHTML = '';  // Clear any previous PDF
            pdfViewer.appendChild(canvas);

            var renderContext = {
                canvasContext: context,
                viewport: viewport
            };
            page.render(renderContext);
        });
    });
}

// Function to update the PDF with user input
async function updatePDF() {
    const url = 'template1.pdf';  // Load the original PDF template
    const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer());

    // Load the PDF using pdf-lib
    const pdfDoc = await PDFLib.PDFDocument.load(existingPdfBytes);

    const form = pdfDoc.getForm();

    // Get the fields from the form
    const nameField = form.getTextField('name');
    const skillsField = form.getTextField('skills');
    const educationField = form.getTextField('education');
    const projectsField = form.getTextField('projects');

    // Update the form fields with the user input
    nameField.setText(document.getElementById('name').value);
    skillsField.setText(document.getElementById('skills').value);
    educationField.setText(document.getElementById('education').value);
    projectsField.setText(document.getElementById('projects').value);

    // Serialize the PDF document to bytes
    const pdfBytes = await pdfDoc.save();

    // Save the updated PDF for download
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Updated_Portfolio.pdf';
    link.click();
}

// Download the edited PDF
function downloadPDF() {
    updatePDF();  // Ensure the PDF is updated before download
}

// Redirect back to index.html
function goBack() {
    window.location.href = "index.html";
}
document.querySelector('.btn1').addEventListener('click', function() {
    const box1 = document.querySelector('.about-section');
    box1.classList.remove('hidden') // Toggle the hidden class
});
