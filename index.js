#!/usr/bin/env node
// Function to log your details in the terminal
function logDetails() {
  const message =
    "Hey! I'm Sourav Mandal, Full time freelancer a full stack web developer & software engineer from India";
  const Twitter = "https://twitter.com/souravcode";
  const Linkedin = "https://www.linkedin.com/in/souravcode/";
  const wesbiteLink = "https://souravcode.in";
  const Github = "https://github.com/souravcodeweb";



  // Create a colorful box using ANSI escape codes
  const colorfulBox = `  \x1b[38;5;51m+---------------------------------------------------------------+
      |   \x1b[38;5;105m${message}\x1b[38;5;51m    |
      +---------------------------------------------------------------+
      | \x1b[38;5;93mTwitter:\x1b[0m \x1b[38;5;39m${Twitter}     \x1b[38;5;51m|
      | \x1b[38;5;93mLinkedIn:\x1b[0m \x1b[38;5;39m${Linkedin}   \x1b[38;5;51m|
      | \x1b[38;5;93mPortfolio:\x1b[0m  \x1b[38;5;39m${wesbiteLink}  \x1b[38;5;51m|
      | \x1b[38;5;93mGithub:\x1b[0m  \x1b[38;5;39m${Github}   \x1b[38;5;51m|
      +----------------------------------------------------------------+\x1b[0m
        \| (◉⁠‿⁠◉) |/
         |      |
            ——
         |     |
         |_    |_ \x1b[0m
      
=====================================================================================================================================

i am a Full Stack Web Developer
-------------------------------

Hey there 👋 I am a full-stack web developer from India. I always like to use advanced technology for creating useful products and I like to use advanced programming languages & frameworks like Python, JavaScript, React, CSS, HTML, etc.

* 🌍  I'm based in India
* 🖥️  See my portfolio at [www.souravcode.in]
* ✉️  You can contact me at [souravmandal909p@gmail.com]
* 🚀  I'm currently working on [Python AI]
* 🧠  I'm learning Web3

      +----------------------------------------------------------------+\x1b[0m   `;

  // Log the colorful box in the terminal
  console.log(colorfulBox);
}
// Call the function to log your details
logDetails();
