import React from "react";
import './contact.css'

function Contact(props) {
  console.log("About:", props);


  return (
    <div>
      <div className="container-div">
        <h3>Leave Us A Message</h3>
        <input type="text" placeholder="Your Name"/>
        <input type="email" placeholder="Your Email Addres"/>
        <textarea placeholder="Your Message" col="20" row="30"/>
        <button type="submit">SUBMIT</button>
      </div>
    </div>
  );
}

export default Contact;
