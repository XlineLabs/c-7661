import { useQuery } from "@tanstack/react-query";
import { ArrowUp, ArrowDown, Sparkles } from "lucide-react";

interface MemeSignal {
  symbol: string;
  signal: "buy" | "sell" | "hold";
  confidence: number;
  volume24h: number;
}

const mockSignals: MemeSignal[] = [
  { symbol: "DOGE", signal: "buy", confidence: 85, volume24h: 1234567 },
  { symbol: "SHIB", signal: "hold", confidence: 65, volume24h: 987654 },
  { symbol: "PEPE", signal: "sell", confidence: 75, volume24h: 456789 },
];

const fetchMemeSignals = async (): Promise<MemeSignal[]> => {
  // Simulated API call - replace with actual API endpoint
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockSignals), 1000);
  });
};

export const MemeSignals = () => {
  const { data: signals, isLoading } = useQuery({
    queryKey: ["memeSignals"],
    queryFn: fetchMemeSignals,
    refetchInterval: 60000, // Refresh every minute
  });

  if (isLoading) {
    return (
      <div className="brutalist-box p-4 animate-pulse">
        <h2 className="text-xl font-bold mb-4">Loading signals...</h2>
      </div>
    );
  }

  return (
    <div className="brutalist-box p-4">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="w-5 h-5" />
        <h2 className="text-xl font-bold">Meme Coin Signals</h2>
      </div>
      <div className="space-y-4">
        {signals?.map((signal) => (
          <div
            key={signal.symbol}
            className="flex items-center justify-between p-3 bg-muted rounded"
          >
            <div>
              <h3 className="font-bold">{signal.symbol}</h3>
              <p className="text-sm text-muted-foreground">
                24h Vol: ${signal.volume24h.toLocaleString()}
              </p>
            </div>
            <div className="flex items-center gap-2">
              {signal.signal === "buy" && (
                <ArrowUp className="w-5 h-5 text-green-600" />
              )}
              {signal.signal === "sell" && (
                <ArrowDown className="w-5 h-5 text-red-600" />
              )}
              <span
                className={`font-bold ${
                  signal.signal === "buy"
                    ? "text-green-600"
                    : signal.signal === "sell"
                    ? "text-red-600"
                    : "text-yellow-600"
                }`}
              >
                {signal.confidence}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};