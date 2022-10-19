import { ChainIdToAddress, Network } from "../utils";

export const Exchange: ChainIdToAddress = {
  [Network.Ethereum]: "0x9757f2d2b135150bbeb65308d4a91804107cd8d6",
  [Network.EthereumRinkeby]: "0xd4a57a3bd3657d0d46b4c5bac12b3f156b9b886b",
};

export const TransferProxy: ChainIdToAddress = {
  [Network.Ethereum]: "0x4fee7b061c97c9c496b01dbce9cdb10c02f0a0be",
};
