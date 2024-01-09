import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import type {AxiosError} from 'axios';

import {banner as bannerService, service as serviceService} from '@/services';
import type {BannerData, BaseSliceState, ServiceData} from '@/types';

export type InformationState = {
  banners: BannerData[] | null;
  services: ServiceData[] | null;
} & BaseSliceState;

const initialState: InformationState = {
  banners: null,
  services: null,
  isError: '',
  isLoading: false,
  isSuccess: false,
};

export const banner = createAsyncThunk('information/banner', async () => {
  try {
    const {data} = await bannerService();
    return data;
  } catch (error) {
    const err = error as AxiosError;
    throw new Error(err.message);
  }
});

export const service = createAsyncThunk('information/services', async () => {
  try {
    const {data} = await serviceService();
    return data;
  } catch (error) {
    const err = error as AxiosError;
    throw new Error(err.message);
  }
});

const informationSlice = createSlice({
  name: 'information',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(banner.pending, state => {
        state.isLoading = true;
      })
      .addCase(banner.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.banners = action.payload.data;
      })
      .addCase(banner.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = action.error.message || '';
      })
      .addCase(service.pending, state => {
        state.isLoading = true;
      })
      .addCase(service.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.services = action.payload.data;
      })
      .addCase(service.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = action.error.message || '';
      });
  },
});

export const informationReducer = informationSlice.reducer;
