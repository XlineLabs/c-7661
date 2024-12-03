import { AssetList } from "@/components/AssetList";
import { WalletConnect } from "@/components/WalletConnect";
import { Portfolio } from "@/components/Portfolio";
import { PriceAlert } from "@/components/PriceAlert";
import { NewsSection } from "@/components/NewsSection";
import { Watchlist } from "@/components/Watchlist";
import TradingChatbot from "@/components/TradingChatbot";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <motion.div 
        className="container max-w-7xl mx-auto space-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 
          className="text-4xl font-bold gradient-text mb-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Crypto Dashboard
        </motion.h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div 
            className="lg:col-span-2 glass-card p-6"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <WalletConnect />
          </motion.div>
          <motion.div
            className="glass-card p-6"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Portfolio />
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-4 gap-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="lg:col-span-3">
            <AssetList />
          </div>
          <div className="space-y-6">
            <div className="glass-card p-6">
              <Watchlist />
            </div>
            <div className="glass-card p-6">
              <PriceAlert symbol="BTC" currentPrice={50000} />
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 glass-card p-6">
            <TradingChatbot />
          </div>
          <div className="glass-card p-6">
            <NewsSection />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Index;