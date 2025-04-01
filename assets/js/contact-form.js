


// import { db } from './firebase.js';
// import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";

// // Debugging: Log Firebase initialization status
// console.log("Firebase Firestore initialized:", db ? "Success" : "Failed");

// // Additional debug: Verify Firebase config
// console.log("Current Firebase config:", {
//   projectId: db?.app?.options?.projectId,
//   databaseURL: db?.app?.options?.databaseURL
// });

// document.addEventListener('DOMContentLoaded', () => {
//   const form = document.querySelector('[data-form]');
  
//   if (!form) {
//     console.error("Contact form not found! Check your [data-form] selector");
//     return;
//   }

//   // Enable submit button once form is valid
//   const formInputs = form.querySelectorAll('[data-form-input]');
//   const submitBtn = form.querySelector('[data-form-btn]');
  
//   formInputs.forEach(input => {
//     input.addEventListener('input', () => {
//       const isFormValid = Array.from(formInputs).every(input => {
//         if (input.required) return input.value.trim() !== '';
//         return true;
//       });
//       submitBtn.disabled = !isFormValid;
//     });
//   });

//   form.addEventListener('submit', async (e) => {
//     e.preventDefault();
    
//     submitBtn.disabled = true;
//     submitBtn.innerHTML = '<span>Sending...</span>';
    
//     const formData = {
//       name: form.fullname.value.trim(),
//       email: form.email.value.trim(),
//       message: form.message.value.trim(),
//       timestamp: serverTimestamp(),
//       userAgent: navigator.userAgent,
//       host: window.location.hostname,
//       ip: await fetch('https://api.ipify.org?format=json')
//         .then(response => response.json())
//         .then(data => data.ip)
//         .catch(() => 'Unknown')
//     };

//     console.log("Form submission data:", formData);

//     try {
//       console.log("Attempting to add document to Firestore...");
//       const docRef = await addDoc(collection(db, "contacts"), formData);

//       console.log("Document written with ID: ", docRef.id);
      
//       // Show success message
//       const successMessage = document.createElement('div');
//       successMessage.className = 'form-success';
//       successMessage.textContent = 'Message sent successfully!';
//       form.parentNode.insertBefore(successMessage, form.nextSibling);
      
//       form.reset();
      
//       // Remove success message after 5 seconds
//       setTimeout(() => {
//         successMessage.remove();
//       }, 5000);
      
//     } catch (error) {
//       console.error("Full error details:", {
//         name: error.name,
//         message: error.message,
//         code: error.code,
//         stack: error.stack
//       });
      
//       let errorMessage = 'Failed to send message. Please try again.';
      
//       if (error.code === 'permission-denied') {
//         errorMessage = 'Security error. Please contact site administrator.';
//         console.error("Firestore permission error. Check your security rules.");
//       } else if (error.code === 'unavailable') {
//         errorMessage = 'Network error. Please check your connection.';
//       }
      
//       alert(errorMessage);
      
//     } finally {
//       submitBtn.disabled = false;
//       submitBtn.innerHTML = '<ion-icon name="paper-plane"></ion-icon><span>Send Message</span>';
//     }
//   });
// });

// // Add some basic styling for the success message
// const style = document.createElement('style');
// style.textContent = `
//   .form-success {
//     background-color: #FFD700;
//     color: white;
//     padding: 15px;
//     margin-top: 20px;
//     border-radius: 4px;
//     text-align: center;
//     animation: fadeIn 0.5s;
//   }
  
//   @keyframes fadeIn {
//     from { opacity: 0; }
//     to { opacity: 1; }
//   }
// `;
// document.head.appendChild(style);





// contact-form.js
import { db } from './firebase.js';
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";

// Initialize contact form functionality
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('[data-form]');
  if (!form) {
    console.error("Contact form not found!");
    return;
  }

  const formInputs = form.querySelectorAll('[data-form-input]');
  const submitBtn = form.querySelector('[data-form-btn]');
  
  // Real-time form validation
  const validateForm = () => {
    let isValid = true;
    formInputs.forEach(input => {
      if (input.required && !input.value.trim()) isValid = false;
    });
    submitBtn.disabled = !isValid;
  };

  // Add input event listeners
  formInputs.forEach(input => {
    input.addEventListener('input', validateForm);
    input.addEventListener('blur', () => {
      if (input.required && !input.value.trim()) {
        input.style.borderColor = 'var(--bittersweet-shimmer)';
      } else {
        input.style.borderColor = 'var(--jet)';
      }
    });
  });

  // Form submission handler
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Disable button and show loading state
    submitBtn.disabled = true;
    const originalBtnContent = submitBtn.innerHTML;
    submitBtn.innerHTML = `
      <span class="spinner"></span>
      <span>Sending...</span>
    `;
    
    try {
      // Prepare form data
      const formData = {
        name: form.fullname.value.trim(),
        email: form.email.value.trim(),
        message: form.message.value.trim(),
        timestamp: serverTimestamp(),
        source: 'Portfolio Contact Form'
      };

      // Add to Firestore
      await addDoc(collection(db, "contacts"), formData);
      
      // Show success message
      showToast('Message sent successfully!', 'success');
      form.reset();
      
    } catch (error) {
      console.error("Error submitting form:", error);
      let errorMessage = 'Failed to send message. Please try again.';
      
      if (error.code === 'permission-denied') {
        errorMessage = 'Security error. Please contact me directly.';
      } else if (error.code === 'unavailable') {
        errorMessage = 'Network error. Please check your connection.';
      }
      
      showToast(errorMessage, 'error');
      
    } finally {
      // Reset button state
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnContent;
      validateForm();
    }
  });

  // Toast notification function
  function showToast(message, type) {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    // Auto-remove after delay
    setTimeout(() => {
      toast.classList.add('fade-out');
      setTimeout(() => toast.remove(), 300);
    }, 5000);
  }
});

// Add dynamic styles for form elements
const style = document.createElement('style');
style.textContent = ``;
document.head.appendChild(style);