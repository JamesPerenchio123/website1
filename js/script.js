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
                result = "<b>\n\nAvailable commands:</b><br>";
                result += "<b>help (h):</b> Display available commands<br>";
                result += "<b>clear:</b> Clear the terminal<br>";
                result += "<b>greet:</b> Display a welcome message<br>";
                result += "<b>about:</b> Redirect to the about page<br>";
                result += "<b>summary -t:</b> Display the about page in the terminal<br>"
                result += "<b>projects (p):</b> List projects<br>";
                break;
            case "greet":
                console.log("User entered:", command); // Log user command to console
                result = "\n\nHello! Welcome to the interactive terminal!<br>";
                break;
            
            case "summary -t":
                console.log("User entered:", command); // Log user command to console
                result = "\n\nHi, I'm James! \nCurrently in my third year of a Bachelor's in IT at RMIT, I'm passionate about building dynamic websites that are not only user-friendly but also visually appealing. My interest in IT extends to networking, where I recently earned my CompTIA Network+ certification, solidifying my skills in network troubleshooting and configuration.  I'm actively working towards my CCNP to further my expertise. I thrive in collaborative environments and have a proven track record of delivering successful results.  For instance, in a recent hackathon, my team of 5 tackled the challenge of improving lecture comprehension and learning. Our solution leveraged RagAI to create a system that answered user questions about lectures and automatically generated flashcards for better retention. This project not only required strong problem-solving but also collaboration, as we combined our skills to win the 'Best Use of RedactiveAI' award. My problem-solving skills are constantly evolving as I participate in HackTheBox challenges and seek out hackathons whenever possible \n<br>";
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
                            window.location.href = "about_me.html";
                        }, 1000);
                    }, 1000);
                }, 1000);
                return; // Return to prevent further processing
            case "projects": // list projects page (case-insensitive)
            case "p": // Add an alias for "projects"
                console.log("User entered:", command); // Log user command to console
                result = "<b>\n\nList of Projects:</b><br>";
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
