import { AssetList } from "@/components/AssetList";
import { WalletConnect } from "@/components/WalletConnect";
import { MemeSignals } from "@/components/MemeSignals";
import TradingChatbot from "@/components/TradingChatbot";

const Index = () => {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Crypto Assets</h1>
      <WalletConnect />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        <div className="lg:col-span-3">
          <AssetList />
        </div>
        <div className="lg:col-span-1">
          <MemeSignals />
        </div>
      </div>
      <div className="mt-8">
        <TradingChatbot />
      </div>
    </div>
  );
};

export default Index;