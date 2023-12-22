document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");
  const resultsDiv = document.getElementById("results");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents the default form submission

    // Get values from input fields
    const field1Value = document.getElementById("field1").value;
    const field2Value = document.getElementById("field2").value;
    const field3Value = document.getElementById("field3").value;

    // Create a new paragraph element
    const paragraph = document.createElement("p");

    // Set the content and style of the paragraph
    paragraph.textContent = `Field 1: ${field1Value}, Field 2: ${field2Value}, Field 3: ${field3Value}`;
    paragraph.style.color = getRandomColor(); // Dynamically set a random color

    // Append the paragraph to the results div
    resultsDiv.appendChild(paragraph);

    // Clear the form fields
    form.reset();
  });

  // Function to generate a random color
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});
