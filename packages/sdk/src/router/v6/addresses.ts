import { ChainIdToAddress, Network } from "../../utils";

export const Router: ChainIdToAddress = {
  [Network.Ethereum]: "0x178a86d36d89c7fdebea90b739605da7b131ff6a", // V6_0_0
  [Network.EthereumGoerli]: "0xb35d22a4553ab9d2b85e2a606cbae55f844df50c", // V6_0_0
  [Network.Polygon]: "0x819327e005a3ed85f7b634e195b8f25d4a2a45f8", // V6_0_0
  [Network.Optimism]: "0xc0f489a34672d5b960a19279d99d77e94221d0c9", // V6_0_0
};

// Utility modules

export const BalanceAssertModule: ChainIdToAddress = {};

export const WETHModule: ChainIdToAddress = {
  [Network.Ethereum]: "0xe2537569b2f5c320db0c5b2510728d8de0da28e0",
  [Network.EthereumGoerli]: "0x5282b9af3f38d4a5d1bb707f5d3acbd951950074",
};

// Exchange modules

export const BlurModule: ChainIdToAddress = {
  [Network.Ethereum]: "0xb1096516fc33bb64a77158b10f155846e74bd7fa",
};

export const FoundationModule: ChainIdToAddress = {
  [Network.Ethereum]: "0x5c8a351d4ff680203e05af56cb9d748898c7b39a",
};

export const LooksRareModule: ChainIdToAddress = {
  [Network.Ethereum]: "0x385df8cbc196f5f780367f3cdc96af072a916f7e",
  [Network.EthereumGoerli]: "0x532486bb46581b032134159c1d31962cdab1e6a7",
};

export const SeaportModule: ChainIdToAddress = {
  [Network.Ethereum]: "0x3729014ef28f01b3ddcf7f980d925e0b71b1f847",
  [Network.EthereumGoerli]: "0x6c460f133c573c21e7f55900d0c68f6f085b91e7",
  [Network.Polygon]: "0xb75dfff7da2a0c8e6bb235b80d28f997152d06fc",
  [Network.Optimism]: "0x8e6ee42575cd6e3680d29cbeae5032c33d668032",
};

export const SudoswapModule: ChainIdToAddress = {
  [Network.Ethereum]: "0x79abbfdf20fc6dd0c51693bf9a481f7351a70fd2",
};

export const UniswapV3Module: ChainIdToAddress = {
  [Network.Ethereum]: "0xe5ee6a6e8d57d1d315d1898c68ea1bc487b6ea92",
  [Network.EthereumGoerli]: "0x6748fce2eabad140b36dc7300ad2eb31631410be",
};

export const X2Y2Module: ChainIdToAddress = {
  [Network.Ethereum]: "0x613d3c588f6b8f89302b463f8f19f7241b2857e2",
  [Network.EthereumGoerli]: "0x6a789513b2e555f9d3539bf9a053a57d2bfca426",
};

export const ZeroExV4Module: ChainIdToAddress = {
  [Network.Ethereum]: "0x8162beec776442afd262b672730bb5d0d8af16a1",
  [Network.EthereumGoerli]: "0x29fcac61d9b2a3c55f3e1149d0278126c31abe74",
};

export const ZoraModule: ChainIdToAddress = {
  [Network.Ethereum]: "0x982b49de82a3ea5b8c42895482d9dd9bfefadf82",
};

export const ElementModule: ChainIdToAddress = {
  [Network.Ethereum]: "",
};
