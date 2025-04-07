import React from 'react';

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ChatBox() {
  const [messages, setMessages] = useState([
    { role: "bot", text: "你好，我是你的AI助手" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", text: input };
    setMessages([...messages, userMsg]);

    // 模拟AI回复
    setTimeout(() => {
      const botMsg = {
        role: "bot",
        text: `我收到你的消息：“${input}”`
      };
      setMessages(prev => [...prev, botMsg]);
    }, 500);

    setInput("");
  };

  return (
    <Card className="p-4 w-full max-w-xl mx-auto mt-10 space-y-4">
      <div className="h-80 overflow-y-auto flex flex-col gap-2">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-2 rounded-lg ${
              msg.role === "user" ? "bg-blue-100 self-end" : "bg-gray-200 self-start"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <Input
          placeholder="输入内容..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <Button onClick={sendMessage}>发送</Button>
      </div>
    </Card>
  );
}