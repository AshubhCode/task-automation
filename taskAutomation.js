const fs = require('fs');

const directoryPath = 'task_automation';

// Step 1: Check if the directory exists
if (!fs.existsSync(directoryPath)) {
    // If not, create the directory
    fs.mkdirSync(directoryPath);

    // Step 2: Create three text files with content
    fs.writeFileSync(`${directoryPath}/file1.txt`, 'This is Subhash file1.txt');
    fs.writeFileSync(`${directoryPath}/file2.txt`, 'This is Subhash file2.txt');
    fs.writeFileSync(`${directoryPath}/file3.txt`, 'This is Subhash file3.txt');

    // Step 3: Concatenate the content of the three files
    const content1 = fs.readFileSync(`${directoryPath}/file1.txt`, 'utf-8');
    const content2 = fs.readFileSync(`${directoryPath}/file2.txt`, 'utf-8');
    const content3 = fs.readFileSync(`${directoryPath}/file3.txt`, 'utf-8');
    const concatenatedContent = `${content1}\n${content2}\n${content3}`;

    // Step 4: Write the concatenated content to "concatenated.txt"
    fs.writeFileSync(`${directoryPath}/concatenated.txt`, concatenatedContent);

    // Step 5: Print the content of "concatenated.txt" to the console
    console.log('Content of concatenated.txt:');
    console.log(concatenatedContent);

    // Step 6: Delete "file1.txt", "file2.txt", and "file3.txt"
    fs.unlinkSync(`${directoryPath}/file1.txt`);
    fs.unlinkSync(`${directoryPath}/file2.txt`);
    fs.unlinkSync(`${directoryPath}/file3.txt`);

    console.log('Files deleted successfully.');
} else {
    console.log('Directory already exists. Please remove or rename the existing directory.');
}
