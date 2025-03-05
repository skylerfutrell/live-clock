⏰ Live Clock

⭐ Created by Skyler Futrell

👀 [View on GitHub Pages](https://skylerfutrell.github.io/live-clock/)

📌 Project Overview: This project is a fun digital live clock with an interactive radio button, smooth animations, and dynamic background colors that respond to mouse movement.

🚀 Features:

⌛ Live Digital Clock - Updates every second.

📻 Interactive Radio Button - Play and pause the audio with a click.

🎨 Animated Background - Colors shift based on mouse movement.

💡 Neon UI Design - Styling glowing effects and smooth interctive transitions.

🏁 Getting Started:

    Prerequisites:

    - A modern web browser.
    - A text editor (VS Code, Sublime, Notepad ++)

    Installation:

    - Download or clone the repository to your local machine.
    - Ensure the following files are present in the project directory:
            - index.hmtl
            - styles.css
            - script.js
            - iron-man-01.mp3

📂 Project Structure

        /live-clock
        │── index.html          # Main HTML file
        │── /css
        │   └── styles.css      # Styles for the clock and UI
        │── /js
        │   └── script.js       # Clock logic and radio controls
        │── /sounds
        │   └── iron-man-01.mp3 # Audio file sourced from Soundjay for the radio feature

📖 Usage:

1. Clone the repository

           git clone https://github.com/skylerfutrell/live-clock.git

2. Navigate to the project folder

          cd live-clock

3. Open index.html in your browser.

⚒️ Technologies Used:

🖥️ Frontend Development

- HTML5 – Provides the structure for the webpage, including the clock display and radio button.
  
- CSS3 – Handles the styling, animations, and responsive design.
        - Google Fonts (Orbitron) for a futuristic look.
        - CSS Keyframes for glowing text and animated background.
        - Transitions & Shadows for smooth UI effects.
  
- JavaScript (ES6+) – Adds interactivity and functionality:
        - setInterval() for real-time clock updates.
        - Event Listeners for handling user interactions with the radio button.
        - DOM Manipulation to update the clock display dynamically.
        - Mouse Events to change the background color based on cursor movement.
  
🔊 Media & Audio

- HTML5 Audio API – Plays and controls an MP3 file for the radio feature.
- MP3 File Support – Ensures compatibility with modern browsers.

📡 Performance & Optimization

- Deferred JavaScript Loading (defer in <script> tag) to improve page load speed.
- Optimized CSS Animations to minimize performance impact.
- Efficient Event Handling to prevent unnecessary reflows and repaints.

📝 What I Learned:

This project helped me refine my knowledge of:

✅Working with JavaScript Timers – Using setInterval() to update the digital clock every second.

✅ Handling Audio Playback in JavaScript – Implementing play/pause functionality using the HTML5 Audio API.

✅ CSS Animations & Keyframes – Creating smooth glowing text effects and animated background transitions.

✅ Mouse Interaction Events – Capturing user cursor movement to dynamically adjust the background color.

✅ DOM Manipulation – Updating HTML elements dynamically to reflect real-time changes.

✅ Event Listeners & User Interaction – Using JavaScript to handle button clicks for a responsive UI.

🎯 Future Improvements:

📶 Add a Radio Stream API – Implement live streaming functionality with multiple stations.

🎵 Channel Selection Feature – Allow users to switch between different radio channels.

🔈 Volume Control – Add a volume slider to adjust the radio playback.

🖌️ Customization:

Want to tweak the project? Here’s how you can customize it:

🕰️  Change the Clock Style

- Modify styles.css to adjust the appearance of the digital clock.

- Example: Change the font size in .digital-clock:

          .digital-clock {
            font-size: 4rem; /* Increase size */
            color: cyan; /* Change text color */
          }

🔊 Use a Different Audio File

- Replace iron-man-01.mp3 in the /sounds folder with your own MP3 file.
  
- Update index.html to reference the new file:

          <audio id="radio-song" src="sounds/new-audio.mp3"></audio>

🎨 Adjust Background Effects

- Modify the mouse movement effect in script.js to change background behavior.

- Example: Use a fixed gradient instead of dynamic colors:

                  document.body.style.background = "linear-gradient(to right, #ff00ff, #00ffff)";

⏯️ Change the Button Design

- Edit the .radio-button styles in styles.css:

                  .radio-button {
                    background: blue; /* Change button color */
                    border-radius: 20px; /* Make it more rounded */
                  }

License:

                This project is open-source and available under the MIT License. Feel free to use, modify, and distribute it.

                Copyright (c) [2024] [Skyler Futrell]

🔗 Connect With Me:

Website:

LinkedIn: 




    
        
    
    
