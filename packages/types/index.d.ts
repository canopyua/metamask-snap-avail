import { SignerPayloadJSON, SignerPayloadRaw } from '@polkadot/types/types';

export interface GetPublicKeyRequest{
  method: "getPublicKey";
}

export interface GetAddressRequest {
  method: "getAddress";
}

export interface ExportSeedRequest {
  method: "exportSeed";
}

export interface GetTransactionsRequest {
  method: "getAllTransactions";
  params: {
    address?: string;
  };
}

export interface GetBlockRequest {
  method: "getBlock";
  params: {
    blockTag?: BlockId;
  };
}

export interface GetBalanceRequest {
  method: "getBalance";
}


export interface ConfigureSnapRequest {
  method: "configure";
  params: {
    configuration: SnapConfig;
  };
}

export interface AddPolkadotAssetRequest {
  method: "addPolkadotAsset";
}

export interface RemovePolkadotAssetRequest {
  method: "removePolkadotAsset";
}

export interface GetChainHeadRequest {
  method: "getChainHead";
}

export interface SignPayloadJSONRequest {
  method: "signPayloadJSON";
  params: {
    payload: SignerPayloadJSON;
  };
}

export interface SignPayloadRawRequest {
  method: "signPayloadRaw";
  params: {
    payload: SignerPayloadRaw;
  };
}

export interface SendUnitRequest {
  method: "sendUnit";
  params: {
    amount: string|number;
    to: string;
  };
}

export type MetamaskPolkadotRpcRequest =
    GetPublicKeyRequest
    | GetAddressRequest
    | ExportSeedRequest
    | GetTransactionsRequest
    | GetBlockRequest
    | GetBalanceRequest
    | ConfigureSnapRequest
    | AddPolkadotAssetRequest
    | RemovePolkadotAssetRequest
    | GetChainHeadRequest
    | SignPayloadJSONRequest
    | SignPayloadRawRequest
    | SendUnitRequest;

type Method = MetamaskPolkadotRpcRequest["method"];

export interface WalletEnableRequest {
  method: "wallet_enable";
  params: object[];
}

export interface GetPluginsRequest {
  method: "wallet_getPlugins";
}

export interface SnapRpcMethodRequest {
  method: string;
  params: [MetamaskPolkadotRpcRequest];
}

export type MetamaskRpcRequest = WalletEnableRequest | GetPluginsRequest | SnapRpcMethodRequest;

export type BlockId = number|string|"latest";

export interface BlockInfo {
  hash: string;
  number: string;
}

export interface UnitConfiguration {
  symbol: string;
  decimals: number;
  assetId: string;
  image?: string;
  customViewUrl?: string;
}

export interface SnapConfig {
  networkName: string;
  wsRpcUrl?: string;
  addressPrefix?: number;
  unit?: UnitConfiguration;
}

// Polkadot types

export type EventCallback = (...args: unknown[]) => void;

export type PolkadotEvent = "onBalanceChange"|"onTransactionStatus";

export type TransactionEventStatus = "finalized" | "inBlock";

export type Origin = string;

export type HexHash = string;

export interface PolkadotApi {
  subscribeToBalance(callback: EventCallback): void;
  unsubscribeFromBalance(callback: EventCallback): void;
  unsubscribeAllFromBalance(): void;

  onTxFinalized(callback: EventCallback, hash: HexHash): void;
  onTxInBlock(callback: EventCallback, hash: HexHash): void;
}