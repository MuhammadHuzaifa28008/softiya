// document.addEventListener("DOMContentLoaded", function() {
//     const form = document.getElementById('contactFrom');
  
//     form.addEventListener('submit', function(event) {
//       event.preventDefault(); // Prevent the default form submission
  
//       const formData = new FormData(form);
//       for (const [name, value] of formData) {
//         console.log(`${name}: ${value}`); // Log each form field and value
//       }
  
//       const loading = document.querySelector('.loading');
//       const errorMessage = document.querySelector('.error-message');
//       const sentMessage = document.querySelector('.sent-message');
  
//       // Show loading indicator
//       loading.style.display = 'block';
//       errorMessage.style.display = 'none';
//       sentMessage.style.display = 'none';
  
//       fetch('http://localhost:8080', {
//         method: 'POST',
//         body: formData
//       })
//       .then(response => {
//         loading.style.display = 'none';
//         if (response.ok) {
//           sentMessage.style.display = 'block';
//           form.reset(); // Clear the form after successful submission
//         } else {
//           throw new Error('Network response was not ok');
//         }
//       })
//       .catch(error => {
//         loading.style.display = 'none';
//         errorMessage.textContent = 'An error occurred. Please try again later.';
//         errorMessage.style.display = 'block';
  
//         // Hide error message after 5 seconds
//         setTimeout(() => {
//           errorMessage.style.display = 'none';
//         }, 5000);
//       });
//     });
//   });
  





document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contactFrom');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission
  
      const formData = new FormData(form);
      const formObject = {};
      
      formData.forEach((value, key) => {
        // console.log(value)
        formObject[key] = value; // Add each form field and value to the object
      });
  
      console.log(formObject); // Log the form object
  
      const loading = document.querySelector('.loading');
      const errorMessage = document.querySelector('.error-message');
      const sentMessage = document.querySelector('.sent-message');
  
      // Show loading indicator
      loading.style.display = 'block';
      errorMessage.style.display = 'none';
      sentMessage.style.display = 'none';
  
      fetch('https://localhost:8080', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formObject) // Convert object to JSON string
      })
      .then(response => {
        console.log('response')
        console.log(response)
        loading.style.display = 'none';
        if (response.status == 200) {
          sentMessage.style.display = 'block';
          setTimeout(() => {
            sentMessage.style.display = 'none';
          }, 5000);
          form.reset(); // Clear the form after successful submission
        } else {
          throw new Error('Network response was not ok');
        }
      })
      .catch(error => {
        loading.style.display = 'none';
        errorMessage.textContent = 'An error occurred. Please try again later.';
        errorMessage.style.display = 'block';
  
        // Hide error message after 5 seconds
        setTimeout(() => {
          errorMessage.style.display = 'none';
        }, 5000);
      });
    });
  });
  