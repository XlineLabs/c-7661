import { useQuery } from "@tanstack/react-query";
import { fetchTopAssets } from "@/services/api";
import { Link } from "react-router-dom";
import { formatCurrency } from "@/lib/utils";
import { motion } from "framer-motion";

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
            className="ios-card h-32 relative overflow-hidden"
          >
            <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/60 to-transparent" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {assets?.map((asset, index) => (
        <motion.div
          key={asset.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Link
            to={`/asset/${asset.id}`}
            className="ios-card p-6 block hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h2 className="text-xl font-semibold">{asset.name}</h2>
                <p className="text-sm text-black/60">{asset.symbol}</p>
              </div>
              <span className="text-sm bg-accent/10 text-accent px-3 py-1 rounded-full">
                #{asset.rank}
              </span>
            </div>
            <div className="mt-4">
              <p className="text-2xl font-semibold">
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
        </motion.div>
      ))}
    </div>
  );
};