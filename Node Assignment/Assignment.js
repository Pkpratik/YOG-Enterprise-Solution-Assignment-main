const fs = require("fs");
const path = require("path");

// Step 1: Create a new directory named "task_automation" if it doesn't exist
const directoryName = "task_automation";
if (!fs.existsSync(directoryName)) {
  fs.mkdirSync(directoryName);
  console.log(`Directory '${directoryName}' created.`);
}

// Step 2: Inside the directory, create three text files with any content
const fileNames = ["file1.txt", "file2.txt", "file3.txt"];
fileNames.forEach((fileName) => {
  const filePath = path.join(directoryName, fileName);
  fs.writeFileSync(filePath, `Content of ${fileName}\n`);
  console.log(`File '${fileName}' created.`);
});

// Step 3: Concatenate the content of the three files into a new file named "concatenated.txt"
const concatenatedFilePath = path.join(directoryName, "concatenated.txt");
const concatenatedContent = fileNames
  .map((fileName) => {
    const filePath = path.join(directoryName, fileName);
    return fs.readFileSync(filePath, "utf-8");
  })
  .join("\n");

fs.writeFileSync(concatenatedFilePath, concatenatedContent);
console.log("Content of files concatenated into 'concatenated.txt'.");

// Step 4: Print the content of "concatenated.txt" to the console
const contentOfConcatenatedFile = fs.readFileSync(
  concatenatedFilePath,
  "utf-8"
);
console.log(`\nContent of 'concatenated.txt':\n${contentOfConcatenatedFile}`);

// Step 5: Delete "file1.txt," "file2.txt," and "file3.txt" from the directory
fileNames.forEach((fileName) => {
  const filePath = path.join(directoryName, fileName);
  fs.unlinkSync(filePath);
  console.log(`File '${fileName}' deleted.`);
});

console.log("\nAll tasks completed successfully.");
