import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Newspaper } from "lucide-react";

const mockNews = [
  {
    id: 1,
    title: "Bitcoin Reaches New Heights",
    source: "CryptoNews",
    time: "2 hours ago"
  },
  {
    id: 2,
    title: "Ethereum 2.0 Update Progress",
    source: "BlockchainDaily",
    time: "4 hours ago"
  },
  {
    id: 3,
    title: "New Meme Coin Takes Market By Storm",
    source: "CoinWatch",
    time: "6 hours ago"
  }
];

export const NewsSection = () => {
  return (
    <Card className="brutalist-box">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Newspaper className="w-6 h-6" />
          Latest News
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockNews.map((news) => (
            <div key={news.id} className="p-4 bg-muted hover:bg-accent transition-colors cursor-pointer">
              <h3 className="font-bold">{news.title}</h3>
              <div className="text-sm text-muted-foreground">
                {news.source} • {news.time}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};