import React, { useState } from "react";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([
    { author: "Atendente", content: "Bom dia." },
    { author: "Atendente", content: "Como poderia ajudá-lo?" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setMessages([...messages, { author: "Você", content: newMessage }]);
      setNewMessage("");
    }
  };

  return (
    <div id="chat-container">
      <header>
        <h1 className="title">Suporte ao Cliente</h1>
      </header>
      <div id="chat-messages" className="chat-messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.author === "Você" ? "message-person" : ""}`}
          >
            <div className="author">{msg.author} diz:</div>
            <div className="message-content">{msg.content}</div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage}>
        <input
          className="text-box"
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Digite sua mensagem..."
        />
        <button className="button" type="submit">
          ENVIAR
        </button>
      </form>
    </div>
  );
}

export default App;