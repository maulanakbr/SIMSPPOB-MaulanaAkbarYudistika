import * as z from 'zod';

import {
  LoginPayload,
  ProfileUpdateImagePayload,
  ProfileUpdatePayload,
  RegisterPayload,
  TopUpPayload,
  TransactionPayload,
} from '@/lib';

export type BasicNavigator = Record<string, undefined>;

export type BaseHttpResponse = {
  status: number;
  message: string;
};

export type BaseSliceState = {
  isError: string;
  isLoading: boolean;
  isSuccess: boolean;
};

export type LoginPayload = z.infer<typeof LoginPayload>;
export type RegisterPayload = z.infer<typeof RegisterPayload>;
export type ProfileUpdatePayload = z.infer<typeof ProfileUpdatePayload>;
export type ProfileUpdateImagePayload = z.infer<typeof ProfileUpdateImagePayload>;
export type TopUpPayload = z.infer<typeof TopUpPayload>;
export type TransactionPayload = z.infer<typeof TransactionPayload>;

export type ProfileData = {
  email: string;
  first_name: string;
  last_name: string;
  profile_image: string;
};

export type BannerData = {
  banner_name: string;
  banner_image: string;
  description: string;
};

export type ServiceCode =
  | 'PAJAK'
  | 'PLN'
  | 'PDAM'
  | 'PULSA'
  | 'PGN'
  | 'MUSIK'
  | 'TV'
  | 'PAKET_DATA'
  | 'VOUCHER_GAME'
  | 'VOUCHER_MAKANAN'
  | 'QURBAN'
  | 'ZAKAT';

export type ServiceData = {
  service_code: ServiceCode;
  service_name: string;
  service_icon: string;
  service_tariff: string;
};

export type BalanceData = {
  balance: number;
};

export type TransactionType = 'TOPUP' | 'PAYMENT';

export type TransactionData = {
  invoice_number: string;
  transaction_type: TransactionType;
  total_amount: number;
  created_on: string;
} & Pick<ServiceData, 'service_code' | 'service_name'>;

export type TransactionHistoryData = {
  description: string;
} & Omit<TransactionData, 'service_code' | 'service_name'>;
