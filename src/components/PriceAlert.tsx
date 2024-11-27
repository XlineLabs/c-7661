import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export const PriceAlert = ({ symbol, currentPrice }: { symbol: string; currentPrice: number }) => {
  const [targetPrice, setTargetPrice] = useState("");

  const handleSetAlert = () => {
    if (!targetPrice) return;
    
    toast.success(`Alert set for ${symbol} at $${targetPrice}`);
    // In a real app, this would persist the alert
  };

  return (
    <div className="brutalist-box p-4 space-y-4">
      <h3 className="text-lg font-bold">Set Price Alert</h3>
      <div className="flex gap-2">
        <Input
          type="number"
          value={targetPrice}
          onChange={(e) => setTargetPrice(e.target.value)}
          placeholder="Target price"
        />
        <Button onClick={handleSetAlert}>Set Alert</Button>
      </div>
    </div>
  );
};