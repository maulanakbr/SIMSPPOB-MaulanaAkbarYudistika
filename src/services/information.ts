import {AxiosResponse} from 'axios';

import {instance} from '@/lib';
import type {BannerData, BaseHttpResponse, ServiceData} from '@/types';

type BannerResponse = {
  data: BannerData[] | null;
} & BaseHttpResponse;

type ServiceResponse = {
  data: ServiceData[] | null;
} & BaseHttpResponse;

export const banner = async (): Promise<AxiosResponse<BannerResponse>> => {
  const result: AxiosResponse<BannerResponse> = await instance.get('/banner');
  return result;
};

export const service = async (): Promise<AxiosResponse<ServiceResponse>> => {
  const result: AxiosResponse<ServiceResponse> = await instance.get('/services');
  return result;
};
