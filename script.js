function updateTime() {
    const now = new Date();
    // Format the time as HH:MM:SS AM/PM
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const formattedTime = now.toLocaleTimeString('en-US', timeOptions);
    
    // Format the date as Month Day, Year
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', dateOptions);

    // Push the time and date to the HTML elements
    if(document.getElementById('current-time')) {
        document.getElementById('current-time').textContent = formattedTime;
    }
    if(document.getElementById('profile-date')) {
        document.getElementById('profile-date').textContent = "Profile created on: " + formattedDate;
    }
}

function buildProfile() {
    // 1. Hide the "CLICK HERE TO START" link
    const startLink = document.getElementById('profile-builder-link');
    if (startLink) startLink.style.display = 'none';

    // 2. Insert the Cat GIF directly into the placeholder
    const gifContainer = document.getElementById('profile-gif-container');
    if (gifContainer) {
        gifContainer.style.backgroundColor = 'transparent'; // Remove the black background
        gifContainer.innerHTML = '<img src="https://media.tenor.com/y27v74q64p8AAAAC/cat-licking-popsicle.gif" style="max-width:100%; height:auto; border-radius:8px; border: 2px solid #007bff;" alt="Cat licking popsicle">';
    }

    // 3. Make the hidden details visible
    const details = document.getElementById('profile-details');
    if (details) {
        details.classList.remove('profile-details-hidden');
        details.classList.add('profile-details-visible');
    }

    // 4. Update the location line text
    const locationLi = document.getElementById('profile-location-li');
    if (locationLi) locationLi.innerHTML = 'Location: Europe/Berlin';

    // 5. Start the live clock immediately and update every second
    updateTime(); 
    setInterval(updateTime, 1000);
}
