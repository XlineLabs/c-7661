import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchAssetHistory, fetchTopAssets } from "@/services/api";
import { formatCurrency } from "@/lib/utils";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const AssetDetail = () => {
  const { id } = useParams<{ id: string }>();

  const { data: assets } = useQuery({
    queryKey: ["assets"],
    queryFn: fetchTopAssets,
  });

  const { data: history } = useQuery({
    queryKey: ["assetHistory", id],
    queryFn: () => fetchAssetHistory(id!),
    enabled: !!id,
  });

  const asset = assets?.find((a) => a.id === id);

  if (!asset) {
    return (
      <div className="brutalist-box p-8">
        <h1 className="text-2xl font-bold">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Link to="/" className="inline-flex items-center hover:text-accent">
        <ArrowLeft className="mr-2" />
        Back to list
      </Link>

      <div className="brutalist-box p-8">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl font-bold">{asset.name}</h1>
            <p className="text-xl text-muted-foreground">{asset.symbol}</p>
          </div>
          <span className="text-lg bg-accent px-3 py-1">#{asset.rank}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-4xl font-bold mb-2">
              {formatCurrency(parseFloat(asset.priceUsd))}
            </p>
            <p
              className={`text-xl ${
                parseFloat(asset.changePercent24Hr) >= 0
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {parseFloat(asset.changePercent24Hr).toFixed(2)}%
            </p>
          </div>

          <div className="space-y-2">
            <p>
              <span className="text-muted-foreground">Market Cap:</span>{" "}
              {formatCurrency(parseFloat(asset.marketCapUsd))}
            </p>
            <p>
              <span className="text-muted-foreground">Volume (24h):</span>{" "}
              {formatCurrency(parseFloat(asset.volumeUsd24Hr))}
            </p>
            <p>
              <span className="text-muted-foreground">Supply:</span>{" "}
              {parseInt(asset.supply).toLocaleString()} {asset.symbol}
            </p>
          </div>
        </div>
      </div>

      {history && (
        <div className="brutalist-box p-8">
          <h2 className="text-2xl font-bold mb-4">Price History (24h)</h2>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={history}>
                <XAxis
                  dataKey="time"
                  tickFormatter={(time) =>
                    new Date(time).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                  }
                />
                <YAxis
                  domain={["auto", "auto"]}
                  tickFormatter={(value) => formatCurrency(value)}
                />
                <Tooltip
                  formatter={(value: number) => [
                    formatCurrency(value),
                    "Price",
                  ]}
                  labelFormatter={(label) =>
                    new Date(label).toLocaleString()
                  }
                />
                <Line
                  type="monotone"
                  dataKey="priceUsd"
                  stroke="#000"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  );
};