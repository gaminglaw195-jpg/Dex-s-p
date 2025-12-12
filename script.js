function updateTime() {
    const now = new Date();
    // Format the time as HH:MM:SS PM/AM
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const formattedTime = now.toLocaleTimeString('en-US', timeOptions);
    
    // Format the date as Month Day, Year
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', dateOptions);

    document.getElementById('current-time').textContent = formattedTime;
    document.getElementById('profile-date').textContent = "Profile created on: " + formattedDate;
}

function buildProfile() {
    // 1. Hide the "CLICK HERE TO START" link
    document.getElementById('profile-builder-link').style.display = 'none';

    // 2. Hide the GIF placeholder text and apply background color
    const gifContainer = document.getElementById('profile-gif-container');
    gifContainer.textContent = ''; // Remove the "**Profile Picture Gif**" text
    gifContainer.style.backgroundColor = 'black';
    gifContainer.style.color = 'white';
    gifContainer.innerHTML = '<div class="confetti-animation">✨ PROFILE GENERATED ✨</div>';

    // 3. Make the details visible
    document.getElementById('profile-details').classList.remove('profile-details-hidden');
    document.getElementById('profile-details').classList.add('profile-details-visible');

    // 4. Update the location line (Placeholder for simplicity)
    document.getElementById('profile-location-li').innerHTML = 'Location: Europe/Berlin';

    // 5. Start the clock
    updateTime(); // Initial call
    setInterval(updateTime, 1000); // Update every second
}
