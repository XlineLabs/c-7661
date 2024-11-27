import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";

interface Holding {
  symbol: string;
  amount: number;
  price: number;
}

export const Portfolio = () => {
  const [holdings, setHoldings] = useState<Holding[]>([]);
  const [symbol, setSymbol] = useState("");
  const [amount, setAmount] = useState("");

  const addHolding = () => {
    if (!symbol || !amount) return;
    
    setHoldings([...holdings, {
      symbol: symbol.toUpperCase(),
      amount: Number(amount),
      price: Math.random() * 1000 // Simulated price, should fetch real price
    }]);
    
    setSymbol("");
    setAmount("");
  };

  const totalValue = holdings.reduce((acc, holding) => 
    acc + (holding.amount * holding.price), 0
  );

  return (
    <Card className="brutalist-box">
      <CardHeader>
        <CardTitle>My Portfolio</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex gap-2">
            <Input
              value={symbol}
              onChange={(e) => setSymbol(e.target.value)}
              placeholder="Symbol (e.g., BTC)"
            />
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Amount"
            />
            <Button onClick={addHolding}>Add</Button>
          </div>
          
          <div className="space-y-2">
            {holdings.map((holding, index) => (
              <div key={index} className="flex justify-between p-2 bg-muted">
                <span>{holding.symbol}</span>
                <span>{holding.amount}</span>
                <span>{formatCurrency(holding.amount * holding.price)}</span>
              </div>
            ))}
          </div>
          
          <div className="text-xl font-bold">
            Total: {formatCurrency(totalValue)}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};