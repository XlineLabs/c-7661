import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Loader2, Send, TrendingUp, TrendingDown } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const TradingChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Simulated trading signals
  const generateSignal = () => {
    const assets = ["BTC", "ETH", "DOGE", "SHIB"];
    const asset = assets[Math.floor(Math.random() * assets.length)];
    const action = Math.random() > 0.5 ? "BUY" : "SELL";
    const price = Math.random() * 1000;
    return `${action} SIGNAL: ${asset} at $${price.toFixed(2)}`;
  };

  const simulateResponse = async (userMessage: string) => {
    setIsLoading(true);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const lowercaseMsg = userMessage.toLowerCase();
    let response = "";

    if (lowercaseMsg.includes("signal") || lowercaseMsg.includes("trade")) {
      response = generateSignal();
    } else if (lowercaseMsg.includes("strategy")) {
      response = "Consider using a combination of technical analysis and fundamental research. Always manage your risk and never invest more than you can afford to lose.";
    } else if (lowercaseMsg.includes("market")) {
      response = "The crypto market is highly volatile. It's important to stay informed about market trends and news that might affect your investments.";
    } else {
      response = "I can help you with trading strategies and market analysis. Feel free to ask about signals, strategies, or market conditions!";
    }

    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: response }
    ]);
    setIsLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    
    await simulateResponse(userMessage);
  };

  return (
    <Card className="brutalist-box w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="w-6 h-6" />
          Trading Assistant
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] overflow-y-auto mb-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] p-3 rounded ${
                  message.role === "user"
                    ? "bg-accent text-black"
                    : "bg-muted"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-muted p-3 rounded">
                <Loader2 className="w-4 h-4 animate-spin" />
              </div>
            </div>
          )}
        </div>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about trading strategies..."
            className="flex-1"
          />
          <Button type="submit" disabled={isLoading}>
            <Send className="w-4 h-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default TradingChatbot;