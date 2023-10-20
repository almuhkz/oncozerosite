// components/ChatInput.js
import React, { useRef } from 'react';

function ChatInput() {
    const fileInputRef = useRef(null);

    const handleFileUpload = async (event) => {
        const files = event.target.files;
        // Handle file upload and text extraction here
    };

    return (
        <div className="chat-input">
            <input type="file" ref={fileInputRef} multiple accept=".pdf" onChange={handleFileUpload} style={{ display: 'none' }} />
            <button onClick={() => fileInputRef.current.click()}>Upload</button>
            <button>Send Message</button>
        </div>
    );
}

export default ChatInput;
