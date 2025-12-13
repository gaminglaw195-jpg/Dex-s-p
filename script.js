// Function to update the clock
function updateClock() {
    const now = new Date();
    // Options to get a localized time (e.g., 9:45:30 PM)
    const options = { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: true 
    };
    
    // Format the time
    const timeString = now.toLocaleTimeString(undefined, options);
    
    // Get the user's general time zone/location (e.g., 'Central European Time')
    const locationName = Intl.DateTimeFormat().resolvedOptions().timeZone;
    
    // Update the HTML elements
    document.getElementById('current-time').textContent = timeString;
    // Update the placeholder in the description
    const descriptionDiv = document.getElementById('profile-description');
    if (descriptionDiv) {
        descriptionDiv.innerHTML = descriptionDiv.innerHTML.replace(
            '[Detected Location Placeholder]', 
            locationName
        );
    }
}

// Function to handle the profile creation click
document.addEventListener('DOMContentLoaded', () => {
    const welcomeScreen = document.getElementById('welcome-screen');
    const profileContainer = document.getElementById('profile-container');
    const createLink = document.getElementById('create-profile-link');
    const creationDateSpan = document.getElementById('creation-date');

    createLink.addEventListener('click', (event) => {
        event.preventDefault(); // Stop the link from jumping/reloading
        
        // 1. Hide the welcome screen
        welcomeScreen.classList.add('hidden');
        
        // 2. Show the profile
        profileContainer.classList.remove('hidden');

        // 3. Set the profile creation date
        const today = new Date();
        const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        creationDateSpan.textContent = today.toLocaleDateString(undefined, dateOptions);

        // 4. Start the live timer
        updateClock(); // Initial call
        setInterval(updateClock, 1000); // Update every second
    });

    // Optional: Pre-fill a placeholder PFP GIF if needed (assuming 'default-pfp.gif' is a GIF file)
    // To use an external GIF:
    document.getElementById('profile-pfp').src = 'https://tenor.com/view/cat-licking-popsicle-gif-3122588929262013745
