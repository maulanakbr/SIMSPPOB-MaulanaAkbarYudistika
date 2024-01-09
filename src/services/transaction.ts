import {AxiosResponse} from 'axios';

import {instance} from '@/lib';
import type {BalanceData, BannerData, BaseHttpResponse, ServiceData, TopUpPayload} from '@/types';

type BalanceResponse = {
  data: BalanceData | null;
} & BaseHttpResponse;

export const balance = async (): Promise<AxiosResponse<BalanceResponse>> => {
  const result: AxiosResponse<BalanceResponse> = await instance.get('/balance');
  return result;
};

export const topup = async (payload: TopUpPayload): Promise<AxiosResponse<BalanceResponse>> => {
  const result: AxiosResponse<BalanceResponse> = await instance.post('/topup', payload);
  return result;
};
