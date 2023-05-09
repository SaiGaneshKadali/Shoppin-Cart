import React, { useState } from 'react';
import './Register.css';

function ContactUsPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubjectChange = (event) => {
        setSubject(event.target.value);
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your contact form submission logic here
        console.log(name, email, subject, message);
    };

    return (
        <div className="contact-us">
            <h1 style={{'color':"#4313e3"}}>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" className="form-input" value={name} onChange={handleNameChange} required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email"  className="form-input" value={email} onChange={handleEmailChange} required />
                </div>
                <div>
                    <label htmlFor="subject">Subject:</label>
                    <input type="text" id="subject" className="form-input" value={subject} onChange={handleSubjectChange} required />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" value={message} className="form-input" onChange={handleMessageChange} required></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default ContactUsPage;
