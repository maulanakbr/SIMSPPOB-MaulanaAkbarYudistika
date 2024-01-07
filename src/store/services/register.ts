import {BASE_URL} from '@env';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

type RegisterResponse = {
  status: string;
  message: string;
  data: null;
};

export type RegisterPayload = {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
};

export const registerApi = createApi({
  reducerPath: 'registerApi',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  tagTypes: ['Register'],
  endpoints: builder => ({
    registerUser: builder.mutation<RegisterResponse, RegisterPayload>({
      query: register => ({
        url: '/registration',
        method: 'POST',
        body: {
          email: register.email,
          firstName: register.first_name,
          lastName: register.last_name,
          password: register.password,
        },
      }),
    }),
  }),
});

export const {useRegisterUserMutation} = registerApi;
