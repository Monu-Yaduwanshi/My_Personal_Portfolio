import { db } from './firebase.js';
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('[data-form]');
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = form.querySelector('[data-form-btn]');
    submitBtn.disabled = true;
    
    try {
      await addDoc(collection(db, "contacts"), {
        name: form.fullname.value,
        email: form.email.value,
        message: form.message.value,
        timestamp: serverTimestamp()
      });
      
      alert('Message sent successfully!');
      form.reset();
    } catch (error) {
      console.error("Error sending message:", error);
      alert('Error sending message. Please try again.');
    } finally {
      submitBtn.disabled = false;
    }
  });
});