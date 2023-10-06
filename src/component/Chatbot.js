import React, { useState, useEffect } from 'react';
import { BsFillChatQuoteFill } from 'react-icons/bs';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [botResponses, setBotResponses] = useState([
        'Hello..! Hope You Are Good',
        'this chatbot is just for test, replies are already generated',
        'you can ask about portfolio',
        'Thanks for asking about my portfolio!',
        'I can show you my recent projects.',
        'i created Weather app, Admin Panel',
        'if you scroll my portfolio you will get links of these projects',
        'Is there any question about my portfolio?',
    ]);
    const [currentBotResponseIndex, setCurrentBotResponseIndex] = useState(0);


    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleToggleChatbot = () => {
        setIsOpen(!isOpen);
    };


    const handleSendMessage = () => {
        if (input.trim() !== '') {
            const userMessage = { text: input, user: 'user' };
            const botResponse = {
                text: botResponses[currentBotResponseIndex],
                user: 'bot',
            };
            setMessages([...messages, userMessage, botResponse]);
            setCurrentBotResponseIndex(
                (currentBotResponseIndex + 1) % botResponses.length
            );
            setInput('');
        }
    };


    useEffect(() => {
        if (!isOpen) {
            const welcomeMessage = {
                text: "Welcome to Shuja's portfolio!",
                user: 'bot',
            };
            setMessages([welcomeMessage]);
        }
    }, [isOpen]);

    console.log('msg data', messages);

    return (
        <div className="fixed bottom-0 right-0 m-4">
            {!isOpen && (
                <button
                    onClick={handleToggleChatbot}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                    <BsFillChatQuoteFill className="text-4xl animate-bounce" />
                </button>
            )}

            {isOpen && (
                <div className="bg-slate-700 text-black p-4 rounded-lg shadow-md">
                    <div className="chatbot-messages space-y-2">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`${message.user === 'user' ? 'text-right' : 'text-left'
                                    }`}
                            >
                                <span
                                    className={`${message.user === 'user'
                                            ? 'bg-blue-500 text-white'
                                            : 'bg-gray-300'
                                        } p-2 rounded-lg inline-block`}
                                >
                                    {message.text}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="chatbot-input mt-4">
                        <input
                            type="text"
                            placeholder="Type your message..."
                            value={input}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        />
                        <button
                            onClick={handleSendMessage}
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                        >
                            Send
                        </button>
                        <button
                            onClick={handleToggleChatbot}
                            className="bg-red-500 m-3 text-white px-4 py-2 rounded-lg hover:bg-red-600 ml-2"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
