function submitForm() {
    const file1Text = document.getElementById('file1').value;
    const file2Text = document.getElementById('file2').value;
    const file3Text = document.getElementById('file3').value;

    const resultDiv = document.getElementById('result');

    // Append the entered text to a new paragraph
    const paragraph = document.createElement('p');
    paragraph.textContent = `${file1Text}, ${file2Text}, ${file3Text}`;
    
    // Style the paragraph dynamically (e.g., different colors for each paragraph)
    paragraph.style.color = getRandomColor();

    // Append the paragraph to the result div
    resultDiv.appendChild(paragraph);
}

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
