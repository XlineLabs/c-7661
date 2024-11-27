import { useQuery } from "@tanstack/react-query";
import { fetchTopAssets } from "@/services/api";
import { Link } from "react-router-dom";
import { formatCurrency } from "@/lib/utils";

export const AssetList = () => {
  const { data: assets, isLoading } = useQuery({
    queryKey: ["assets"],
    queryFn: fetchTopAssets,
    refetchInterval: 30000,
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className="brutalist-box h-32 relative overflow-hidden bg-muted"
          >
            <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/60 to-transparent" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {assets?.map((asset) => (
        <Link
          key={asset.id}
          to={`/asset/${asset.id}`}
          className="brutalist-box p-4"
        >
          <div className="flex justify-between items-start mb-2">
            <div>
              <h2 className="text-xl font-bold">{asset.name}</h2>
              <p className="text-sm text-muted-foreground">{asset.symbol}</p>
            </div>
            <span className="text-sm bg-accent px-2 py-1">#{asset.rank}</span>
          </div>
          <div className="mt-4">
            <p className="text-2xl font-bold">
              {formatCurrency(parseFloat(asset.priceUsd))}
            </p>
            <p
              className={`text-sm ${
                parseFloat(asset.changePercent24Hr) >= 0
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {parseFloat(asset.changePercent24Hr).toFixed(2)}%
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};