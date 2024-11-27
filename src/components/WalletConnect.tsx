import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Wallet } from "lucide-react";

export const WalletConnect = () => {
  const [account, setAccount] = useState<string | null>(null);

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
        toast.success("Wallet connected successfully!");
        console.log("Wallet connected:", accounts[0]);
      } catch (error) {
        console.error("Error connecting wallet:", error);
        toast.error("Failed to connect wallet");
      }
    } else {
      toast.error("Please install MetaMask!");
      window.open("https://metamask.io/download/", "_blank");
    }
  };

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      window.ethereum.on("accountsChanged", (accounts: string[]) => {
        setAccount(accounts[0] || null);
        console.log("Account changed:", accounts[0]);
      });
    }
  }, []);

  return (
    <div className="brutalist-box p-4 mb-6">
      <Button
        onClick={connectWallet}
        className="flex items-center gap-2 w-full justify-center"
      >
        <Wallet className="w-4 h-4" />
        {account ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}` : "Connect Wallet"}
      </Button>
    </div>
  );
};