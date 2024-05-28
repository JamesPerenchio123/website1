console.log("log test: working");

const output = document.getElementById('output');
const userInput = document.getElementById('userInput');
const prompt = document.getElementById('prompt');

let currentLine = "";
let username = "jamesperenchio"; // Replace with your desired username
let hostname = "mymachine"; // Replace with your hostname

// Update prompt dynamically
function updatePrompt() {
    prompt.innerHTML = `${username}@${hostname}:~$ `;
}

updatePrompt(); // Set initial prompt

// Focus on user input on page load
userInput.focus();

userInput.addEventListener('keydown', (event) => {
    // Ignore special keys
    if (event.key === 'Meta' || event.key === 'Tab' || event.key === 'Alt') {
        return;
    }

    if (event.key === 'Enter') {
        // Prevent default action of Enter key
        event.preventDefault();

        if (currentLine.trim() !== "") {
            // Add user input to output
            output.innerHTML += `${prompt.textContent}${currentLine}<br>`;
            // Process the command
            processCommand(currentLine);
            // Clear current line and user input
            currentLine = "";
            userInput.value = "";
        }
        updatePrompt(); // Update prompt after processing
        // Scroll to bottom
        output.scrollTop = output.scrollHeight;
    }
});

// Use the 'input' event to ensure currentLine is always in sync with the input field
userInput.addEventListener('input', () => {
    currentLine = userInput.value;
});

function processCommand(command) {
    let result = ""; // Variable to store the result of processing the command

    // Check if the command is empty
    if (command.trim() === "") {
        result = "<br>"; // Add a newline if the command is empty
    } else {
        const [cmd, ...args] = command.split(' '); // Split the command into the command and its arguments
        switch (cmd.toLowerCase()) {
            case "help": // Display all commands with "help" (case-insensitive)
            case "h": // Add an alias for "help"
                console.log("User entered:", command); // Log user command to console
                result += "<b>\n\nAvailable commands \n</b><br>";

                result += "<b>Terminal commands:</b><br>";
                result += "<b>help (h):</b>   Display available commands<br>";
                result += "<b>clear:</b>      Clear the terminal<br>";
                result += "<b>greet:</b>      Display a welcome message<br>";
                result += "<b>cowsay:</b>     Make a cow say something<br>\n";
                result += "<b>navigation: </b> <br>";
                result += "<b>experience(exp):</b>   List Experience in the terminal<br>";
                result += "<b>education(edu):</b>    List Education and Certifications in the terminal<br>";
                result += "<b>projects (p):</b>      List projects in the terminal<br>";
                result += "<b>summary (s):</b>       Display the about page in the terminal<br>"
                result += "<b>about:</b>             Redirect to the about page<br>";
                break;
            case "greet":
                console.log("User entered:", command); // Log user command to console
                const name = args.join(' '); // Join the arguments to form the name
                if (name) {
                    result = `\n\nHello, ${name}! Welcome to the interactive terminal<br>`;
                } else {
                    result = "\n\nHello! Welcome to the intereactive terminal!<br>";
                }
                break;

            case "cowsay":
                console.log("User entered:", command); // Log user command to console
                const message = args.join(' ') || "I'm a cow!"; // Join the arguments to form the message or default to "I'm a cow!"
                const topBottomBorder = "_".repeat(message.length + 2);
                const middleLine = `< ${message} >`;
                result = "<pre>\n";
                result += ` ${topBottomBorder}\n`;
                result += `${middleLine}\n`;
                result += ` ${topBottomBorder.replace(/_/g, '-')}\n`;
                result += "        \\   ^__^\n";
                result += "         \\  (oo)\\_______\n";
                result += "            (__)\\       )\\/\\\n";
                result += "                ||----w |\n";
                result += "                ||     ||\n";
                result += "</pre>";
                break;

            case "experience": // Display experience
            case "exp": // Add an alias for "experience"
                console.log("User entered:", command); // Log user command to console
                result += "\n\nWork Experience<br>";
                result += "\n1. IT Support Officer ---------------------  Monash University        (April 2024 - current)<br>";
                result += "2. Customer Service Representative --------- Rooftop at QT Hotels     (Sep 2022 - Dec 2023)<br>";
                result += "3. Bartender ------------------------------- Miss Kuku, HooHaa        (March 2021 - Sep 2022)<br>";
                break;

            case "education": // Display education and certifications
            case "edu": // Add an alias for "education"
                console.log("User entered:", command); // Log user command to console
                result = "\n\nEducation and Certifications<br>";
                result += "\n1. Bachelor of IT -------------------------------- RMIT University     (2022 - 2024)<br>";
                result += "2. CompTIA Network+ Certification ---------------- CompTIA             (Feb 2024)\n<br>";
                break;

            case "summary": // Display summary
            case "s": // Add an alias for "summary"
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
                result += "1. Took part in UNIHack hackathon and won best use of RedactiveAI, cash prize of $1000<br>";
                result += "2. Utilized python and machine learning to optimize battery storage and production for AMBER Energy<br>";
                result += "3. Created a dynamic tourism website using a SQL database that updates based on the users inputs.<br>";
                result += "4. Initiated and successfully completed a mock hotel reservation program using java, showcasing high proficiency.<br>";
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
    updateTerminal(result);
}

function updateTerminal(result) {
    output.innerHTML += `${prompt.textContent}${result}`;
    output.scrollTop = output.scrollHeight; // Scroll to bottom
    updatePrompt(); // Update prompt after processing
}

// Pre-populate some output (optional)
output.innerHTML += "Welcome to the interactive terminal! To access the help menu, type 'help' or 'h'.<br>";
