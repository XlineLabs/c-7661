import { AssetList } from "@/components/AssetList";
import { WalletConnect } from "@/components/WalletConnect";
import { MemeSignals } from "@/components/MemeSignals";
import TradingChatbot from "@/components/TradingChatbot";
import { Portfolio } from "@/components/Portfolio";
import { PriceAlert } from "@/components/PriceAlert";
import { NewsSection } from "@/components/NewsSection";
import { Watchlist } from "@/components/Watchlist";

const Index = () => {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Crypto Dashboard</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <WalletConnect />
        </div>
        <div>
          <Portfolio />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        <div className="lg:col-span-3">
          <AssetList />
        </div>
        <div className="space-y-6">
          <Watchlist />
          <MemeSignals />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <TradingChatbot />
        </div>
        <div>
          <NewsSection />
        </div>
      </div>
    </div>
  );
};

export default Index;