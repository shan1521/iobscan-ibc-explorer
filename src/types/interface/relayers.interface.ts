import { RelayersListKey } from '@/constants/relayers';
import { IRequestPagination, IResponsePageInfo } from '@/types/interface/index.interface';
import { Ref } from 'vue';
export type TTxsSuccessRate = string | number | undefined;

export interface IRequestRelayerList extends IRequestPagination {
    relayer_name?: string;
    relayer_address?: string;
    loading?: Ref<boolean>;
}

export interface ServedChainsInfo {
    chain: string;
    addresses: string[];
}

export interface IResponseRelayerListItem {
    relayer_name: string;
    relayer_id: string;
    relayer_icon: string;
    served_chains: number;
    served_chains_info: ServedChainsInfo[];
    update_time: number;
    relayed_total_txs: number;
    relayed_success_txs: number;
    relayed_total_txs_value: string;
    total_fee_value: string;
}

export interface IResponseRelayerList {
    items: IResponseRelayerListItem[];
    page_info: IResponsePageInfo;
}

export interface chainPopoverProp {
    chain: string;
    chainName: string;
    chainLogo: string;
    address: string[];
}
export interface RelayerListItem {
    [RelayersListKey.relayersRelayerName]: string;
    [RelayersListKey.relayersServedChains]: number;
    [RelayersListKey.relayersSuccessRate]: number;
    [RelayersListKey.relayersIbcTransferTxs]: number;
    [RelayersListKey.relayersTotalRelayedValue]: string;
    [RelayersListKey.relayersTotalFeeCost]: string;
    [RelayersListKey.relayersLastUpdated]: number;
    relayer_id: string;
    relayer_icon: string;
    served_chains_infos: chainPopoverProp[];
}
