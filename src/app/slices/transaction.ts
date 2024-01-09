import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import type {AxiosError} from 'axios';

import {
  balance as balanceService,
  topUp as topUpService,
  TransactionHistoryParams,
  transactionHistory as transactionHistoryService,
  transaction as transactionService,
} from '@/services';
import type {
  BalanceData,
  BaseSliceState,
  TopUpPayload,
  TransactionData,
  TransactionHistoryData,
  TransactionPayload,
} from '@/types';

type TransactionState = {
  balance: BalanceData | null;
  transaction: TransactionData | null;
  transactionHistory: TransactionHistoryData[] | undefined;
} & BaseSliceState;

const initialState: TransactionState = {
  balance: null,
  transaction: null,
  transactionHistory: [],
  isError: '',
  isLoading: false,
  isSuccess: false,
};

export const balance = createAsyncThunk('payment/balance', async () => {
  try {
    const {data} = await balanceService();
    return data;
  } catch (error) {
    const err = error as AxiosError;
    throw new Error(err.message);
  }
});

export const topUp = createAsyncThunk('payment/topup', async (payload: TopUpPayload) => {
  try {
    const {data} = await topUpService(payload);
    return data;
  } catch (error) {
    const err = error as AxiosError;
    throw new Error(err.message);
  }
});

export const transaction = createAsyncThunk(
  'payment/transaction',
  async (payload: TransactionPayload) => {
    try {
      const {data} = await transactionService(payload);
      return data;
    } catch (error) {
      const err = error as AxiosError;
      throw new Error(err.message);
    }
  },
);

export const transactionHistory = createAsyncThunk(
  'payment/transaction/history',
  async (payload: TransactionHistoryParams) => {
    try {
      const {data} = await transactionHistoryService(
        `?offset=${payload.offset}&limit=${payload.limit}` as unknown as TransactionHistoryParams,
      );

      return data;
    } catch (error) {
      const err = error as AxiosError;
      throw new Error(err.message);
    }
  },
);

const transactionSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(balance.pending, state => {
        state.isLoading = true;
      })
      .addCase(balance.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.balance = action.payload.data;
      })
      .addCase(balance.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = action.error.message || '';
      })
      .addCase(topUp.pending, state => {
        state.isLoading = true;
      })
      .addCase(topUp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.balance = action.payload.data;
      })
      .addCase(topUp.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = action.error.message || '';
      })
      .addCase(transaction.pending, state => {
        state.isLoading = true;
      })
      .addCase(transaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.transaction = action.payload.data;
      })
      .addCase(transaction.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = action.error.message || '';
      })
      .addCase(transactionHistory.pending, state => {
        state.isLoading = true;
      })
      .addCase(transactionHistory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.transactionHistory = action.payload.data?.records;
      })
      .addCase(transactionHistory.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = action.error.message || '';
      });
  },
});

export const transactionReducer = transactionSlice.reducer;
