import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { configureChains, createClient } from "wagmi";
import { goerli, polygon, polygonMumbai } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

const { chains, provider, webSocketProvider } = configureChains(
  [polygonMumbai, polygon],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "DAO Global UI",
  chains,
});

export const client = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

export { chains };
