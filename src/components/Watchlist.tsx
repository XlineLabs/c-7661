import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Watchlist = () => {
  const [watchlist, setWatchlist] = useState<string[]>([]);
  const [newSymbol, setNewSymbol] = useState("");

  const addToWatchlist = () => {
    if (!newSymbol) return;
    setWatchlist([...watchlist, newSymbol.toUpperCase()]);
    setNewSymbol("");
  };

  return (
    <Card className="brutalist-box">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Star className="w-6 h-6" />
          Watchlist
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 mb-4">
          <Input
            value={newSymbol}
            onChange={(e) => setNewSymbol(e.target.value)}
            placeholder="Add symbol (e.g., BTC)"
          />
          <Button onClick={addToWatchlist}>
            <Plus className="w-4 h-4" />
          </Button>
        </div>
        <div className="space-y-2">
          {watchlist.map((symbol, index) => (
            <div key={index} className="p-2 bg-muted flex justify-between items-center">
              <span>{symbol}</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setWatchlist(watchlist.filter((_, i) => i !== index))}
              >
                Remove
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};