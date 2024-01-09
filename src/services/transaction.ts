import {AxiosResponse} from 'axios';

import {instance} from '@/lib';
import type {
  BalanceData,
  BaseHttpResponse,
  TopUpPayload,
  TransactionData,
  TransactionHistoryData,
  TransactionPayload,
} from '@/types';

type BalanceResponse = {
  data: BalanceData | null;
} & BaseHttpResponse;

type TransactionResponse = {
  data: TransactionData | null;
} & BaseHttpResponse;

type TransactionHistoryResponse = {
  data: {
    offset: number;
    limit: number;
    records: TransactionHistoryData[];
  } | null;
} & BaseHttpResponse;

export type TransactionHistoryParams = {
  offset: number;
  limit: number;
};

export const balance = async (): Promise<AxiosResponse<BalanceResponse>> => {
  const result: AxiosResponse<BalanceResponse> = await instance.get('/balance');
  return result;
};

export const topUp = async (payload: TopUpPayload): Promise<AxiosResponse<BalanceResponse>> => {
  const result: AxiosResponse<BalanceResponse> = await instance.post('/topup', payload);
  return result;
};

export const transaction = async (
  payload: TransactionPayload,
): Promise<AxiosResponse<TransactionResponse>> => {
  const result: AxiosResponse<TransactionResponse> = await instance.post('/transaction', payload);
  return result;
};

export const transactionHistory = async (
  params: TransactionHistoryParams,
): Promise<AxiosResponse<TransactionHistoryResponse>> => {
  const result: AxiosResponse<TransactionHistoryResponse> = await instance.get(
    `/transaction/history${params}`,
  );

  return result;
};
