import React, { useState, useRef, useEffect } from 'react';
import './AiChatBubble.css';

const AiChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: "Hi there! 👋 I'm your AI shopping assistant. How can I help you today?",
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMsg = {
      id: Date.now(),
      type: 'user',
      text: inputValue.trim(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');

    // Simulate bot typing response
    setTimeout(() => {
      const botMsg = {
        id: Date.now() + 1,
        type: 'bot',
        text: "Thanks for your message! I'm still learning — full AI responses coming soon. 🚀",
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 1200);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Panel */}
      <div className={`ai-chat-panel ${isOpen ? 'ai-chat-panel--open' : ''}`}>
        {/* Header */}
        <div className="ai-chat-header">
          <div className="ai-chat-header__info">
            <div className="ai-chat-header__avatar">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z" />
                <path d="M18 10c1.1 0 2 .9 2 2v1a8 8 0 0 1-16 0v-1c0-1.1.9-2 2-2" />
                <circle cx="9" cy="7" r="0.5" fill="currentColor" />
                <circle cx="15" cy="7" r="0.5" fill="currentColor" />
                <path d="M10 16h4" />
              </svg>
            </div>
            <div>
              <h3 className="ai-chat-header__title">AI Assistant</h3>
              <span className="ai-chat-header__status">
                <span className="ai-chat-header__dot" />
                Online
              </span>
            </div>
          </div>
          <button
            className="ai-chat-header__close"
            onClick={() => setIsOpen(false)}
            aria-label="Close chat"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18" />
              <path d="M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="ai-chat-messages">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`ai-chat-msg ${msg.type === 'user' ? 'ai-chat-msg--user' : 'ai-chat-msg--bot'}`}
            >
              {msg.type === 'bot' && (
                <div className="ai-chat-msg__avatar">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z" />
                    <path d="M18 10c1.1 0 2 .9 2 2v1a8 8 0 0 1-16 0v-1c0-1.1.9-2 2-2" />
                  </svg>
                </div>
              )}
              <div className="ai-chat-msg__bubble">{msg.text}</div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="ai-chat-input">
          <input
            ref={inputRef}
            type="text"
            className="ai-chat-input__field"
            placeholder="Ask me anything..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            className="ai-chat-input__send"
            onClick={handleSend}
            disabled={!inputValue.trim()}
            aria-label="Send message"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 2L11 13" />
              <path d="M22 2L15 22L11 13L2 9L22 2Z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Floating Bubble */}
      <button
        className={`ai-chat-bubble ${isOpen ? 'ai-chat-bubble--hidden' : ''}`}
        onClick={() => setIsOpen(true)}
        aria-label="Open AI chat"
      >
        <span className="ai-chat-bubble__glow" />
        <span className="ai-chat-bubble__glow ai-chat-bubble__glow--secondary" />
        <span className="ai-chat-bubble__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            <circle cx="12" cy="12" r="1" fill="currentColor" />
            <circle cx="8" cy="12" r="1" fill="currentColor" />
            <circle cx="16" cy="12" r="1" fill="currentColor" />
          </svg>
        </span>
        <span className="ai-chat-bubble__pulse" />
      </button>
    </>
  );
};

export default AiChatBubble;
