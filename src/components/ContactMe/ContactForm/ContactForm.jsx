import React, { useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ContactForm.css";

function ContactForm() {
  const formRef = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();

    // check email
    const emailField = event.target.querySelector('input[name="email"]');
    const email = emailField.value.trim();
    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.", {
        position: "bottom-right",
        theme: "colored",
      });
      return;
    }

    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "access key");

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Success Notification !", {
          position: "bottom-right",
        });
        formRef.current.reset();
      } else {
        toast.error("Failed to send message", {
          position: "bottom-right",
          theme: "colored",
        });
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  // check email funk
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  return (
    <div className="contact-form-content">
      <form ref={formRef} onSubmit={onSubmit}>
        <div className="name-container">
          <input type="text" name="firstname" placeholder="Name" required />
        </div>
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="message" placeholder="Message" rows={3} required />
        <button type="submit">Send</button>
      </form>
      <ToastContainer
        draggablePercent={60}
        autoClose={3000}
        className="modal-toast"
        limit={3}
      />
    </div>
  );
}

export default ContactForm;
