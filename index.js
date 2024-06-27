document.addEventListener("DOMContentLoaded", function () {
    const arraylist = [".filter", ".map"];
  
    // Function to create a button element
    function createButton(text, url) {
      const button = document.createElement("button");
      button.classList.add("button-54");
      button.textContent = text;
      button.onclick = function() {
        location.href = url;
      };
      return button;
    }
  
    // Function to create and append a home button
    function createHomeButton() {
      const buttonContainer = document.createElement("div");
      buttonContainer.classList.add("home_navigator_button");
      buttonContainer.innerHTML = `
        <button class="button-64" role="button" onclick="location.href='/index.html'">
          <span class="text">Go To Home Page</span>
        </button>`;
      document.body.appendChild(buttonContainer);
    }
  
    // Function to add favicon
    function addFavicon() {
      const link = document.createElement("link");
      link.rel = "icon";
      link.href = "/images/js.svg";
      document.head.appendChild(link);
    }
  
    // Function to load and apply Google Font
    function loadGoogleFont() {
      const link = document.createElement("link");
      link.href = "https://fonts.googleapis.com/css2?family=Saira+Condensed:wght@100;200;300;400;500;600;700;800;900&display=swap";
      link.rel = "stylesheet";
      document.head.appendChild(link);
  
      // Apply the font to the body
      document.body.style.fontFamily = "'Saira Condensed', sans-serif";
    }
  
    // Create home button, add favicon, load Google Font, and create buttons
    createHomeButton();
    addFavicon();
    loadGoogleFont();
  
    // Get container for buttons
    const buttonContainer = document.getElementById("button-container");
  
    // Check if buttonContainer exists before appending buttons
    if (buttonContainer) {
      // Create and append buttons for each method in arraylist
      arraylist.forEach((name, index) => {
        const button = createButton(name, `/Array_Questions/${name.replace('.', '')}.html`);
        button.setAttribute("id", index);
        buttonContainer.appendChild(button);
      });
    } else {
      console.error("Element with id 'button-container' not found.");
    }
  
    // Get answerDiv and runButton
    const answerDiv = document.getElementById("answar");
    const runButton = document.getElementById("run");
  
    // Check if answerDiv and runButton exist before setting up toggle functionality
    if (answerDiv && runButton) {
      // Initial state: Hide the answer
      answerDiv.style.display = "none";
  
      // Toggle visibility function
      function toggleAnswer() {
        if (answerDiv.style.display === "none") {
          answerDiv.style.display = "block";
          runButton.textContent = "Hide Answer";
        } else {
          answerDiv.style.display = "none";
          runButton.textContent = "Show Answer";
        }
      }
  
      // Event listener for the run button click
      runButton.addEventListener("click", toggleAnswer);
    } else {
      console.error("Elements 'answar' or 'run' not found.");
    }
  });
  