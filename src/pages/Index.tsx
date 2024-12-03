import { AssetList } from "@/components/AssetList";
import { WalletConnect } from "@/components/WalletConnect";
import { MemeSignals } from "@/components/MemeSignals";
import TradingChatbot from "@/components/TradingChatbot";
import { Portfolio } from "@/components/Portfolio";
import { PriceAlert } from "@/components/PriceAlert";
import { NewsSection } from "@/components/NewsSection";
import { Watchlist } from "@/components/Watchlist";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="container py-8 space-y-8">
      <motion.h1 
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Crypto Dashboard
      </motion.h1>
      
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="lg:col-span-2">
          <WalletConnect />
        </div>
        <div className="animate-fade-in">
          <Portfolio />
        </div>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="lg:col-span-3">
          <AssetList />
        </div>
        <div className="space-y-6">
          <div className="animate-slide-in">
            <Watchlist />
          </div>
          <div className="animate-slide-in" style={{ animationDelay: "0.2s" }}>
            <MemeSignals />
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <div className="lg:col-span-2">
          <TradingChatbot />
        </div>
        <div className="space-y-6">
          <div className="animate-fade-in">
            <NewsSection />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <PriceAlert symbol="BTC" currentPrice={50000} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Index;