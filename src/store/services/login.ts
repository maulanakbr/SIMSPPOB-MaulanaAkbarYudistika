// import {BASE_URL} from '@env';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

type LoginResponse = {
  status: string;
  message: string;
  data: {
    token: string;
  };
};

export type LoginPayload = {
  email: string;
  password: string;
};

export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://take-home-test-api.nutech-integrasi.app'}),
  tagTypes: ['Login'],
  endpoints: builder => ({
    loginUser: builder.mutation<LoginResponse, {body: LoginPayload}>({
      query: login => ({
        url: '/login',
        method: 'POST',
        body: login.body,
      }),
    }),
  }),
});

export const {useLoginUserMutation} = loginApi;
