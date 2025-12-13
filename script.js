function updateTime() {
    const now = new Date();
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const formattedTime = now.toLocaleTimeString('en-US', timeOptions);
    
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', dateOptions);

    document.getElementById('current-time').textContent = formattedTime;
    document.getElementById('profile-date').textContent = "Profile created on: " + formattedDate;
}

function buildProfile() {
    // 1. Hide the "CLICK HERE TO START" link
    document.getElementById('profile-builder-link').style.display = 'none';

    // 2. Insert the Cat GIF into the placeholder
    const gifContainer = document.getElementById('profile-gif-container');
    gifContainer.innerHTML = '<img src="https://media.tenor.com/y27v74q64p8AAAAC/cat-licking-popsicle.gif" style="max-width:100%; height:auto; border-radius:8px;" alt="Cat licking popsicle">';

    // 3. Make the details visible
    document.getElementById('profile-details').classList.remove('profile-details-hidden');
    document.getElementById('profile-details').classList.add('profile-details-visible');

    // 4. Update the location line
    document.getElementById('profile-location-li').innerHTML = 'Location: Europe/Berlin';

    // 5. Start the clock
    updateTime(); 
    setInterval(updateTime, 1000);
}
