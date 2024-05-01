console.log("log test: working"); 
const output = document.getElementById('output');
const userInput = document.getElementById('userInput');
const prompt = document.getElementById('prompt');

let currentLine = "";
let username = "jamesperenchio"; // Replace with your desired username
let hostname = "mymachine"; // Replace with your hostname

// Update prompt dynamically
function updatePrompt() {
    prompt.textContent = `${username}@${hostname}:~$ (help/h)`; // Include commands in prompt
  }
  

updatePrompt(); // Set initial prompt

// Focus on user input on page load
userInput.focus(); 




userInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        // Add user input to output
        output.innerHTML += `${prompt.textContent}${currentLine}<br>`;
        // Process the command
        processCommand(currentLine);
        // Clear current line and user input
        currentLine = "";
        userInput.value = "";
        // Scroll to bottom
        output.scrollTop = output.scrollHeight;
    } else if (event.key === 'Backspace') { // Check if the key is Backspace
        currentLine = currentLine.slice(0, -1); // Remove the last character from currentLine
    } else {
        currentLine += event.key;
    }
});



function processCommand(command) {
    let result = ""; // Variable to store the result of processing the command

    // Check if the command is empty
    if (command.trim() === "") {
        result = "<br>"; // Add a newline if the command is empty
    } else {
        switch (command.toLowerCase()) {
            case "help": // Display all commands with "help" (case-insensitive)
            case "h": // Add an alias for "help"
                console.log("User entered:", command); // Log user command to console
                result = "<b>Available commands:</b><br>";
                result += "<b>help (h):</b> Display available commands<br>";
                result += "<b>clear:</b> Clear the terminal<br>";
                result += "<b>greet:</b> Display a welcome message<br>";
                result += "<b>about:</b> Redirect to the about page<br>";
                break;
            case "greet":
                console.log("User entered:", command); // Log user command to console
                result = "Hello! Welcome to the interactive terminal!<br>";
                break;
            case "about":
                console.log("User entered:", command); // Log user command to console
                result = "Redirecting to the about page in 3 seconds...<br>";
                updateTerminal(result);
                setTimeout(() => {
                    result = "Redirecting to the about page in 2 seconds...<br>";
                    updateTerminal(result);
                    setTimeout(() => {
                        result = "Redirecting to the about page in 1 second...<br>";
                        updateTerminal(result);
                        setTimeout(() => {
                            // Redirect to about page
                            window.location.href = "pages/about/about_me.html";
                        }, 1000);
                    }, 1000);
                }, 1000);
                return; // Return to prevent further processing
            case "projects": // list projects page (case-insensitive)
            case "p": // Add an alias for "projects"
                console.log("User entered:", command); // Log user command to console
                result = "<b>List of Projects:</b><br>";
                result += "1. Project 1<br>";
                result += "2. Project 2<br>";
                result += "3. Project 3<br>";
                break;
            case "clear":
                console.clear(); // Clear console
                output.innerHTML = ""; // Clear terminal output
                return; // Return to prevent further processing
            default:
                result = `Command not found: ${command}<br>`; // Display if command is not recognized
        }
    }

    // Append result to output
    output.innerHTML += `${prompt.textContent}${result}`;
    // Update prompt after processing
    updatePrompt();
}

function updateTerminal(result) {
    output.innerHTML += `${prompt.textContent}${result}`;
    output.scrollTop = output.scrollHeight; // Scroll to bottom
    updatePrompt(); // Update prompt after processing
}


  
  
// Pre-populate some output (optional)
output.innerHTML += "Welcome to the interactive terminal!<br>";
