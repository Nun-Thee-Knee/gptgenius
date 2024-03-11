'use client'
import { generateChatResponse } from '@/utils/action';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';

const Chat = () => {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  const { mutate: createMessage } = useMutation({
    mutationFn: (message) => generateChatResponse(message),
    
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createMessage(text); // Use createMessage instead of mutate
    setText(""); // Clear the input after submission if needed
  };

  return (
    <div className="min-h-[calc(100vh-6rem)] grid grid-rows-[1fr,auto]">
      <div>
        <h2 className="text-5xl">Messages</h2>
        {/* Render your messages here */}
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="max-w-4xl pt-12">
        <div className="join w-full">
          <input
            type="text"
            placeholder="Message GeniusGPT"
            className="input input-bordered join-item w-full"
            value={text}
            required
            onChange={(e) => setText(e.target.value)}
          />
          <button className="btn btn-primary join-item" type="submit">
            Ask Question
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;
