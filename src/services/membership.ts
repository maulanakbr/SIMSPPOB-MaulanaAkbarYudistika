import {AxiosResponse} from 'axios';

import {instance} from '@/lib';
import type {
  BaseHttpResponse,
  LoginPayload,
  ProfileData,
  ProfileUpdateImagePayload,
  ProfileUpdatePayload,
  RegisterPayload,
} from '@/types';

type LoginResponse = {
  data: {
    token: string;
  } | null;
} & BaseHttpResponse;

export type RegisterResponse = {
  data: null;
} & BaseHttpResponse;

export type ProfileResponse = {
  data: ProfileData | null;
} & BaseHttpResponse;

export const login = async (payload: LoginPayload): Promise<AxiosResponse<LoginResponse>> => {
  const result: AxiosResponse<LoginResponse> = await instance.post('/login', payload);
  return result;
};
export const register = async (
  payload: Omit<RegisterPayload, 'confirmPassword'>,
): Promise<AxiosResponse<RegisterResponse>> => {
  const result: AxiosResponse<RegisterResponse> = await instance.post('/registration', payload);
  return result;
};

export const profile = async (): Promise<AxiosResponse<ProfileResponse>> => {
  const result: AxiosResponse<ProfileResponse> = await instance.get('/profile');
  return result;
};

export const profileUpdate = async (
  payload: ProfileUpdatePayload,
): Promise<AxiosResponse<ProfileResponse>> => {
  const result: AxiosResponse<ProfileResponse> = await instance.patch('/profile/update', payload);
  return result;
};

export const profileUpdateImage = async (
  payload: ProfileUpdateImagePayload,
): Promise<AxiosResponse<ProfileResponse>> => {
  const result: AxiosResponse<ProfileResponse> = await instance.patch('/profile/image', payload);
  return result;
};
