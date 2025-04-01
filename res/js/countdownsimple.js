// Set the date we're counting down to
const countdownDate = new Date("April 30, 2025 20:00:00").getTime();

// Update the countdown every 1 second
const interval = setInterval(function() {
    // Get the current date and time
    const now = new Date().getTime();
    
    // Calculate the distance between now and the countdown date
    const distance = countdownDate - now;
    
    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the result in the element with id="countdown"
    document.getElementById("countdown").innerHTML = days + "d " + hours + ":" 
    + minutes + ":" + seconds + "";
    
    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(interval);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1);