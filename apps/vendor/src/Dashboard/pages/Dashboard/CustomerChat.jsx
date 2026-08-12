import React, { useState } from 'react';
import PageMeta from "../../components/common/PageMeta";

// Dummy data for customers and their chats
const CUSTOMERS = [
  {
    id: 1,
    name: "Alex Johnson",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150&h=150",
    messages: [
      { sender: "customer", text: "Hi, I have a question about the Wireless Headphones.", time: "10:30 AM" },
      { sender: "vendor", text: "Hello Alex! How can I help you today?", time: "10:32 AM" },
      { sender: "customer", text: "Do they come with a warranty?", time: "10:35 AM" },
    ]
  },
  {
    id: 2,
    name: "Sarah Williams",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    messages: [
      { sender: "customer", text: "Are the Smart Watches still in stock?", time: "09:15 AM" },
    ]
  },
  {
    id: 3,
    name: "Michael Brown",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=150&h=150",
    messages: [
      { sender: "customer", text: "I received my order, thank you! The quality is amazing.", time: "Yesterday" },
      { sender: "vendor", text: "That's great to hear, Michael! Enjoy your new keyboard.", time: "Yesterday" },
    ]
  },
  {
    id: 4,
    name: "Emily Davis",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    messages: [
      { sender: "customer", text: "Can I get a discount if I buy 5 Web Cameras?", time: "2 Days ago" },
    ]
  }
];

export default function CustomerChat() {
  const [activeChat, setActiveChat] = useState(CUSTOMERS[0]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    
    // In a real app, this would update state or make an API call
    console.log(`Sending message to ${activeChat.name}: ${newMessage}`);
    setNewMessage("");
  };

  return (
    <>
      <PageMeta title="Vendor Dashboard - Customer Chats" description="Chat with your customers" />
      
      <div className="flex flex-col gap-6 h-[calc(100vh-90px)] min-h-[850px]">
        {/* Top Section: Customer Cards */}
        <div className="flex-shrink-0">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white/90 mb-4">
            Recent Messages
          </h2>
          <div className="flex gap-4 overflow-x-auto pt-2 pb-4 px-1 custom-scrollbar">
            {CUSTOMERS.map((customer) => (
              <div 
                key={customer.id}
                onClick={() => setActiveChat(customer)}
                className={`flex flex-col items-center justify-center p-4 min-w-[160px] cursor-pointer rounded-2xl border transition-all duration-300
                  ${activeChat.id === customer.id 
                    ? 'border-brand-500 bg-brand-50/50 shadow-sm dark:bg-brand-500/10 dark:border-brand-500' 
                    : 'border-gray-200 bg-white hover:-translate-y-1 hover:border-brand-300 hover:shadow-theme-sm dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700'
                  }`}
              >
                <div className="relative mb-3">
                  <img src={customer.avatar} alt={customer.name} className="w-14 h-14 rounded-full object-cover border-2 border-white dark:border-gray-800 shadow-sm" />
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-success-500 border-2 border-white dark:border-gray-800 rounded-full"></span>
                </div>
                <p className="text-center text-xs font-medium text-gray-500 dark:text-gray-400">
                  New Message from
                </p>
                <h4 className="text-sm font-semibold text-gray-800 dark:text-white/90 text-center truncate w-full mt-0.5">
                  {customer.name}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section: Chat Area */}
        <div className="flex-1 flex flex-col rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900 overflow-hidden shadow-theme-sm">
          {/* Chat Header */}
          <div className="flex items-center gap-4 px-6 py-4 border-b border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-white/[0.02]">
            <img src={activeChat.avatar} alt={activeChat.name} className="w-10 h-10 rounded-full object-cover" />
            <div>
              <h3 className="text-base font-semibold text-gray-800 dark:text-white/90">
                {activeChat.name}
              </h3>
              <p className="text-xs text-success-500 font-medium">Online</p>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 custom-scrollbar bg-gray-50/30 dark:bg-transparent">
            {activeChat.messages.map((msg, index) => (
              <div 
                key={index} 
                className={`flex w-full ${msg.sender === 'vendor' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex flex-col max-w-[85%] sm:max-w-[60%] ${msg.sender === 'vendor' ? 'items-end' : 'items-start'}`}>
                  <div 
                    className={`px-5 py-3 rounded-2xl shadow-sm ${
                      msg.sender === 'vendor' 
                        ? 'bg-brand-500 text-white rounded-br-none' 
                        : 'bg-white border border-gray-200 text-gray-800 dark:bg-gray-800 dark:border-gray-700 dark:text-white/90 rounded-bl-none'
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                  </div>
                  <span className="text-[11px] text-gray-400 mt-1.5 px-1">{msg.time}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="p-4 sm:p-5 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <form onSubmit={handleSendMessage} className="flex items-center gap-3">
              <input 
                type="text" 
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message here..." 
                className="flex-1 h-12 rounded-full border border-gray-200 bg-gray-50 px-5 text-sm text-gray-800 outline-none focus:border-brand-500 focus:bg-white focus:ring-1 focus:ring-brand-500 dark:border-gray-800 dark:bg-gray-800 dark:text-white/90 dark:focus:border-brand-500 dark:focus:bg-gray-900"
              />
              <button 
                type="submit"
                disabled={!newMessage.trim()}
                className="flex items-center justify-center h-12 w-12 rounded-full bg-brand-500 text-white shadow-sm hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shrink-0"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
