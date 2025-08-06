//your JS code here. If required.
 function wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

      // Async function to display message after delay
      async function showMessage() {
        const textValue = document.getElementById('text').value;
        let delayValue = Number(document.getElementById('delay').value);
        const outputDiv = document.getElementById('output');

        // If delay is invalid, default to 0
        if (isNaN(delayValue) || delayValue < 0) {
          delayValue = 0;
        }

        // Clear previous message
        outputDiv.textContent = '';

        // Wait for delay
        await wait(delayValue);

        // Show message
        outputDiv.textContent = textValue;
      }

      // Button click event
      document.getElementById('btn').addEventListener('click', (event) => {
        event.preventDefault();
        showMessage();
      });